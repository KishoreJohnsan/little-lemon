import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Menu } from "@/components/menu";
import TestimonialCarousel from "@/components/testimonial";
import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react/jsx-runtime";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Menu/>
      <TestimonialCarousel/>
    </Fragment>
  );
}
