import { createFileRoute } from "@tanstack/react-router";
import { DiscoverPage } from "@/components/spotlight";

export const Route = createFileRoute("/discover")({
  head: () => ({ meta: [
    { title: "Radar Tape — Spotlight" },
    { name: "description", content: "Ouça amostras cruas de 15 segundos direto dos estúdios." },
    { property: "og:title", content: "Radar Tape — Spotlight" },
    { property: "og:description", content: "Ouça amostras cruas de 15 segundos direto dos estúdios." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: DiscoverPage,
});