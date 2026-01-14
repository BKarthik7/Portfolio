import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { href: "https://linkedin.com/in/bkarthik7", Icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://github.com/bkarthik7", Icon: FaGithub, label: "GitHub" },
  { href: "https://x.com/B_Karthik_7", Icon: FaTwitter, label: "Twitter" },
  { href: "mailto:bangikarthik7@gmail.com", Icon: FaEnvelope, label: "Email", isEmail: true },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.3,
    y: -5,
    rotate: [0, -10, 10, 0],
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-6 md:mb-0" variants={itemVariants}>
            <div className="flex items-center space-x-2">
              <motion.div
                className="h-10 w-10 bg-white rounded-full flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { type: "spring", stiffness: 400 },
                }}
              >
                <span className="text-foreground font-bold text-lg">BK</span>
              </motion.div>
              <motion.span
                className="text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                B Karthik
              </motion.span>
            </div>
            <motion.p
              className="text-zinc-400 mt-2"
              variants={itemVariants}
            >
              Web and App Developer
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center md:items-end"
            variants={itemVariants}
          >
            <motion.div
              className="flex space-x-5 mb-4"
              variants={containerVariants}
            >
              {socialLinks.map(({ href, Icon, label, isEmail }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label={label}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <motion.span variants={iconVariants}>
                    <Icon className="text-xl" />
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
            <motion.p
              className="text-zinc-500 text-xs mt-1"
              variants={itemVariants}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Built with ❤️ and passion by B Karthik.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
