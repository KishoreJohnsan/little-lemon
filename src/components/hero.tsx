import { Sparkles, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero2 from '@/assets/hero2.jpg';
import hero3 from '@/assets/hero3.jpg';

export const Hero = () => (
  <div className="w-full pt-20 pb-10 lg:pt-24 lg:pb-15 px-10 lg:px-8" id="home"> 
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl lg:text-7xl max-w-lg tracking-tighter text-left font-regular bg-gradient-to-b from-green-500 to-green-800 bg-clip-text text-transparent">
              Tradition Meets Taste
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-xl text-wrap">
            Rooted in tradition, crafted with care — our Mediterranean dishes blend old-world flavors with a modern touch. Every plate tells a story, made with fresh, local ingredients. Join us for a warm, authentic dining experience.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-4">
            <Button className="gap-4 py-6 lg:px-6 cursor-pointer text-md" variant="outline" effect="ringHover">
              <Sparkles className="w-4 h-4" /> View Specials
            </Button>

            <Button className="gap-4 py-6 lg:px-8 cursor-pointer bg-gradient-to-b from-yellow-400 to-amber-400 text-black text-md" effect="ringHover">
              <Utensils className="w-4 h-4" /> Dine with Us
            </Button>
            
          </div>
        </div>
        <div className="grid grid-row-3 md:grid-cols-2 gap-8">
          <div className="hidden md:block bg-transparent rounded-md w-auto h-10 md:h-20"></div>
          <img src={hero3} className="rounded-md aspect-square md:aspect-auto md:row-span-2"/>
          <img src={hero2} className="rounded-md aspect-square md:aspect-auto md:row-span-2"/>
          <div className="hidden md:block bg-transparent rounded-md w-auto h-10 md:h-20"></div>
        </div>
      </div>
    </div>
  </div>
);