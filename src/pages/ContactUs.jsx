import {
  Box,
  Button,
  Input,
  Textarea,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

const ContactForm = () => (
  <Box
    as="form"
    action="https://formsubmit.co/552e0bdc76bc9a93c79728eacd438b4e"
    method="POST"
  >
    <Input
      type="hidden"
      name="_subject"
      value="New submission from contact form"
    />
    <Input
      type="hidden"
      name="_next"
      value={`${window.location.origin}/safety-sealers/thank-you`}
    />

    <FormControl>
      <FormLabel>Your Name</FormLabel>
      <Input type="text" name="name" required />
    </FormControl>

    <FormControl>
      <FormLabel>Your Email</FormLabel>
      <Input type="email" name="email" required />
    </FormControl>

    <FormControl>
      <FormLabel>Your Phone Number</FormLabel>
      <Input type="text" name="phone" required />
    </FormControl>

    <FormControl>
      <FormLabel>City</FormLabel>
      <Input type="text" name="city" required />
    </FormControl>

    <FormControl>
      <FormLabel>Subject</FormLabel>
      <Input type="text" name="subject" required />
    </FormControl>

    <FormControl>
      <FormLabel>Your Message</FormLabel>
      <Textarea name="message" required />
    </FormControl>

    <Button type="submit" mt={4} colorScheme="blue">
      Send Message
    </Button>
  </Box>
);

export default ContactForm;
