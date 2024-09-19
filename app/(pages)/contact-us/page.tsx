import ContactForm from "./ContactForm";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us",
  };
}

export default function ContactPage() {
  return (
    <>
      {/* Heading */}
      <div className="bg-red-600 h-52 flex items-center pl-12">
        <h1 className="text-white text-4xl font-bold">Contact Us</h1>
      </div>
      {/* Content */}
      <div className="container mx-auto py-10">
        <ContactForm />
      </div>
    </>
  );
}
