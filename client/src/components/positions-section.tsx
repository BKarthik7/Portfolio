import { motion } from "framer-motion";
import { ShieldAlert, Laptop } from "lucide-react";

export default function PositionsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Positions of Responsibility
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="bg-zinc-100 p-8 rounded-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start mb-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <ShieldAlert className="text-primary h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Core Member Designer</h3>
                <p className="text-zinc-500">secuRIT | Jan 2024 - Present</p>
              </div>
            </div>
            <div className="space-y-2 text-zinc-500 ml-16">
              <p className="flex">
                <span className="mr-2">•</span>
                <span>Designed posters and visual materials for events and initiatives, ensuring impactful visual communication.</span>
              </p>
              <p className="flex">
                <span className="mr-2">•</span>
                <span>Organized and conducted hackRITual (CTF) and Innovision (Hackathon), enhancing engagement within the cybersecurity community.</span>
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-zinc-100 p-8 rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start mb-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Laptop className="text-accent h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Core Member Designer</h3>
                <p className="text-zinc-500">CodeRIT | Nov 2024 - Present</p>
              </div>
            </div>
            <div className="space-y-2 text-zinc-500 ml-16">
              <p className="flex">
                <span className="mr-2">•</span>
                <span>Led the organization of wHACKiest (Hackathon), fostering innovation and collaboration among participants.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
