import { createFileRoute } from "@tanstack/react-router";
import html from "../../arena_barber_sports_club.html?raw";

export const Route = createFileRoute("/original-file")({
  component: OriginalFilePage,
});

function OriginalFilePage() {
  return (
    <iframe
      srcDoc={html}
      title="Arena Barber Sports Club"
      style={{ width: "100vw", height: "100vh", border: "none", display: "block" }}
    />
  );
}
