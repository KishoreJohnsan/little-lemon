import FooterGlow from "@/components/footer";
import Header1 from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <Toaster position="top-center" closeButton richColors />
      <Header1 />
      <Outlet />
      <FooterGlow />
    </>
  ),
});
