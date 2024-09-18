import BeforeAfterSection from "@/components/BeforeAfterSection";
import ServiceCard from "@/components/ServiceCard";
import DifferenceSection from "@/components/DifferenceSection";
import {
  beforeAfterImages,
  serviceArray,
  differenceArray,
} from "./homeContent";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <section className="flex justify-center items-center bg-red-600 text-white py-20 h-[63vh]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center bg-red-500 p-7 rounded-md">
              <h1 className="text-4xl font-bold mb-4">safety sealers</h1>
              <p className="text-xl">
                waterproofing Consultants, Engineers & Contractors Ruberiods&#39;s
                Contract Agent
              </p>
            </div>
          </div>
        </section>
        <ServiceCard serviceArray={serviceArray} />
        <DifferenceSection differenceArray={differenceArray} />
        <BeforeAfterSection images={beforeAfterImages} />
      </main>
    </div>
  );
}
