import { motion } from "framer-motion";
import { Briefcase, ArrowRight, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const dotVariants = {
  pulse: {
    scale: [1, 1.3, 1],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-zinc-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Briefcase className="w-5 h-5 text-primary" />
            </motion.span>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              My Journey
            </span>
          </motion.div>
          <h2 className="text-3xl font-bold">Work Experience</h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="relative pl-8 border-l-2 border-primary pb-12"
            variants={cardVariants}
          >
            <motion.div
              className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"
              variants={dotVariants}
              animate="pulse"
            />
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <motion.h3
                  className="text-xl font-semibold"
                  whileHover={{ color: "hsl(var(--primary))" }}
                >
                  Frontend Web Development Intern
                </motion.h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <motion.span
                    className="text-zinc-500 px-3 py-1 bg-primary/10 rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Aamara Technologies
                  </motion.span>
                  <span className="mx-2 text-zinc-300">•</span>
                  <span className="text-zinc-500 text-sm">Jun-Sep 2024</span>
                </div>
              </div>
              <motion.div
                className="space-y-3 text-zinc-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                {[
                  "Developed a high-fidelity website using Angular and TailwindCSS, transforming low-fidelity designs into polished user interfaces.",
                  "Collaborated with a team of three on backend development, ensuring seamless integration between frontend and backend.",
                  "Engaged in client meetings to gather requirements, discuss progress, and implement feedback for improved user experience.",
                ].map((item, i) => (
                  <motion.p
                    key={i}
                    className="flex items-start group"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.span
                      className="mr-3 mt-2 w-2 h-2 bg-primary rounded-full flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative pl-8 border-l-2 border-gray-200"
            variants={cardVariants}
          >
            <motion.div
              className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm opacity-70 hover:opacity-100 transition-all duration-300"
              whileHover={{
                y: -5,
                scale: 1.02,
                opacity: 1,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  Ready for your opportunity
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-5 h-5 text-primary" />
                  </motion.span>
                </h3>
              </div>
              <p className="text-zinc-500 mb-4">
                I'm currently seeking new opportunities in web and app development. Let's discuss how I can contribute to your team and projects.
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center text-primary font-medium hover:underline group"
                whileHover={{ x: 5 }}
              >
                Contact me
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
