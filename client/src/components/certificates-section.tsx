import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certificates } from "@/data/certificates";

export default function CertificatesSection() {
  return (
    <section className="py-20 bg-zinc-100">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certificates & Achievements
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div 
              key={cert.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="text-primary h-5 w-5" />
                </div>
              </div>
              <h3 className="text-center font-medium mb-2">{cert.issuer}</h3>
              <p className="text-center text-sm text-zinc-500">{cert.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
