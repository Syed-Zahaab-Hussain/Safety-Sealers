import Link from "next/link";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="text-center p-12">
      <div className="space-y-4">
        <p className="text-4xl font-bold">Thank You!</p>
        <p className="text-xl">
          Your message has been successfully sent. We will get back to you as
          soon as possible.
        </p>
        <Button className=" text-white text-lg mt-6">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
