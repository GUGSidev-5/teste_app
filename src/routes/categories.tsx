import { createFileRoute } from "@tanstack/react-router";
import { CategoriesPage } from "@/components/spotlight";

export const Route = createFileRoute("/categories")({
  head: () => ({ meta: [
    { title: "Especialidades Musicais — Spotlight" },
    { name: "description", content: "Explore músicos por especialidade, timbre e disponibilidade." },
    { property: "og:title", content: "Especialidades Musicais — Spotlight" },
    { property: "og:description", content: "Explore músicos por especialidade, timbre e disponibilidade." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: CategoriesPage,
});