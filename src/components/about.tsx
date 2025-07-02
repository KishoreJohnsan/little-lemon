import story1 from "@/assets/story.webp";

export const About = () => (
  <div className="w-full py-8 px-10 lg:px-8 scroll-mt-24" id="about">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row gap-12 lg:items-center">
        <img
          src={story1}
          alt="The image is about a bustling kitchen in a restaurant, where chefs are actively engaged in food preparation"
          className="rounded-md max-w-fit lg:max-w-lg aspect-auto object-scale-down h-auto lg:b-40 flex-1"
        />
        
          <div className="flex gap-8 flex-col">
            <h2 className="text-5xl lg:text-7xl tracking-tighter max-w-lg font-regular text-left bg-gradient-to-b from-green-500 to-green-800 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-lg max-w-fit lg:max-w-4xl leading-relaxed tracking-tight text-muted-foreground text-justify lg:text-left">
              Nestled in the heart of the city, our restaurant began as a dream
              shared around a family table. Passed down through generations, our
              recipes carry the soul of the Mediterranean — rich with tradition,
              love, and the warmth of home. What started as a humble kitchen has
              grown into a space where old-world flavors meet modern creativity.
              Every dish we serve is a tribute to our heritage, reimagined with
              a fresh twist to delight today's palate. We invite you to join our
              family at the table, where every meal tells a story.
            </p>
          </div>
        
      </div>
    </div>
  </div>
);
