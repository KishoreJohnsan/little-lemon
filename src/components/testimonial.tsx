'use client';

import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const defaultTestimonials = [
  {
    "text": "The flavors transported me straight to the Mediterranean coast. Every dish felt like a warm hug from a family kitchen.",
    "name": "Sophia Reynolds",
    "username": "@sophierose",
    "role": "Food Blogger"
  },
  {
    "text": "The ambiance is warm and welcoming, and the food is a perfect balance of tradition and creativity. A must-visit!",
    "name": "Liam Carter",
    "username": "@liamventures",
    "role": "Weekend Explorer"
  },
  {
    "text": "From the ambiance to the food, everything felt personal and heartfelt. A true gem for Mediterranean cuisine lovers.",
    "name": "Elena Martinez",
    "username": "@elenawanders",
    "role": "Travel Enthusiast"
  },
  {
    "text": "The grilled vegetables and hummus were out of this world. You can taste the love and tradition in every bite.",
    "name": "Daniel Klein",
    "username": "@danielkitchen",
    "role": "Chef & Culinary Instructor"
  },
  {
    "text": "A perfect blend of old-world charm and modern elegance. The staff made us feel like part of their family.",
    "name": "Claire Bennett",
    "username": "@clairetravels",
    "role": "Lifestyle Blogger"
  },
  {
    "text": "The attention to detail in every dish is remarkable. It’s more than a meal—it’s a cultural experience.",
    "name": "Lucas Meyer",
    "username": "@lucasnotes",
    "role": "Cultural Curator"
  }
];

interface TestimonialProps {
  testimonials?: {
    text: string;
    name: string;
    username: string;
    role?: string;
  }[];
  title?: string;
  subtitle?: string;
  autoplaySpeed?: number;
  className?: string;
}

export default function TestimonialCarousel({
  testimonials = defaultTestimonials,
  title = 'Loved by Locals & Travelers Alike',
  subtitle = 'Heartfelt words from guests who’ve tasted tradition and felt at home.',
  autoplaySpeed = 3000,
  className,
}: TestimonialProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplaySpeed);

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi, autoplaySpeed]);

  const allTestimonials = [...testimonials];

  return (
    <section
      className={cn('relative overflow-hidden py-8 lg:py-12 px-8', className)}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.2),transparent_60%)]" />
        <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[length:20px_20px] bg-grid-foreground/[0.02]" />
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mb-12 text-center md:mb-16"
        >
          <h1 className="mb-4 bg-gradient-to-b from-green-500 to-green-800 bg-clip-text text-4xl font-regular text-transparent md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <motion.p
            className="mx-auto max-w-fit lg:max-w-2xl text-base text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {allTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex justify-center px-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-full w-fit rounded-2xl border border-border bg-gradient-to-b from-secondary/20 to-card p-6 shadow-md backdrop-blur-sm"
                >
                  
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="mb-4 text-primary"
                  >
                    <div className="relative">
                      <Quote className="h-10 w-10 -rotate-180 text-green-800 fill-yellow-300" />
                    </div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="relative mb-6 text-base leading-relaxed text-foreground/90"
                  >
                    <span className="relative">{testimonial.text}</span>
                  </motion.p>

                  {/* Enhanced user info with animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="mt-auto flex items-center gap-3 border-t border-border/40 pt-2"
                  >
                    <Avatar className="h-10 w-10 border border-border ring-2 ring-primary/10 ring-offset-1 ring-offset-background">
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <h5 className="whitespace-nowrap font-medium text-green-800">
                        {testimonial.name}
                      </h5>
                      <div className="flex items-center gap-2">
                        <p className="whitespace-nowrap text-sm text-primary/80">
                          {testimonial.username}
                        </p>
                        {testimonial.role && (
                          <>
                            <span className="flex-shrink-0 text-muted-foreground">
                              •
                            </span>
                            <p className="whitespace-nowrap text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
