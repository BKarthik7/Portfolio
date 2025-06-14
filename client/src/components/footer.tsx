import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">BK</span>
              </div>
              <span className="text-lg font-semibold">B Karthik</span>
            </div>
            <p className="text-zinc-400 mt-2">Web and App Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://linkedin.com/in/bkarthik7" 
                className="text-zinc-400 hover:text-white transition-colors" 
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="https://github.com/bkarthik7" 
                className="text-zinc-400 hover:text-white transition-colors" 
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://x.com/B_Karthik_7" 
                className="text-zinc-400 hover:text-white transition-colors" 
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a 
                href="mailto:bangikarthik7@gmail.com" 
                className="text-zinc-400 hover:text-white transition-colors" 
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
            <p className="text-zinc-400 text-sm">&copy; {currentYear} B Karthik. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
