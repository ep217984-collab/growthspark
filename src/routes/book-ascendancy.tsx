import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/book-ascendancy")({
  component: () => <Outlet />,
});
