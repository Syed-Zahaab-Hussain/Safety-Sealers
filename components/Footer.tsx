import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white pt-10 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Corporate Office</h3>
          <p className="flex items-center justify-center mb-2">
            <MapPin size={16} className="mr-2" /> 56/38-C, Jinnah Town, Quetta
          </p>
          <p className="flex items-center justify-center mb-2">
            <Phone size={16} className="mr-2" /> +92{" "}
            {process.env.NEXT_PUBLIC_PHONE_NUMBER}
          </p>
          <p className="flex items-center justify-center mb-2">
            <Mail size={16} className="mr-2" /> safetysealers@gmail.com
          </p>
        </div>
      </div>
      <div className="mt-8 text-center text-black bg-white py-4">
        <p>&copy; 2024 Safety Sealers. All rights reserved.</p>
      </div>
    </footer>
  );
}
