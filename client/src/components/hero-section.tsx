import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingDeviceFrame } from "@/lib/device-frames";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
	const handleScroll = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<section className="hero-gradient py-20 md:py-32">
			<div className="container mx-auto px-6">
				<div className="flex flex-col-reverse md:flex-row items-center">
					<motion.div
						className="md:w-1/2 mt-10 md:mt-0"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
							App and Web{" "}
							<span className="text-primary">Development</span>
						</h1>
						<p className="text-lg md:text-xl text-zinc-500 mb-8 max-w-lg">
							C++ Enthusiast | Aspiring Software Engineer |
							Actively seeking internship opportunities
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								onClick={() => handleScroll("projects")}
								className="group"
							>
								View Projects
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
							<Button
								onClick={() => handleScroll("contact")}
								variant="outline"
							>
								Contact Me
							</Button>
						</div>
						<div className="mt-8 flex space-x-4">
							<a
								href="https://linkedin.com/in/bkarthik7"
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-500 hover:text-primary transition-colors"
								aria-label="LinkedIn"
							>
								<FaLinkedin className="text-xl" />
							</a>
							<a
								href="https://github.com/bkarthik7"
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-500 hover:text-primary transition-colors"
								aria-label="GitHub"
							>
								<FaGithub className="text-xl" />
							</a>
							<a
								href="mailto:bangikarthik7@gmail.com"
								className="text-zinc-500 hover:text-primary transition-colors"
								aria-label="Email"
							>
								<FaEnvelope className="text-xl" />
							</a>
						</div>
					</motion.div>

					<motion.div
						className="hidden md:flex md:w-1/2 justify-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<FloatingDeviceFrame>
							<img
								src="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg"
								alt="App Development Interface"
								className="h-full w-full object-cover"
							/>
						</FloatingDeviceFrame>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
