// "use client";
// import { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
// } from "@/components/ui/form";
// import { useForm } from "react-hook-form";

// const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID ?? "";
// const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "";
// const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY ?? "";

// const ContactUs = () => {
//   const router = useRouter();
//   const form = useRef();
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     emailjs
//       .sendForm(serviceId, templateId, form.current, {
//         publicKey: publicKey,
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           router.push("/safety-sealers/thank-you");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };
//   return (
//     <>
//       {/* Heading */}
//       <div className="bg-red-600 h-52 flex items-center pl-12">
//         <h1 className="text-white text-4xl font-bold">Projects</h1>
//       </div>
//       {/* Content */}
//       <div>
//         <Form onSubmit={handleSubmit(onSubmit)}>
//           <form ref={form} className="space-y-6 p-12">
//             <FormField>
//               <FormItem>
//                 <FormLabel>Your Name</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="text"
//                     {...register("user_name", { required: true })}
//                   />
//                 </FormControl>
//               </FormItem>
//             </FormField>

//             <FormField>
//               <FormItem>
//                 <FormLabel>Your Email</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="email"
//                     {...register("user_email", { required: true })}
//                   />
//                 </FormControl>
//               </FormItem>
//             </FormField>

//             <FormField>
//               <FormItem>
//                 <FormLabel>Your Phone Number</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="text"
//                     {...register("user_phone", { required: true })}
//                   />
//                 </FormControl>
//               </FormItem>
//             </FormField>

//             <FormField>
//               <FormItem>
//                 <FormLabel>City</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="text"
//                     {...register("user_city", { required: true })}
//                   />
//                 </FormControl>
//               </FormItem>
//             </FormField>

//             <FormField>
//               <FormItem>
//                 <FormLabel>Subject</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="text"
//                     {...register("subject", { required: true })}
//                   />
//                 </FormControl>
//               </FormItem>
//             </FormField>

//             <FormField>
//               <FormItem>
//                 <FormLabel>Your Message</FormLabel>
//                 <FormControl>
//                   <Textarea {...register("message", { required: true })} />
//                 </FormControl>
//               </FormItem>
//             </FormField>

//             <Button
//               type="submit"
//               className="w-full bg-blue-600 text-white hover:bg-blue-700"
//             >
//               Send Message
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </>
//   );
// };

// export default ContactUs;

import ContactForm from "./ContactForm";

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
