import Image from "next/image";

interface DifferenceItem {
  paragraph: string;
}

interface DifferenceSectionProps {
  differenceArray: DifferenceItem[];
}

const DifferenceSection: React.FC<DifferenceSectionProps> = ({
  differenceArray,
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto min-w-full px-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
            <ul className="space-y-2">
              {differenceArray.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  {item.paragraph}
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
              Check DP Application
            </button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/others/difference-section-image.jpg"
              alt="Coffee"
              width={600}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
