import bycrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import nodemailer from "nodemailer";
import axios from "axios";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

async function getLocationFromAddress(address) {
  const url = `https://nominatim.openstreetmap.org/search?addressdetails=1&q=${encodeURIComponent(address)}&format=json`;
  console.log(address);
  console.log(url);

  try {
    console.log('Guru');
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();

    if (data.length > 0) {
      const { lat, lon } = data[0];
      console.log(lat);
      console.log(lon);

      return [lat, lon];
    } else {
      console.log("Address not found");
    }
  } catch (error) {
    console.error("Error fetching location:", error.message);
  }
}

export const register = async (req, res) => {
  const { email, pass } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      return res.status(400).json("Already User");
    }

    const hashedPassword = await bycrypt.hash(pass, 10);

    const newUser = await prisma.user.create({
      data: {
        password: hashedPassword,
        email,
      },
    });

    const { password: userPass, ...userinfo } = newUser;

    res.status(200).json(userinfo);
  } catch (err) {
    console.log(err.message.meta);

    res.json(err);
  }
};

export const otpVerify = async (req, res) => {
  const { email } = req.body;

  console.log(email);
  const OTP = Math.floor(1000 + Math.random() * 9000);

  const user = await prisma.user.findUnique({ where: { email } });

  if (user) {
    return res.status(402).json({ message: "user already" });
  }

  const info = await transporter.sendMail({
    from: {
      name: "admin@motorAct",
      address: process.env.USER,
    },
    to: email,
    subject: "Otp Email Verification",
    text: `Your Otp for the verification:${OTP}`,

    html: `<div
        style='
        display:grid;
        place-items:center;
        background-color: #FFF;
        height:100px;
        font-size: xx-large;
        font-weight: bold;
      '
      >
        <p style="text-align:center">Otp:${OTP}</p>
      </div>`,
  });

  console.log(OTP);
  return res.status(200).json(OTP);
};

export const login = async (req, res) => {
  const { email, pass } = req.body;
  console.log(email);

  console.log(email);

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(403).json({ message: "Enter a Valid Credientails" });
    }

    const checkPass = bycrypt.compareSync(pass, user.password);

    if (!checkPass) {
      return res.status(403).json({ message: "Enter a Valid Credientails" });
    }

    const { password, ...userInfo } = user;

    return res.status(200).json(userInfo);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Login Failed" });
  }
};

export const addDetails = async (req, res) => {
  const id = req.params.id;
  const { name, dob, location } = req.body;
  let locations = await getLocationFromAddress(location);
  const latitude = locations[0];
  const longtitude = locations[1];

  try {
    const response = await prisma.user.update({
      where: { id },
      data: {
        name,
        dob,
        location,
        latitude,
        longtitude,
      },
    });
    const { password, ...userInfo } = response;

    return res.status(200).json(userInfo);
  } catch (e) {
    console.log(e);
  }
};

export const getUser = async (req, res) => {
  const { id } = req.body;

  console.log(id);

  try {
    const response = await prisma.user.findUnique({ where: { id } });
    const { password, ...userInfo } = response;

    return res.status(200).json(userInfo);
  } catch (err) {
    res.status(500).json({ message: "not a user" });
  }
};

export const changeDetails = async (req, res) => {
  const id = req.params.id;
  const { time, location } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { id } });
    let locations = await getLocationFromAddress(location);
    const latitude = locations[0];
    const longtitude = locations[1];

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let dob = user.dob;
    let timeonly;

    if (typeof dob === 'string') {
      dob = dob.substring(0, 11); 
      timeonly = time.split(' ')[1];
    }

    const updateDob = dob + timeonly;

    const response = await prisma.user.update({
      where: { id },
      data: {
        dob: updateDob,
        location,
        latitude,
        longtitude,
      },
    });
    
    const { password, ...userInfo } = response;

    return res.status(200).json(userInfo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};


