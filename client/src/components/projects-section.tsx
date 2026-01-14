import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DeviceFrame, LaptopFrame } from "@/lib/device-frames";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Project, ProjectCategory } from "@/types/project";
import { projects } from "@/data/projects";

const projectsData: Project[] = projects;

export default function ProjectsSection() {
	const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">(
		"All"
	);
	const [showAll, setShowAll] = useState(false);

	const filteredProjects =
		activeFilter === "All"
			? projectsData
			: projectsData.filter(
				(project) => project.category === activeFilter
			);

	console.log("Filtered Projects:", filteredProjects);
	const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

	const filters: (ProjectCategory | "All")[] = [
		"All", "React Native", "MERN", "Games", "React", "Java", "Flutter", "Python", "Rust", "AngularJS", "JavaScript"
	];

	return (
		<section id="projects" className="py-20 bg-white overflow-hidden">
			<div className="container mx-auto px-6">
				<motion.div
					className="mb-12 text-center"
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
							<Sparkles className="w-5 h-5 text-primary" />
						</motion.span>
						<span className="text-sm font-medium text-primary uppercase tracking-wider">
							My Work
						</span>
					</motion.div>
					<h2 className="text-3xl font-bold mb-4">
						Featured Projects
					</h2>
					<p className="text-lg text-zinc-500 max-w-2xl mx-auto">
						A showcase of my web and app development work,
						demonstrating my skills in creating intuitive and
						engaging user experiences.
					</p>
				</motion.div>

				{/* Project Filters */}
				<motion.div
					className="project-filters flex flex-wrap justify-center gap-2 mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
				>
					{filters.map((filter) => (
						<motion.button
							key={filter}
							className={`px-4 py-2 rounded-lg border border-gray-200 font-medium transition-colors ${activeFilter === filter
								? "active"
								: "hover:border-primary hover:text-primary"
								}`}
							onClick={() => setActiveFilter(filter)}
							whileHover={{ scale: 1.08, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							{filter}
						</motion.button>
					))}
				</motion.div>

				{/* Project Grid */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<AnimatePresence mode="popLayout">
						{displayedProjects.map((project, index) => (
							<ProjectCard
								key={project.id}
								project={project}
								index={index}
							/>
						))}
					</AnimatePresence>
				</motion.div>

				{filteredProjects.length > 6 && (
					<motion.div
						className="mt-12 text-center"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						<motion.button
							onClick={() => setShowAll((prev) => !prev)}
							className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-lg transition-all hover:bg-primary/5"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							{showAll ? "Show Less" : "View All Projects"}
							<motion.span
								className="ml-2"
								animate={{ x: showAll ? 0 : [0, 5, 0] }}
								transition={{ duration: 1.5, repeat: Infinity }}
							>
								<ArrowRight className="h-4 w-4" />
							</motion.span>
						</motion.button>
					</motion.div>
				)}
			</div>
		</section>
	);
}

interface ProjectCardProps {
	project: Project;
	index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
	return (
		<motion.div
			className="project-card bg-white rounded-xl overflow-hidden shadow-sm group"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			whileHover={{
				y: -12,
				scale: 1.02,
				transition: { type: "spring", stiffness: 300, damping: 20 },
			}}
		>
			<div className="relative p-4 h-[320px] bg-zinc-100 flex items-center justify-center overflow-hidden">
				{/* Animated gradient overlay on hover */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				/>

				<motion.div
					whileHover={{ scale: 1.05, rotate: 1 }}
					transition={{ type: "spring", stiffness: 300, damping: 20 }}
				>
					{project.isMobile ? (
						<DeviceFrame height="h-[280px]" width="w-[140px]">
							<img
								src={project.image}
								alt={project.title}
								className="h-full w-full object-cover"
							/>
						</DeviceFrame>
					) : (
						<LaptopFrame height="h-[200px]" width="w-[280px]">
							<img
								src={project.image}
								alt={project.title}
								className="h-full w-full object-cover"
							/>
						</LaptopFrame>
					)}
				</motion.div>
			</div>
			<div className="p-6">
				<div className="flex justify-between items-center mb-3">
					<motion.h3
						className="text-xl font-semibold group-hover:text-primary transition-colors"
					>
						{project.title}
					</motion.h3>
					<CategoryBadge category={project.category} />
				</div>
				<p className="text-zinc-500 mb-4">{project.description}</p>
				<div className="flex justify-between items-center">
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag, i) => (
							<motion.span
								key={i}
								className="text-xs font-medium text-zinc-500 bg-gray-100 px-2 py-1 rounded-full"
								whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.1)" }}
							>
								{tag}
							</motion.span>
						))}
					</div>
					<motion.a
						href={"https://github.com/BKarthik7/" + project.title}
						className="text-primary font-medium hover:underline flex items-center gap-1"
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ x: 3 }}
					>
						View Github
						<ArrowRight className="h-4 w-4" />
					</motion.a>
				</div>
			</div>
		</motion.div>
	);
}

function CategoryBadge({ category }: { category: ProjectCategory }) {
	let bgColor = "bg-primary";

	switch (category) {
		case "Flutter":
			bgColor = "bg-accent";
			break;
		case "React":
			bgColor = "bg-[#61DAFB]";
			break;
		case "React Native":
			bgColor = "bg-[#6E56CF]";
			break;
		case "Python":
			bgColor = "bg-[#306998]";
			break;
		case "MERN":
			bgColor = "bg-[#3FA037]";
			break;
		case "Rust":
			bgColor = "bg-[#DEA584]";
			break;
		case "AngularJS":
			bgColor = "bg-[#DD0031]";
			break;
		case "JavaScript":
			bgColor = "bg-[#F7DF1E]";
			break;
		case "Java":
			bgColor = "bg-[#007396]";
			break;
	}

	return (
		<motion.span
			className={`text-xs font-medium text-white ${bgColor} px-2 py-1 rounded-full`}
			whileHover={{ scale: 1.1 }}
			transition={{ type: "spring", stiffness: 400, damping: 15 }}
		>
			{category}
		</motion.span>
	);
}
