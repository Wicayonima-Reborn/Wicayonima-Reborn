import fs from "fs";

const profile = JSON.parse(fs.readFileSync("profile.json", "utf-8"));

const readme = `
<h1 align="center">Hi, I'm ${profile.profile.name}</h1>

<p align="center">
  ${profile.profile.title} • ${profile.profile.focus.join(" • ")}
</p>

<p align="center">
  <a href="${profile.profile.website}">
    ${profile.profile.website}
  </a>
</p>

---

## About Me
${profile.about.summary}

**Principles**
${profile.about.principles.map(p => `- ${p}`).join("\n")}

---

## Tech Stack
${profile.tech_stack.join(", ")}

---

## Active Work
${profile.active_work.map(w => `- ${w}`).join("\n")}
`;

fs.writeFileSync("README.md", readme.trim());
