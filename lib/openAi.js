import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function houseDetails(position, house, planets) {
  let planetsString = "";

  if (planets.length === 0) {
    planetsString = "";
  } else {
    planetsString = `and ${planets} in ${house}`;
  }

  const prompt = `I have ${house} as my ${position} house ${planetsString} in my birth chart. What are the positive and negative impacts? Provide practical result-oriented remedies for the negative impacts.Generate paragraph or points less than 100 words`;

  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",

    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return res.choices[0].message.content.toString();
}
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

  const prompt = `My horoscope sign is ${sign} create moon based prediction on ${month}/${day}/${year} about my today in paragraph`;
  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",

    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return res.choices[0].message.content.toString();
};
