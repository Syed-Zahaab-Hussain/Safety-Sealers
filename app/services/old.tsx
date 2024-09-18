import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { serviceArray } from "./serviceContent";

const Services = () => {
  return (
    <>
      {/* Heading */}
      <div className="bg-red-600 h-52 flex items-center pl-12">
        <h1 className="text-white text-4xl font-bold">Application Service</h1>
      </div>

      {/* Introduction */}
      <div className="py-16">
        <Card className="min-h-[80vh] p-6 md:p-12 border-none shadow-none">
          <div className="flex flex-col md:flex-row items-start gap-8 w-full h-full">
            <CardContent className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Our Services</h2>
              <ul className="space-y-2">
                {serviceArray.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    {item.paragraph}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="w-full md:w-1/2 flex justify-center md:justify-start">
              <Image
                src="https://thumbs.dreamstime.com/z/vision-goal-action-success-business-strategy-ladder-arrow-text-84946026.jpg"
                alt="success image"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </CardFooter>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Services;
