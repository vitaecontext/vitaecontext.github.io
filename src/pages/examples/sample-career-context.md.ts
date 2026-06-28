import type { APIRoute } from "astro";
import { sampleContext } from "@data/sampleContext";

export const GET: APIRoute = () =>
  new Response(sampleContext, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'inline; filename="sample-career-context.md"',
    },
  });
