import { motion } from "framer-motion";
import { Code, Smartphone, Drill } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-zinc-100">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Code className="text-primary text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
            <ul className="space-y-2 text-zinc-500">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                C++, C, PostgreSQL
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Rust
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Java, Python, Kotlin
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <Smartphone className="text-secondary text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Web & App Development</h3>
            <ul className="space-y-2 text-zinc-500">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                React.js, TailwindCSS
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Javascript, TypeScript
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                React Native, Angular, Flutter
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Express.js, MongoDB
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <Drill className="text-accent text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
            <ul className="space-y-2 text-zinc-500">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Linux, GitHub, Postman
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Adobe Illustrator, InDesign
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Jupiter Notebook, LaTeX
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                VS Code, Android Studio
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
