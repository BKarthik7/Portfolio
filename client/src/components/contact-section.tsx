import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Define form using react-hook-form + zod
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  // Setup mutation for form submission
  const mutation = useMutation({
    mutationFn: (values: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });
  
  // Handle form submission
  const onSubmit = (values: ContactFormValues) => {
    setIsSubmitting(true);
    mutation.mutate(values);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
              Interested in working together? I'm always open to discussing new projects,
              creative ideas or opportunities to be part of your vision.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <motion.div 
              className="col-span-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <div className="bg-zinc-100 p-5 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="text-primary h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:bangikarthik7@gmail.com" className="text-sm text-primary hover:underline">
                        bangikarthik7@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-zinc-100 p-5 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="text-primary h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Phone</h3>
                      <a href="tel:+919110670792" className="text-sm text-primary hover:underline">
                        +91 9110670792
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-zinc-100 p-5 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Linkedin className="text-primary h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">LinkedIn</h3>
                      <a href="https://linkedin.com/in/bkarthik7" className="text-sm text-primary hover:underline">
                        linkedin.com/in/bkarthik7
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-100 p-5 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      {/* You can use a download icon or keep it simple */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Resume</h3>
                      <a
                        href="https://drive.google.com/uc?export=download&id=1QOuJnbIKC92yz9nxSiQdNpfmJx2--9NN"
                        className="text-sm text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Download Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="col-span-2 relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Overlay for disabling the contact form */}
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/30 backdrop-blur-xs rounded-xl">
                <span className="text-xl font-semibold text-zinc-700">Contact form is disabled by admin</span>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="bg-zinc-100 p-8 rounded-xl pointer-events-none select-none opacity-60"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="bg-white" 
                              disabled
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              className="bg-white" 
                              type="email" 
                              disabled
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Subject" 
                            className="bg-white" 
                            disabled
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="bg-white" 
                            rows={5} 
                            disabled
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting || mutation.isPending}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
