import houseDetails from "../lib/openAi.js";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const dailyPrediction = async (req, res) => {
  const { sign , nakshatra } = req.body;
  const date = new Date();
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDay();

  const prompt = `Based on the provided Rasi: ${sign} and ${nakshatra} nakshatra,  generate today's prediction Today  ${month}/${day}/${year}, covering Important Life Segments in Layman Words,  and Provide s Pratical Action Plan and Positive Affirmation for today Write Prediction in Single Pharagraph in 100  words`;
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",

    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return res.status(200).send(response.choices[0].message.content.toString());
};


export const housePrediction = async (req, res) => {
  const { position, sign, house } = req.body;

  const response = await houseDetails(position, house, sign);

  res.status(200).send(response);
};

export const lifePrediction = async (req, res) => {
  const {data} = req.body;
  console.log('hiii');
  console.log(data[0]);
  res.status(200).send(data);
};
