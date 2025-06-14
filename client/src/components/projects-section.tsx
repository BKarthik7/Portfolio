import { useState } from "react";
import { DeviceFrame, LaptopFrame } from "@/lib/device-frames";
import { ArrowRight } from "lucide-react";
import type { Project, ProjectCategory } from "@/types/project";
import { projects } from "@/data/projects";

const projectsData: Project[] = projects;

export default function ProjectsSection() {
	const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">(
		"All"
	);

	const filteredProjects =
		activeFilter === "All"
			? projectsData
			: projectsData.filter(
					(project) => project.category === activeFilter
			  );

	return (
		<section id="projects" className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<div className="mb-12 text-center">
					<h2 className="text-3xl font-bold mb-4">
						Featured Projects
					</h2>
					<p className="text-lg text-zinc-500 max-w-2xl mx-auto">
						A showcase of my web and app development work,
						demonstrating my skills in creating intuitive and
						engaging user experiences.
					</p>
				</div>

				{/* Project Filters */}
				<div className="project-filters flex flex-wrap justify-center gap-2 mb-12">
					<button
						className={`px-4 py-2 rounded-lg border border-gray-200 font-medium transition-all ${
							activeFilter === "All"
								? "active"
								: "hover:border-primary hover:text-primary"
						}`}
						onClick={() => setActiveFilter("All")}
					>
						All
					</button>
					<button
						className={`px-4 py-2 rounded-lg border border-gray-200 font-medium transition-all ${
							activeFilter === "React Native"
								? "active"
								: "hover:border-primary hover:text-primary"
						}`}
						onClick={() => setActiveFilter("React Native")}
					>
						React Native
					</button>
					<button
						className={`px-4 py-2 rounded-lg border border-gray-200 font-medium transition-all ${
							activeFilter === "MERN"
								? "active"
								: "hover:border-primary hover:text-primary"
						}`}
						onClick={() => setActiveFilter("MERN")}
					>
						MERN
					</button>
					<button
						className={`px-4 py-2 rounded-lg border border-gray-200 font-medium transition-all ${
							activeFilter === "React"
								? "active"
								: "hover:border-primary hover:text-primary"
						}`}
						onClick={() => setActiveFilter("React")}
					>
						React
					</button>
					<button
						className={`px-4 py-2 rounded-lg border border-gray-200 font-medium transition-all ${
							activeFilter === "Flutter"
								? "active"
								: "hover:border-primary hover:text-primary"
						}`}
						onClick={() => setActiveFilter("Flutter")}
					>
						Flutter
					</button>
					<button
						className={`px-4 py-2 rounded-lg border border-gray-200 font-medium transition-all ${
							activeFilter === "Python"
								? "active"
								: "hover:border-primary hover:text-primary"
						}`}
						onClick={() => setActiveFilter("Python")}
					>
						Python
					</button>
					<button
						className={`px-4 py-2 rounded-lg border border-gray-200 font-medium transition-all ${
							activeFilter === "Rust"
								? "active"
								: "hover:border-primary hover:text-primary"
						}`}
						onClick={() => setActiveFilter("Rust")}
					>
						Rust
					</button>
					<button
						className={`px-4 py-2 rounded-lg border border-gray-200 font-medium transition-all ${
							activeFilter === "AngularJS"
								? "active"
								: "hover:border-primary hover:text-primary"
						}`}
						onClick={() => setActiveFilter("AngularJS")}
					>
						AngularJS
					</button>
					<button
						className={`px-4 py-2 rounded-lg border border-gray-200 font-medium transition-all ${
							activeFilter === "JavaScript"
								? "active"
								: "hover:border-primary hover:text-primary"
						}`}
						onClick={() => setActiveFilter("JavaScript")}
					>
						JavaScript
					</button>
				</div>

				{/* Project Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProjects.map((project, index) => (
						<ProjectCard
							key={project.id}
							project={project}
							index={index}
						/>
					))}
				</div>

				<div className="mt-12 text-center">
					<a
						href="#projects"
						className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-lg transition-all hover:bg-primary/5"
					>
						View All Projects
						<ArrowRight className="ml-2 h-4 w-4" />
					</a>
				</div>
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
		<div className="project-card bg-white rounded-xl overflow-hidden shadow-sm">
			<div className="relative p-4 h-[320px] bg-zinc-100 flex items-center justify-center">
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
			</div>
			<div className="p-6">
				<div className="flex justify-between items-center mb-3">
					<h3 className="text-xl font-semibold">{project.title}</h3>
					<CategoryBadge category={project.category} />
				</div>
				<p className="text-zinc-500 mb-4">{project.description}</p>
				<div className="flex justify-between items-center">
					<div className="flex space-x-2">
						{project.tags.map((tag, i) => (
							<span
								key={i}
								className="text-xs font-medium text-zinc-500 bg-gray-100 px-2 py-1 rounded-full"
							>
								{tag}
							</span>
						))}
					</div>
					<a
						href={"https://github.com/BKarthik7/" + project.title}
						className="text-primary font-medium hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Details
					</a>
				</div>
			</div>
		</div>
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
	}

	return (
		<span
			className={`text-xs font-medium text-white ${bgColor} px-2 py-1 rounded-full`}
		>
			{category}
		</span>
	);
}
