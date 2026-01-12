import fs from "fs";

const json = fs.readFileSync("profile.json", "utf-8");

const readme = `
\`\`\`json
${json}
\`\`\`
`;

fs.writeFileSync("README.md", readme.trim());
