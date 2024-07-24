import houseDetails from "../lib/openAi.js";

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
  const { sign } = req.body;
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  // const response = await run(
  //   `My horoscope sign is ${sign} create moon based prediction on ${month}/${day}/${year} about my today in paragraph`
  // );

  res.status(200).json(response);
};

export const healthPrediction = async (req, res) => {
  const { sign } = req.body;
  const date = new Date();
  const year = date.getFullYear();
  const monthNum = date.getMonth();
  const day = date.getDay();

  // const response = await run(
  //   `My daily horoscope Prediction for ${sign} sign on ${months[monthNum]} month ${year} in Indian Standard time zone about my Health in layman terms `
  // );

  // const remediesResponse = await run(
  //   `My daily horoscope Prediction for ${sign} sign on ${months[monthNum]} month ${year} in Indian Standard time zone about Remedies in my Health in layman terms`
  // );

  res.status(200).json({ predicit: response, rc: remediesResponse });
};

export const wealthPrediction = async (req, res) => {
  const { sign } = req.body;
  const date = new Date();
  const year = date.getFullYear();
  const monthNum = date.getMonth();
  const day = date.getDay();

  // const response = await run(
  //   `My daily horoscope Prediction for ${sign} sign on ${months[monthNum]} month ${year} in Indian Standard time zone about my Wealth,financial status,work in layman terms `
  // );

  // const remediesResponse = await run(
  //   `My daily horoscope Prediction for ${sign} sign on ${months[monthNum]} month ${year} in Indian Standard time zone about Remedies in my Wealth,financial status,work in layman terms`
  // );

  res.status(200).json({ predicit: response, rc: remediesResponse });
};

export const emotionPrediction = async (req, res) => {
  const { sign } = req.body;
  const date = new Date();
  const year = date.getFullYear();
  const monthNum = date.getMonth();
  const day = date.getDay();

  // const response = await run(
  //   `My daily horoscope Prediction for ${sign} sign on ${months[monthNum]} month ${year} in Indian Standard time zone about my Emotional,pressure,happiness in layman terms `
  // );

  // const remediesResponse = await run(
  //   `My daily horoscope Prediction for ${sign} sign on ${months[monthNum]} month ${year} in Indian Standard time zone about Remedies in my Emotional,pressure,happiness in layman terms`
  // );

  res.status(200).json({ predicit: response, rc: remediesResponse });
};

export const housePrediction = async (req, res) => {
  const { position, sign, house } = req.body;

  const response = await houseDetails(position, house, sign);

  res.status(200).send(response);
};
