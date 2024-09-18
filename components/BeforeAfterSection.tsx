import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

interface BeforeAfterSectionProps {
  images: { id: number; before: string; after: string }[];
}

const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ images }) => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">
        Our Renovation Projects
      </h2> 

      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {images.map((project) => (
            <CarouselItem key={project.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col sm:flex-row  p-6">
                    <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pr-2">
                      <h3 className="text-xl font-semibold mb-2 text-center">
                        Before
                      </h3>
                      <Image
                        src={project.before}
                        alt="Before renovation"
                        width={400}
                        height={300}
                        className="rounded-lg object-cover h-64"
                      />
                    </div>
                    <div className="w-full sm:w-1/2 sm:pl-2">
                      <h3 className="text-xl font-semibold mb-2 text-center">
                        After
                      </h3>
                      <Image
                        src={project.after}
                        alt="After renovation"
                        width={400}
                        height={300}
                        className="rounded-lg object-cover h-64"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default BeforeAfterSection;
