import { motion } from "framer-motion";
import { Code, Brain, Database, Monitor, Wrench } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -5, 5, 0],
    transition: {
      rotate: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const skills = [
  {
    icon: Code,
    title: "Programming Languages",
    colorClass: "primary",
    items: [
      "C++, Python, JavaScript",
      "TypeScript, Rust, SQL",
    ],
  },
  {
    icon: Brain,
    title: "AI / ML",
    colorClass: "secondary",
    items: [
      "Agentic RAG, LLM Orchestration",
      "LangChain, LangGraph, MCP Servers",
      "Vector Databases, Image Generation & Fine-tuning",
      "Claude Code, OpenAI Codex",
    ],
  },
  {
    icon: Database,
    title: "Backend & Databases",
    colorClass: "accent",
    items: [
      "Node.js, Express.js, Spring Boot",
      "REST APIs, PostgreSQL, MongoDB",
    ],
  },
  {
    icon: Monitor,
    title: "Frontend",
    colorClass: "primary",
    items: [
      "React.js, React Native, Angular",
      "TailwindCSS",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    colorClass: "secondary",
    items: [
      "Git, Linux, Docker, CI/CD",
      "AWS Amplify, AppSync, Postman",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-zinc-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-2"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What I Know
          </motion.span>
          <h2 className="text-3xl font-bold">Technical Skills</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 hover-lift"
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <motion.div
                className={`w-14 h-14 bg-${skill.colorClass}/10 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden`}
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <skill.icon className={`text-${skill.colorClass} text-2xl relative z-10`} />
              </motion.div>

              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {skill.title}
              </h3>

              <motion.ul
                className="space-y-3 text-zinc-500"
                variants={containerVariants}
              >
                {skill.items.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center group/item"
                    variants={listItemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.span
                      className={`w-2 h-2 bg-${skill.colorClass} rounded-full mr-3`}
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="group-hover/item:text-foreground transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
