import { Configuration, OpenAIApi } from "openai";
import fs from "fs";

const configuration = new Configuration({
  organization: process.env.OPENAI_ORG_ID,
  apiKey: process.env.OPENAI_API_KEY,
});

// console.log(configuration);

const openai = new OpenAIApi(configuration);

// sample call to list our available engines
const response = await openai.listEngines();

// console.log(`response: ${JSON.stringify(response.data)}`);

fs.writeFileSync("openAi-listEngines.json", JSON.stringify(response.data));
console.log(`wrote response to file.`);
