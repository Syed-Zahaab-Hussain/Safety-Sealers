import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordionArray } from "./blogContent";

const Blog = () => {
  return (
    <>
      {/* Heading */}
      <div className="bg-red-600 h-52 flex items-center pl-12">
        <h1 className="text-white text-4xl font-bold">Blog</h1>
      </div>

      {/* Content */}
      <div className="p-12">
        <Accordion type="single" collapsible className="w-full">
          {accordionArray.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Blog;
