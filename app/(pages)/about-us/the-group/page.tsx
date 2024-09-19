import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import {
  introductionText,
  bodyText1,
  bodyText2,
  theGroupCardsArray,
} from "./theGroupContent";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "The Group",
    description: introductionText,
  };
}

const TheGroup = () => {
  return (
    <>
      {/* Heading */}
      <div className="bg-red-600 h-52 flex items-center pl-12">
        <h1 className="text-white text-4xl font-bold">The Group</h1>
      </div>

      {/* Content */}
      <div className="p-16">
        <p className="mb-4">{introductionText}</p>
        <p className="mb-4">{bodyText1}</p>
        <p className="mb-4">{bodyText2}</p>

        <div className="mt-8">
          {theGroupCardsArray.map((company, index) => (
            <div key={index} className="flex items-center gap-2">
              <span>&#8594;</span>
              <p className="font-bold">{company.heading}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div>
        {theGroupCardsArray.map((content, index) => (
          <Card key={index} className="min-h-screen p-6 md:p-12">
            <div className="flex flex-col md:flex-row items-start gap-8 w-full h-full">
              {/* Card content */}
              <CardContent className="w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-6">{content.heading}</h3>
                <p>{content.paragraph}</p>
              </CardContent>

              {/* Image */}
              <CardFooter className="w-full md:w-1/2 flex justify-center md:justify-start">
                <Image
                  src={content.image}
                  alt={content.heading}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default TheGroup;
