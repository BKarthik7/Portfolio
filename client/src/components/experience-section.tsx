import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-zinc-100">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="relative pl-8 border-l-2 border-primary pb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold">Web Development Intern</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <span className="text-zinc-500">Aamara Technologies</span>
                  <span className="mx-2 text-zinc-500">•</span>
                  <span className="text-zinc-500">Jun-September 2024</span>
                </div>
              </div>
              <div className="space-y-2 text-zinc-500">
                <p className="flex">
                  <span className="mr-2">•</span>
                  <span>Developed a high-fidelity website using Angular and TailwindCSS, transforming low-fidelity designs into polished user interfaces.</span>
                </p>
                <p className="flex">
                  <span className="mr-2">•</span>
                  <span>Collaborated with a team of three on backend development, ensuring seamless integration between frontend and backend.</span>
                </p>
                <p className="flex">
                  <span className="mr-2">•</span>
                  <span>Engaged in client meetings to gather requirements, discuss progress, and implement feedback for improved user experience.</span>
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative pl-8 border-l-2 border-gray-200"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200"></div>
            <div className="bg-white p-6 rounded-xl shadow-sm opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Ready for your opportunity</h3>
              </div>
              <p className="text-zinc-500">
                I'm currently seeking new opportunities in web and app development. Let's discuss how I can contribute to your team and projects.
              </p>
              <div className="mt-4">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary font-medium hover:underline"
                >
                  Contact me
                  <svg className="inline-block ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
