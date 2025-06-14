import { FaGraduationCap, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
		<section id="about" className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row gap-16">
					<motion.div
						className="md:w-2/5"
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-3xl font-bold mb-6">About Me</h2>
						<div className="bg-zinc-100 p-8 rounded-xl">
							<div className="mb-6">
								<img
									src="https://bkarthik7.github.io/terminal-portfolio/BKarthik.png"
									alt="B Karthik"
									className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
								/>
								<h3 className="text-xl font-semibold text-center">
									B Karthik
								</h3>
								<p className="text-zinc-500 text-center">
									Web and App Developer
								</p>
							</div>

							<div className="space-y-4">
								<div className="flex items-center">
									<FaGraduationCap className="w-6 h-6 text-primary" />
									<div className="ml-3">
										<p className="font-medium">
											B.E Computer Science & Engineering
										</p>
										<p className="text-sm text-zinc-500">
											Ramaiah Institute of Technology,
											2026
										</p>
									</div>
								</div>

								<div className="flex items-center">
									<FaEnvelope className="w-6 h-6 text-primary" />
									<a
										href="mailto:bangikarthik7@gmail.com"
										className="ml-3 hover:text-primary transition-colors"
									>
										bangikarthik7@gmail.com
									</a>
								</div>

								<div className="flex items-center">
									<FaPhone className="w-6 h-6 text-primary" />
									<a
										href="tel:+919110670792"
										className="ml-3 hover:text-primary transition-colors"
									>
										+91 9110670792
									</a>
								</div>

								<div className="flex items-center">
									<FaLinkedin className="w-6 h-6 text-primary" />
									<a
										href="https://linkedin.com/in/bkarthik7"
										className="ml-3 hover:text-primary transition-colors"
									>
										linkedin.com/in/bkarthik7
									</a>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						className="md:w-3/5"
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<div className="mb-8">
							<h2 className="text-3xl font-bold mb-6">
								My Story
							</h2>
							<p className="text-lg leading-relaxed mb-4">
								Hi, I'm Karthik! My journey into technology
								began with C++, where I honed my problem-solving
								skills and discovered the joy of building
								solutions. Over time, I transitioned to web
								development, where I combined logic with
								creativity to design user-friendly, interactive
								digital experiences.
							</p>
							<p className="text-lg leading-relaxed mb-4">
								During my internship at Aamara Technologies, I
								collaborated with teammates to build an asset
								management platform. We transformed concepts
								into tangible solutions, showcasing teamwork and
								attention to detail. Around this time, I adopted
								React.js, a game-changing tool in my development
								process.
							</p>
							<p className="text-lg leading-relaxed">
								To complement my technical skills, I've mastered
								TailwindCSS for creating elegant, responsive
								designs. I'm currently expanding my expertise in
								React Native for cross-platform app development,
								and exploring Rust, a high-performance language
								poised to shape the future of digital solutions.
							</p>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-4">
								Education
							</h3>
							<div className="space-y-4">
								<div className="bg-zinc-100 p-5 rounded-lg">
									<div className="flex justify-between">
										<h4 className="font-medium">
											Ramaiah Institute of Technology
										</h4>
										<span className="text-sm text-zinc-500">
											2022 - 2026
										</span>
									</div>
									<p className="text-zinc-500">
										B.E Computer Science & Engineering
									</p>
									<p className="text-sm">GPA: 8.6</p>
								</div>

								<div className="bg-zinc-100 p-5 rounded-lg">
									<div className="flex justify-between">
										<h4 className="font-medium">
											Sri Medha V Junior College
										</h4>
										<span className="text-sm text-zinc-500">
											2020 - 2022
										</span>
									</div>
									<p className="text-zinc-500">
										Physics, Chemistry, & Mathematics
									</p>
									<p className="text-sm">Percentage: 97.7%</p>
								</div>

								<div className="bg-zinc-100 p-5 rounded-lg">
									<div className="flex justify-between">
										<h4 className="font-medium">
											Kendriya Vidyalaya
										</h4>
										<span className="text-sm text-zinc-500">
											2020
										</span>
									</div>
									<p className="text-zinc-500">CBSE</p>
									<p className="text-sm">Percentage: 92.6%</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
  );
}
