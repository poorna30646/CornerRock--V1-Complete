import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

// Do not add NEXT_PUBLIC_* values here. Those are available during the build
// and are intentionally inlined into the browser bundle by Next.js.
const serverRuntimeVariables = [
  "MONGODB_URI",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "COMPANY_NOTIFICATION_EMAIL",
];

const missingVariables = serverRuntimeVariables.filter(
  (name) => !process.env[name]
);

if (missingVariables.length > 0) {
  console.error(
    `[amplify] Missing required server runtime variables: ${missingVariables.join(
      ", "
    )}`
  );
  process.exit(1);
}

const envFileContents = serverRuntimeVariables
  .map((name) => `${name}=${JSON.stringify(process.env[name])}`)
  .join("\n");

writeFileSync(
  resolve(process.cwd(), ".env.production"),
  `${envFileContents}\n`,
  { encoding: "utf8", mode: 0o600 }
);

console.log(
  `[amplify] Prepared .env.production for ${serverRuntimeVariables.length} server runtime variables.`
);
