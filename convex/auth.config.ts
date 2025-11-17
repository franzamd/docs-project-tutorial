import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://special-eagle-22.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig;
