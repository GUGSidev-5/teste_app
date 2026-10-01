import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/spotlight";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Início — Spotlight" },
    { name: "description", content: "Descubra os talentos instrumentais e vocais em ascensão hoje." },
    { property: "og:title", content: "Início — Spotlight" },
    { property: "og:description", content: "Descubra os talentos instrumentais e vocais em ascensão hoje." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});
