import { createFileRoute } from "@tanstack/react-router";
import { MusicianPage } from "@/components/spotlight";

export const Route = createFileRoute("/musician/helena-duarte")({
  head: () => ({ meta: [
    { title: "Helena Duarte — Spotlight" },
    { name: "description", content: "Conheça Helena Duarte, cordista de violoncelo elétrico e synth cello." },
    { property: "og:title", content: "Helena Duarte — Spotlight" },
    { property: "og:description", content: "Conheça Helena Duarte, cordista de violoncelo elétrico e synth cello." },
    { property: "og:type", content: "profile" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: MusicianPage,
});