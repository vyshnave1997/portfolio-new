// components/projectData.ts
import { Project } from './types';

export const projects: Project[] = [
  { 
  id: "01", 
  name: "VIKI MOVIE APP", 
  image: "/movie-1.png", 
  year: "2024",
  description: "Curated, machine-friendly collection of film metadata derived from The Movie Database (TMDB). A comprehensive web application for exploring and analyzing movie data with advanced filtering, search capabilities, and interactive visualizations. Features film metadata including titles, release dates, genres, ratings, runtime, and production details.",
  services: ["UI/UX DESIGN", "DATA VISUALIZATION", "API INTEGRATION", "RESPONSIVE DESIGN"],
  tools: ["React.js", "Tailwind CSS", "AntD", "TMDB API", "TypeScript", "Pandas"],
  liveUrl: "https://tmdb-film-data.vercel.app/",
  githubUrl: "https://github.com/vyshnave1997/tmdb-film-data",
  carbonFootprint: "0.18 G/CO2",
  media: [
    { type: 'image', url: '/movie-1.png' },
    { type: 'image', url: '/movie-2.png' },
    { type: 'image', url: '/movie-3.png' }
  ]
},
 { 
  id: "02", 
  name: "VIKISTORE E-COMMERCE", 
  image: "/store-1.png", 
  year: "2024",
  description: "A clean, maintainable full-stack e-commerce application featuring product listing with advanced filtering, dynamic shopping cart, seamless checkout flow, and order management system. Built with modern technologies to deliver a smooth shopping experience with admin dashboard for product and order management.",
  services: ["FULL-STACK DEVELOPMENT", "UI/UX DESIGN", "DATABASE DESIGN", "API DEVELOPMENT"],
  tools: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL", "JWT Auth"],
  liveUrl: "https://ecommerce-app-steel-nine.vercel.app/",
  githubUrl: "https://github.com/vyshnave1997/ecommerce-app",
  carbonFootprint: "0.22 G/CO2",
  media: [
    { type: 'image', url: 'public/store-1.png' },
    { type: 'image', url: 'public/store-2.png' },
    { type: 'image', url: 'store-3.png' },
    { type: 'image', url: 'store-4.png' }
  ]
},
  { 
  id: "03", 
  name: "SIGNALS", 
  image: "/signal-1.png", 
  year: "2024",
  description: "A powerful toolkit for real-time market signal processing and data stream analytics. Features efficient signal ingestion, real-time detection and alerting capabilities, and a simple integration API. Built to handle complex data processing workflows with configurable thresholds and window-based analysis for monitoring and alerting systems.",
  services: ["REAL-TIME PROCESSING", "DATA ANALYTICS", "API DEVELOPMENT", "SYSTEM ARCHITECTURE"],
  tools: ["Python", "Node.js", "React.js", "Redis", "WebSockets", "Docker"],
  liveUrl: "https://viki-signals.vercel.app/",
  githubUrl: "https://github.com/vyshnave1997/viki-signals",
  carbonFootprint: "0.15 G/CO2",
  media: [
    { type: 'image', url: '/signal-1.png' },
    { type: 'image', url: '/signal-2.png' },
    { type: 'image', url: '/signal-3.png' }
  ]
},
  { 
  id: "04", 
  name: "VIKI CONFERENCE", 
  image: "/conn-1.png", 
  year: "2024",
  description: "A modern video conferencing web application built with Next.js 14, featuring secure authentication via Clerk and real-time video streaming powered by Stream Video SDK. Offers seamless video calls, user management, and a responsive interface with scheduled meetings, personal meeting rooms, and call recording capabilities.",
  services: ["VIDEO STREAMING", "AUTHENTICATION", "REAL-TIME COMMUNICATION", "UI/UX DESIGN"],
  tools: ["Next.js 14", "TypeScript", "Clerk", "Stream Video SDK", "Tailwind CSS", "Radix UI"],
  liveUrl: "https://viki-conference.vercel.app/",
  githubUrl: "https://github.com/vyshnave1997/viki-video",
  carbonFootprint: "0.20 G/CO2",
  media: [
    { type: 'image', url: '/conn-1.png' },
    { type: 'image', url: '/con-2.png' },
    { type: 'image', url: '/conn-3.png' }
  ]
},
  { 
  id: "05", 
  name: "FITCLUB", 
  image: "/fit-1.png", 
  year: "2024",
  description: "A single-page React application for planning and tracking workouts with a minimal, component-driven fitness UI. Features workout routine creation, progress logging, and responsive mobile-first design. Built with local-only persistence using localStorage, making it perfect as a static SPA or for future backend integration.",
  services: ["UI/UX DESIGN", "FRONTEND DEVELOPMENT", "RESPONSIVE DESIGN", "STATE MANAGEMENT"],
  tools: ["React.js", "SCSS", "JavaScript", "localStorage", "Zustand", "React Router"],
  liveUrl: "https://effervescent-crisp-0206f7.netlify.app/",
  githubUrl: "https://github.com/vyshnave1997/Fitclub",
  carbonFootprint: "0.12 G/CO2",
  media: [
    { type: 'image', url: '/fit-1.png' },
    { type: 'image', url: '/fit-2.png' },
    { type: 'image', url: '/fit-3.png' }
  ]
},
{ 
  id: "06", 
  name: "COOK'S KITCHEN", 
  image: "/cook-1.png", 
  year: "2024",
  description: "A modern recipe web application built with Next.js that helps users browse, search, create, and manage recipes with a fast, SEO-friendly frontend. Features curated recipe collections with images, ingredient lists, step-by-step instructions, and advanced search filtering by category, cuisine, and dietary preferences. Fully responsive design optimized for both desktop and mobile.",
  services: ["WEB DEVELOPMENT", "SEO OPTIMIZATION", "UI/UX DESIGN", "RESPONSIVE DESIGN"],
  tools: ["Next.js", "React.js", "CSS Modules", "Node.js", "Vercel", "API Integration"],
  liveUrl: "https://cook-cyan.vercel.app/",
  githubUrl: "https://github.com/vyshnave1997/Nextjs_Cook-s_kitchen",
  carbonFootprint: "0.16 G/CO2",
  media: [
    { type: 'image', url: '/cook-1.png' },
    { type: 'image', url: '/cook-2.png' },
    { type: 'image', url: '/cook-3.png' }
  ]
},
];