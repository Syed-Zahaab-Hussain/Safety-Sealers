import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceItem {
  heading: string;
  paragraph: string;
  // text: string;
}

interface ServiceCardProps {
  serviceArray: ServiceItem[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceArray }) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {serviceArray.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="font-bold">{item.heading}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">{item.paragraph}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/services/${item.heading
                    .replaceAll(" ", "-")
                    .toLowerCase()}`}
                >
                  <Button variant="destructive">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
