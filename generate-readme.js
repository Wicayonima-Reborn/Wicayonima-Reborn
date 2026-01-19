import fs from "fs";
import Ajv from "ajv";
import addFormats from "ajv-formats";

const mode = process.argv[2] ?? "json";

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const schema = JSON.parse(fs.readFileSync("profile.schema.json", "utf-8"));
const data = JSON.parse(fs.readFileSync("profile.json", "utf-8"));

const validate = ajv.compile(schema);
if (!validate(data)) {
  console.error(validate.errors);
  process.exit(1);
}

if (mode === "human") {
  const readme = `
<h1 align="center">Hi, I'm ${data.profile.name}</h1>

<p align="center">
  ${data.profile.title} • ${data.profile.focus.join(" • ")}
</p>

<p align="center">
  <a href="${data.profile.website}">${data.profile.website}</a>
</p>
  `;
  fs.writeFileSync("README.md", readme.trim());
  process.exit(0);
}

const pretty = JSON.stringify(data, null, 2);

const readme = `
\`\`\`json
${pretty}
\`\`\`
`;

fs.writeFileSync("README.md", readme.trim());


