"use client";
import React, { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

interface BeforeAfterSectionProps {
  images: { id: number; before: string; after: string }[];
}

const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ images }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  const goToSlide = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">
        Our Renovation Projects
      </h2>

      <Carousel className="w-full max-w-4xl mx-auto" setApi={setApi}>
        <CarouselContent>
          {images.map((project) => (
            <CarouselItem key={project.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col sm:flex-row p-6">
                    <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pr-2">
                      <h3 className="text-xl font-semibold mb-2 text-center">
                        Before
                      </h3>
                      <div className="relative w-full h-64">
                        <Image
                          src={project.before}
                          alt="Before renovation"
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 sm:pl-2">
                      <h3 className="text-xl font-semibold mb-2 text-center">
                        After
                      </h3>
                      <div className="relative w-full h-64">
                        <Image
                          src={project.after}
                          alt="After renovation"
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>

      <div className="flex justify-center items-center mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index + 1 === current ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default BeforeAfterSection;
