import story1 from '@/assets/story.jpg'

export const About = () => (
  <div className="w-full py-10 lg:py-20 px-10 lg:px-8 scroll-mt-10" id="about">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
        <img src={story1} className="rounded-md max-w-fit lg:max-w-lg aspect-video h-auto lg:b-40 flex-1"/>
        <div className="flex gap-4 pl-0 lg:pl-10 flex-col flex-1">
          <div className="flex gap-4 flex-col">
            <h2 className="text-5xl lg:text-7xl tracking-tighter max-w-lg font-regular text-left bg-gradient-to-b from-green-500 to-green-800 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-lg max-w-fit lg:max-w-4xl leading-relaxed tracking-tight text-muted-foreground text-left">
              Nestled in the heart of the city, our restaurant began as a dream shared around a family table. Passed down through generations, our recipes carry the soul of the Mediterranean — rich with tradition, love, and the warmth of home. What started as a humble kitchen has grown into a space where old-world flavors meet modern creativity. Every dish we serve is a tribute to our heritage, reimagined with a fresh twist to delight today’s palate. We invite you to join our family at the table, where every meal tells a story.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);