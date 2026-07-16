import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listMatchesTool from "./tools/list-matches";

// Direct Supabase issuer host; VITE_SUPABASE_PROJECT_ID is inlined at build time.
const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "arena-mcp",
  title: "Arena MCP",
  version: "0.1.0",
  instructions:
    "Tools for the Arena sports companion app. Use `list_matches` to read the current match board (live scores, finished games, overtime).",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listMatchesTool],
});
