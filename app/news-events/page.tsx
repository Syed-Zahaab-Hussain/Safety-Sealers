import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { cardContent } from "./news-eventsContent";

const NewsEvents = () => {
  return (
    <>
      {/* Heading */}
      <div className="bg-red-600 h-52 flex items-center pl-12">
        <h1 className="text-white text-4xl font-bold">News & Events</h1>
      </div>

      {/* News and Events */}
      <div className="p-8 mb-8">
        <h2 className="text-2xl font-bold">Latest News and Events</h2>
        <div className="mt-6 grid grid-cols-3">
          {cardContent.map((item, index) => (
            <Card key={index} className="max-w-[350px]">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={350}
                  height={350}
                  className="rounded-lg object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsEvents;
