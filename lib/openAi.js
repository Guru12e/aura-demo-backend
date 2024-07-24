import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function houseDetails(position, house, planets) {
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
