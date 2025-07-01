import { Sparkles, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero2 from "@/assets/hero2.webp";
import hero3 from "@/assets/hero3.webp";
import { Link } from "@tanstack/react-router";

export const Hero = () => (
  <div className="w-full pt-20 pb-8 lg:pt-24 lg:pb-15 px-10 lg:px-8" id="home">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-y-8 lg:gap-12 items-center lg:grid-cols-2">
        <div className="w-full flex gap-4 flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl lg:text-7xl max-w-xl tracking-tighter text-left font-regular bg-gradient-to-b from-green-500 to-green-800 bg-clip-text text-transparent">
              Tradition Meets Taste
            </h1>
            <p className="text-xl text-justify lg:text-left leading-relaxed tracking-tight text-muted-foreground max-w-fit lg:max-w-4xl ">
              Rooted in tradition, crafted with care — our Mediterranean dishes
              blend old-world flavors with a modern touch. Every plate tells a
              story, made with fresh, local ingredients. Join us for a warm,
              authentic dining experience.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-4">
            <Button
              className="gap-4 py-6 lg:px-6 cursor-pointer text-md"
              variant="outline"
              effect="ringHover"
            >
              <Sparkles className="w-4 h-4" /> View Specials
            </Button>

            <Button
              className="py-6 lg:px-6 cursor-pointer bg-gradient-to-b from-yellow-400 to-amber-400 text-black text-md"
              effect="ringHover"
            >
              <Link className="gap-4 flex justify-center items-center" to="/reservations" viewTransition>
               <Utensils className="w-4 h-4" /> Dine with Us
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid col-span-6 md:col-auto sm:grid-cols-2 gap-8">
          <div className="hidden lg:block bg-transparent rounded-md w-auto h-10 md:h-20"></div>
          <img
            src={hero3} alt="Image of bruschetta, a classic Italian appetizer"
            width="960"
            height="640"
            className="rounded-md aspect-square lg:aspect-auto md:row-span-2"
          />
          <img
            src={hero2} alt="Image of Shakshuka, A Maghrebi dish, popular in North Africa and the Middle East"
            width="960"
            height="640"
            className="rounded-md w-min h-min aspect-square lg:aspect-auto md:row-span-2"
          />
          <div className="hidden lg:block bg-transparent rounded-md w-auto h-10 md:h-20"></div>
        </div>
      </div>
    </div>
  </div>
);
