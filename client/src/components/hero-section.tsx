import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingDeviceFrame } from "@/lib/device-frames";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// Animation variants for staggered children
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
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

const socialIconVariants = {
	hidden: { opacity: 0, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 20,
		},
	},
	hover: {
		scale: 1.3,
		rotate: [0, -10, 10, 0],
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 10,
		},
	},
};

const buttonVariants = {
	hover: {
		scale: 1.05,
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 10,
		},
	},
	tap: {
		scale: 0.95,
	},
};

export default function HeroSection() {
	const handleScroll = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<section className="hero-gradient py-20 md:py-32 particles-bg overflow-hidden">
			{/* Decorative animated background elements */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<motion.div
					className="absolute -top-20 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="flex flex-col-reverse md:flex-row items-center">
					<motion.div
						className="md:w-1/2 mt-10 md:mt-0"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						<motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
							<motion.span
								animate={{ rotate: [0, 15, -15, 0] }}
								transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
							>
								<Sparkles className="w-6 h-6 text-primary" />
							</motion.span>
							<span className="text-sm font-medium text-primary uppercase tracking-wider">
								Welcome to my portfolio
							</span>
						</motion.div>

						<motion.h1
							variants={itemVariants}
							className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
						>
							Game, App and Web{" "}
							<span className="gradient-text-animated">Developer</span>
						</motion.h1>

						<motion.p
							variants={itemVariants}
							className="text-lg md:text-xl text-zinc-500 mb-8 max-w-lg"
						>
							Software Engineer | C++ Enthusiast
						</motion.p>

						<motion.div
							variants={itemVariants}
							className="flex flex-col sm:flex-row gap-4"
						>
							<motion.div
								variants={buttonVariants}
								whileHover="hover"
								whileTap="tap"
							>
								<Button
									onClick={() => handleScroll("projects")}
									className="group btn-ripple relative overflow-hidden"
									size="lg"
								>
									<span className="relative z-10 flex items-center">
										View Projects
										<motion.span
											className="ml-2"
											animate={{ x: [0, 5, 0] }}
											transition={{
												duration: 1.5,
												repeat: Infinity,
												ease: "easeInOut",
											}}
										>
											<ArrowRight className="h-4 w-4" />
										</motion.span>
									</span>
								</Button>
							</motion.div>
							<motion.div
								variants={buttonVariants}
								whileHover="hover"
								whileTap="tap"
							>
								<Button
									onClick={() => handleScroll("contact")}
									variant="outline"
									size="lg"
									className="hover:bg-primary/10"
								>
									Contact Me
								</Button>
							</motion.div>
						</motion.div>

						<motion.div
							variants={containerVariants}
							className="mt-8 flex space-x-6"
						>
							{[
								{ href: "https://linkedin.com/in/bkarthik7", Icon: FaLinkedin, label: "LinkedIn" },
								{ href: "https://github.com/bkarthik7", Icon: FaGithub, label: "GitHub" },
								{ href: "mailto:bangikarthik7@gmail.com", Icon: FaEnvelope, label: "Email" },
							].map(({ href, Icon, label }, index) => (
								<motion.a
									key={label}
									href={href}
									target={href.startsWith("mailto") ? undefined : "_blank"}
									rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
									className="text-zinc-400 hover:text-primary transition-colors"
									aria-label={label}
									variants={socialIconVariants}
									whileHover="hover"
									custom={index}
								>
									<Icon className="text-2xl" />
								</motion.a>
							))}
						</motion.div>
					</motion.div>

					<motion.div
						className="hidden md:flex md:w-1/2 justify-center relative"
						initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
						animate={{ opacity: 1, scale: 1, rotate: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.3,
							type: "spring",
							stiffness: 100,
						}}
					>
						{/* Decorative ring behind device */}
						<motion.div
							className="absolute inset-0 flex items-center justify-center pointer-events-none"
							animate={{ rotate: 360 }}
							transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
						>
							<div className="w-[350px] h-[350px] border-2 border-dashed border-primary/20 rounded-full" />
						</motion.div>
						<motion.div
							className="absolute inset-0 flex items-center justify-center pointer-events-none"
							animate={{ rotate: -360 }}
							transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
						>
							<div className="w-[420px] h-[420px] border border-accent/10 rounded-full" />
						</motion.div>

						<FloatingDeviceFrame>
							<img
								src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
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
