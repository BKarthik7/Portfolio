import type { Project } from "@/types/project";

export const projects: Project[] = [
	{
		id: 0,
		title: "Decentralised_StorageAreaNetworks",
		description:
			"Decentralized Storage Area Network proof-of-concept using IPFS, Shamir's Secret Sharing, and Smart Contracts for immutable records with client-side encryption and zero-knowledge privacy.",
		image: "https://images.pexels.com/photos/7887800/pexels-photo-7887800.jpeg",
		category: "MERN",
		isMobile: false,
		tags: ["IPFS", "Smart-Contracts", "Threshold-Cryptography"],
	},
	{
		id: 1,
		title: "SafeVoyage",
		description:
			"A tourist safety app that sends location-based panic messages, tracks trips, maintains emergency contacts, and provides geofencing with real-time alerting.",
		image: "https://images.pexels.com/photos/8372630/pexels-photo-8372630.jpeg",
		category: "React Native",
		isMobile: true,
		tags: ["Geofencing", "Location", "Notification"],
	},
	{
		id: 2,
		title: "Team-Sync-Presenter-View",
		description:
			"A MERN app for real-time peer evaluation and feedback during team presentations.",
		image: "https://images.pexels.com/photos/8424484/pexels-photo-8424484.jpeg",
		category: "MERN",
		isMobile: false,
		tags: ["Pusher", "Real-time"],
	},
	{
		id: 3,
		title: "ZeroWasteRoute",
		description:
			"A microservices-based backend for hyper-local food waste reduction and redistribution, enabling real-time matching between donors and recipients with route optimization and volunteer coordination.",
		image: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg",
		category: "Java",
		isMobile: false,
		tags: ["Microservices", "Spring-Boot"],
	},
	{
		id: 4,
		title: "SyncScribe",
		description:
			"A local-first note-taking app with Turso DB, supporting offline writes and real-time syncing.",
		image: "https://images.pexels.com/photos/7578209/pexels-photo-7578209.jpeg",
		category: "React Native",
		isMobile: true,
		tags: ["Real-Time-Syncing", "Turso-Db"],
	},
	{
		id: 5,
		title: "BudgetNest",
		description:
			"A React Native mobile application for personal finance management, offering expense tracking and interactive charts.",
		image: "https://images.pexels.com/photos/4386379/pexels-photo-4386379.jpeg",
		category: "React Native",
		isMobile: true,
		tags: ["Chart", "Finance"],
	},
	{
		id: 6,
		title: "CountryLive",
		description:
			"A React Native app that fetches real-time news from NewsAPI with search and category filtering.",
		image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
		category: "React Native",
		isMobile: true,
		tags: ["Newsapi", "Mobile"],
	},
	{
		id: 7,
		title: "Prescripto",
		description:
			"A MERN-stack healthcare management system with admin panel, patient records, and payment integration.",
		image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg",
		category: "MERN",
		isMobile: false,
		tags: ["Payment", "Scheduling"],
	},
	{
		id: 8,
		title: "ChitChat",
		description:
			"A real-time chat application built with JavaScript and WebSocket.",
		image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
		category: "MERN",
		isMobile: false,
		tags: ["Chat", "Realtime"],
	},
	{
		id: 9,
		title: "SnugglePaws",
		description:
			"TypeScript pet adoption UI showcasing component-driven design.",
		image: "https://images.pexels.com/photos/4587996/pexels-photo-4587996.jpeg",
		category: "React",
		isMobile: false,
		tags: ["Typescript", "Ui"],
	},
	{
		id: 10,
		title: "Certificate-Portfolio",
		description:
			"A React app for managing and displaying certificates, integrated with Supabase for auth.",
		image: "https://images.pexels.com/photos/32559169/pexels-photo-32559169.jpeg",
		category: "React",
		isMobile: false,
		tags: ["React", "Supabase"],
	},
	{
		id: 11,
		title: "Course-Tracker",
		description:
			"A React/Supabase web app to track and manage courses with user-friendly dashboards.",
		image: "https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg",
		category: "React",
		isMobile: false,
		tags: ["React", "Supabase"],
	},
	{
		id: 12,
		title: "Chit_Chat",
		description:
			"A Flutter chat application UI to learn Flutter for the first time.",
		image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
		category: "Flutter",
		isMobile: true,
		tags: ["Flutter", "Chat"],
	},
	{
		id: 13,
		title: "Recipe_Manager",
		description:
			"A Rust-based recipe manager using the Iced GUI framework and JSON storage.",
		image: "https://images.pexels.com/photos/6207675/pexels-photo-6207675.jpeg",
		category: "Rust",
		isMobile: false,
		tags: ["Rust", "Iced"],
	},
	{
		id: 14,
		title: "My_Shell",
		description:
			"A simple Unix-style shell implemented in Rust for command parsing and execution.",
		image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
		category: "Rust",
		isMobile: false,
		tags: ["Rust", "Systems"],
	},
	{
		id: 15,
		title: "RailwayReservationSystem",
		description:
			"A Streamlit & SQLite-based web app for booking railway tickets and managing schedules.",
		image: "https://images.pexels.com/photos/32555917/pexels-photo-32555917.jpeg",
		category: "Python",
		isMobile: false,
		tags: ["Streamlit", "Sqlite"],
	},
	{
		id: 16,
		title: "VacTrafficAI",
		description:
			"Python-based AI model for predicting and visualizing traffic patterns.",
		image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
		category: "Python",
		isMobile: false,
		tags: ["Python", "Ai"],
	},
	{
		id: 17,
		title: "JavaScript-Projects",
		description:
			"A collection of fun JavaScript and CSS/HTML projects built just for experimentation.",
		image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
		category: "JavaScript",
		isMobile: false,
		tags: ["Javascript", "Html"],
	},
	{
		id: 18,
		title: "Terminal-Portfolio",
		description:
			"A JavaScript terminal-style portfolio website showcasing projects in a command-line interface.",
		image: "https://images.pexels.com/photos/5717758/pexels-photo-5717758.jpeg",
		category: "React",
		isMobile: false,
		tags: ["Portfolio", "Javascript"],
	},
	{
		id: 19,
		title: "Glimpse",
		description:
			"A platform to share and explore interview experiences with user submissions and browsing.",
		image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
		category: "JavaScript",
		isMobile: false,
		tags: ["Javascript", "Community"],
	},
	{
		id: 20,
		title: "Short-Sweet",
		description:
			"An AngularJS project to generate short URLs using the Bitly API.",
		image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
		category: "AngularJS",
		isMobile: false,
		tags: ["Angularjs", "Typescript"],
	},
	{
		id: 21,
		title: "AshtaPashaka",
		description:
			"An 8-player multiplayer Ludo game with real-time WebSocket gameplay, turn timers, and spectator mode.",
		image: "https://images.pexels.com/photos/7625920/pexels-photo-7625920.jpeg",
		category: "Games",
		isMobile: false,
		tags: ["React", "WebSockets"],
	},
	{
		id: 22,
		title: "Kitchen Chaos",
		description:
			"A fast-paced cooking game built with Unity where players prepare and deliver recipes within a time limit. Features dynamic order spawning, time-based mechanics with extensions on successful deliveries, and state-based game management.",
		image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
		category: "Games",
		isMobile: false,
		tags: ["Unity", "C#", "Game"],
		link: "https://play.unity.com/en/games/852908ee-4856-4ddc-979e-e3f0198be4f7/kitchenchaos",
	},
	{
		id: 23,
		title: "The-Classic-Snake-Game",
		description:
			"A web-based rendition of the classic Snake game, built for browser play.",
		image: "https://images.pexels.com/photos/8762881/pexels-photo-8762881.jpeg",
		category: "Games",
		isMobile: false,
		tags: ["Javascript", "Game"],
	},
	{
		id: 24,
		title: "Maze-Game-Extention",
		description:
			"A browser-based maze game extension built with vanilla JavaScript.",
		image: "https://images.pexels.com/photos/1904198/pexels-photo-1904198.jpeg",
		category: "Games",
		isMobile: false,
		tags: ["Game", "Javascript"],
	}
];
