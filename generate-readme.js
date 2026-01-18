import fs from "fs";

const raw = fs.readFileSync("profile.json", "utf-8");
const parsed = JSON.parse(raw);

// prettify JSON
const pretty = JSON.stringify(parsed, null, 2);

const readme = `
\`\`\`json
${pretty}
\`\`\`
`;

fs.writeFileSync("README.md", readme.trim());

