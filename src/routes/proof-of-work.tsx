import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/proof-of-work")({
  component: () => <Outlet />,
});
