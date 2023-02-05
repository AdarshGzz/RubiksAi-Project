const dotenv = require("dotenv");
dotenv.config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: "org-9QsgDB1ZwNukKgDHxjEbYbpA",
  apiKey: `${process.env.OPENAI_API_KEY}`,
});
const openai = new OpenAIApi(configuration);

module.exports = openai;
