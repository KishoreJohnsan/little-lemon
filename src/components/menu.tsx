import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dish1 from '@/assets/dish1.png';
import dish2 from '@/assets/dish2.webp';
import dish3 from '@/assets/dish3.jpg';
import dish4 from '@/assets/dish4.jpeg';

export const Menu = () => (
  <div id="menu" className="w-full py-10 lg:py-20 px-10 lg:px-8 scroll-mt-10">
    <div className="container mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-center lg:text-left text-5xl lg:text-6xl tracking-tighter max-w-xl font-regular bg-gradient-to-b from-green-500 to-green-800 bg-clip-text text-transparent">
          Fresh Picks of the Day...
        </h4>
        <Button className="py-6 lg:px-8 gap-4 bg-gradient-to-b from-yellow-500 to-amber-400 cursor-pointer text-black text-md" effect="ringHover">
          View Menu <MoveRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <img src={dish1} className="rounded-md aspect-video mb-4"></img>
          <h3 className="text-xl tracking-tight">Grilled Halloumi & Watermelon Salad</h3>
          <p className="text-muted-foreground text-base">
            A refreshing mix of grilled halloumi cheese, juicy watermelon cubes, mint, arugula, and a drizzle of pomegranate molasses.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <img src={dish2} className="rounded-md aspect-video mb-4"></img>
          <h3 className="text-xl tracking-tight">Sumac-Spiced Sea Bass</h3>
          <p className="text-muted-foreground text-base">
            Pan-seared sea bass fillet seasoned with sumac and za'atar, served over a bed of herbed couscous and roasted cherry tomatoes.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <img src={dish3} className="rounded-md aspect-video mb-4"></img>
          <h3 className="text-xl tracking-tight">Harissa Honey Chicken Skewers</h3>
          <p className="text-muted-foreground text-base">
            Tender chicken marinated in harissa and honey, grilled to perfection, and served with a cool yogurt-tahini dip.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <img src={dish4} className="rounded-md aspect-video mb-4"></img>
          <h3 className="text-xl tracking-tight">Stuffed Eggplant with Quinoa & Feta</h3>
          <p className="text-muted-foreground text-base">
            Roasted eggplant halves filled with a savory mix of quinoa, sun-dried tomatoes, olives, and crumbled feta, topped with a basil-lemon drizzle.
          </p>
        </div>
      </div>
    </div>
  </div>
);