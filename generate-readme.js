import fs from "fs";
import Ajv from "ajv";

const ajv = new Ajv({ allErrors: true });

const schema = JSON.parse(fs.readFileSync("profile.schema.json", "utf-8"));
const data = JSON.parse(fs.readFileSync("profile.json", "utf-8"));

const validate = ajv.compile(schema);
const valid = validate(data);

if (!valid) {
  console.error("Profile JSON validation failed:");
  console.error(validate.errors);
  process.exit(1);
}

const pretty = JSON.stringify(data, null, 2);

const readme = `
\`\`\`json
${pretty}
\`\`\`
`;

fs.writeFileSync("README.md", readme.trim());


