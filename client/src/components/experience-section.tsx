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
            <span className="text-sm font-medium text-primary uppercase tracking-wider font-display">
              My Journey
            </span>
          </motion.div>
          <h2 className="text-3xl font-bold editorial-heading font-display">Work Experience</h2>
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
              className="absolute -left-[9px] top-0 w-4 h-4 rounded-none bg-primary border-2 border-primary"
              variants={dotVariants}
              animate="pulse"
            />
            <motion.div
              className="bg-card p-6 rounded-none shadow-none border-2 border-border hover:border-primary transition-all duration-300 hover-lift"
              whileHover={{
                y: -3,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <motion.h3
                  className="text-xl font-semibold font-display"
                  whileHover={{ color: "hsl(var(--primary))" }}
                >
                  Software Engineer Intern
                </motion.h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <motion.span
                    className="text-zinc-500 px-3 py-1 bg-primary/10 rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Moonfrog Labs
                  </motion.span>
                  <span className="mx-2 text-zinc-300">•</span>
                  <span className="text-zinc-500 text-sm">Jan 2026 – Present</span>
                </div>
              </div>
              <div className="mb-3">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Tech Stack:</span>
                <span className="text-sm text-zinc-600 ml-2">Python, LangChain, LangGraph, MCP, Vector DBs, Stable Diffusion / LoRA</span>
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
                  "Architected the company's AI Context Layer a production agentic RAG system routing queries through MCP-orchestrated tool servers to surface structured, real-time knowledge across internal products and pipelines.",
                  "Engineered a LangGraph multi-agent orchestration framework with autonomous task decomposition, parallel retrieval, and cross-source synthesis enabling context-aware automation for internal engineering workflows.",
                  "Shipped an end-to-end image style fine-tuning pipeline (LoRA + diffusion models) to generate game assets visually consistent with each game's art direction, eliminating off-brand outputs from the production pipeline.",
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
            className="relative pl-8 border-l-2 border-primary pb-12"
            variants={cardVariants}
          >
            <motion.div
              className="absolute -left-[9px] top-0 w-4 h-4 rounded-none bg-primary border-2 border-primary"
              variants={dotVariants}
              animate="pulse"
            />
            <motion.div
              className="bg-card p-6 rounded-none shadow-none border-2 border-border hover:border-primary transition-all duration-300 hover-lift"
              whileHover={{
                y: -3,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <motion.h3
                  className="text-xl font-semibold font-display"
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
              <div className="mb-3">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Tech Stack:</span>
                <span className="text-sm text-zinc-600 ml-2">Angular, TypeScript, PostgreSQL, DBeaver</span>
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
                  "Owned the full UI layer of a client-facing web platform using Angular and TailwindCSS sole frontend engineer responsible from component architecture through production launch.",
                  "Integrated and validated RESTful APIs in collaboration with the backend team, identifying and resolving data contract issues before client demos; shipped iteratively across Agile sprint cycles.",
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
              className="absolute -left-[9px] top-0 w-4 h-4 rounded-none bg-muted border-2 border-muted"
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
              className="bg-card p-6 rounded-none shadow-none border-2 border-border opacity-70 hover:opacity-100 transition-all duration-300 hover-lift"
              whileHover={{
                y: -3,
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
