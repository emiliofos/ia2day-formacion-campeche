import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing";
import { Shell } from "@/components/shell";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Piloto automático · Taller 30 de octubre" }],
  }),
});

function Home() {
  return (
    <Shell barra>
      <Landing />
    </Shell>
  );
}
