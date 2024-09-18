import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import {
  introductionText,
  milestoneText,
  honorText,
  visionText,
  missionText,
  coreValuesText,
  qhsePolicyText,
} from "./CompanyProfileContent";

const CompanyProfile = () => {
  return (
    <>
      {/* Heading */}
      <div className="bg-red-600 h-52 flex items-center pl-12">
        <h1 className="text-white text-4xl font-bold">Company Profile</h1>
      </div>

      {/* Introduction */}
      <div className="py-16">
        <Card className="min-h-[80vh] p-6 md:p-12 border-none shadow-none">
          <div className="flex flex-col md:flex-row items-start gap-8 w-full h-full">
            <CardContent className="w-full md:w-1/2">
              <p>{introductionText}</p>
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

      {/* Milestone & Honor */}
      <div className="p-6 md:p-16">
        <p className="mb-4">{milestoneText}</p>
        <p className="font-bold">{honorText}</p>
      </div>

      {/* Vision, Mission, Core Values, QHSE Policy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-16">
        {/* First Column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Vision:</h2>
            <p>{visionText}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Mission:</h2>
            <p>{missionText}</p>
          </div>
        </div>

        {/* Second Column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Core Values:</h2>
            <p>{coreValuesText}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">QHSE Policy:</h2>
            <p>{qhsePolicyText}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
