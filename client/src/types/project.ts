export type ProjectCategory =
  | "React Native"
  | "Flutter"
  | "React"
  | "Java"
  | "Python"
  | "MERN"
  | "Rust"
  | "AngularJS"
  | "JavaScript";

export interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	category: ProjectCategory;
	tags: string[];
	isMobile: boolean;
	link?: string;
}
