import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Java } from "@/components/ui/svgs/java";
import { Svelte } from "@/components/ui/svgs/svelte";
import { Mongodb } from "@/components/ui/svgs/mongodb";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Nix } from "@/components/ui/svgs/nix";
import { Cpp } from "@/components/ui/svgs/cpp";

export const DATA = {
  name: "Dillon Mannion",
  initials: "DM",
  url: "https://dillonmannion.com",
  location: "Rancho Cucamonga, CA",
  locationLink: "https://www.google.com/maps/place/rancho+cucamonga+ca",
  description:
    "Full-stack developer with a B.S. in Computer Science from UC Davis. I build web apps for real businesses and tinker with AI tooling, data analysis, and Nix configs.",
  summary:
    "I graduated from [UC Davis](/#education) with a B.S. in Computer Science in 2025, after transferring from Chaffey College where I studied Computer Science and Data Science. Since then, I've been building [production web apps](/#projects) for real clients — salon booking systems, short-term rental sites, and fantasy football tools. When I'm not shipping client work, I'm in the [lab](/#lab) experimenting with MCP servers, browser extensions, Nix configs, and data analysis.",
  avatarUrl: "/me.png",
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Svelte", icon: Svelte },
    { name: "Python", icon: Python },
    { name: "C++", icon: Cpp },
    { name: "Java", icon: Java },
    { name: "Node.js", icon: Nodejs },
    { name: "Supabase", icon: Supabase },
    { name: "MongoDB", icon: Mongodb },
    { name: "Postgres", icon: Postgresql },
    { name: "Nix", icon: Nix },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dillonmannion16@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/4Clover",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/dillon-mannion-86a580225",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:dillonmannion16@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "https://dillonmannion.com",
      badges: [],
      location: "Remote",
      title: "Full-Stack Web Developer",
      logoUrl: "",
      start: "2024",
      end: "Present",
      description:
        "Building and deploying production web applications for small businesses. Delivered a short-term rental site for an Alpine Roots Big Bear property, a salon booking app for Picasso Hair Salon, and an in-progress booking and payments platform for Expressions Hair Designs using SvelteKit, Supabase, Drizzle ORM, and Square.",
    },
    {
      company: "Amazon",
      href: "https://amazon.com",
      badges: [],
      location: "San Bernardino, CA",
      title: "Sortation Associate",
      logoUrl: "/amazon.png",
      start: "Feb 2022",
      end: "Jul 2023",
      description:
        "Managed a team of 30+ associates operating robotic induct stations. Reduced early shift attrition by 25% by fostering teamwork and peer communication. Boosted productivity by ~15% through proactive volume data sharing. Established streamlined communication protocols between associates and control stations.",
    },
    {
      company: "Premier Swim Academy",
      href: "https://premierswimacademy.com",
      badges: [],
      location: "Rancho Cucamonga, CA",
      title: "Swim Instructor",
      logoUrl: "",
      start: "Jul 2023",
      end: "Sep 2023",
      description:
        "Taught swim lessons to children and adults of varying skill levels. Ensured a safe learning environment and built rapport with students and parents.",
    },
    {
      company: "Wendy's",
      href: "https://wendys.com",
      badges: [],
      location: "Rancho Cucamonga, CA",
      title: "Crew Member",
      logoUrl: "",
      start: "Jul 2023",
      end: "Sep 2023",
      description:
        "Operated grill, fryer, and prep stations under time pressure. Cross-trained on multiple stations and supported the team during peak hours.",
    },
    {
      company: "TPFS Warehouse",
      href: "",
      badges: [],
      location: "Rancho Cucamonga, CA",
      title: "Warehouse Laborer",
      logoUrl: "",
      start: "Sep 2019",
      end: "Feb 2020",
      description:
        "Managed physical inventory handling and warehouse operations.",
    },
  ],
  education: [
    {
      school: "University of California, Davis",
      href: "https://ucdavis.edu",
      degree: "B.S. Computer Science",
      logoUrl: "/ucdavis.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Chaffey College",
      href: "https://chaffey.edu",
      degree: "Computer Science / Data Science, GPA 3.6",
      logoUrl: "/chaffey.png",
      start: "2018",
      end: "2023",
    },
    {
      school: "Los Osos High School",
      href: "https://lososos.etiwanda.org",
      degree:
        "GPA 4.04 — Varsity Water Polo Captain, Baseline League MVP, 2nd Team All-CIF, Scholar Athlete",
      logoUrl: "",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Alpine Roots Big Bear",
      href: "https://bigbear-clover-creations.vercel.app",
      dates: "Jan 2026 - Present",
      active: true,
      description:
        "A short-term rental website for a Big Bear vacation property. Features property details, photo galleries, availability, and booking integration.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://bigbear-clover-creations.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/4Clover/bigbear",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Picasso Hair Salon",
      href: "https://picasso-hair-salon.vercel.app",
      dates: "Jun 2025 - Present",
      active: true,
      description:
        "A modern salon booking application with service listings, stylist profiles, and appointment scheduling.",
      technologies: [
        "SvelteKit",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://picasso-hair-salon.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/4Clover/Picasso-Hair-Salon",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Quantasy.ai",
      href: "https://github.com/4Clover/quantasy.ai",
      dates: "Jan 2026 - Present",
      active: true,
      description:
        "Fantasy football tools with algorithmic transparency. VBD rankings, draft assistant, lineup optimization, and trade evaluation with Sleeper API integration and a Balatro-inspired UI.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Sleeper API",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/4Clover/quantasy.ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Expressions Hair Designs",
      href: "https://github.com/4Clover/expressions",
      dates: "Jan 2026 - Present",
      active: true,
      description:
        "Full-featured salon platform with online booking, Square payments integration, Storyblok CMS, and SEO dashboard. Built with a modern SvelteKit stack.",
      technologies: [
        "SvelteKit",
        "Supabase",
        "Drizzle ORM",
        "Square API",
        "Storyblok",
        "Cloudflare Pages",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/4Clover/expressions",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Jurnl",
      href: "https://github.com/4Clover/Jurnl",
      dates: "May 2025 - Jun 2025",
      active: false,
      description:
        "A digital journaling web app with multiple journals, rich text entries, image support, calendar navigation, and Google OAuth authentication.",
      technologies: [
        "SvelteKit",
        "TypeScript",
        "MongoDB",
        "Google OAuth",
        "SCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/4Clover/Jurnl",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  lab: [
    {
      title: "ClassifyThatBeat",
      description:
        "A browser extension that classifies EDM tracks into sub-genres using Spotify's audio features API. Planned support for Firefox, Chrome, and Edge.",
      technologies: ["TypeScript", "Spotify API", "Browser Extension"],
      widget: "genre-classifier" as const,
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/4Clover/ClassifyThatBeat",
        },
      ],
    },
    {
      title: "agent-link-mcp",
      description:
        "An MCP server that spawns CLI agents (Claude, Codex, Gemini, Aider) as subprocesses with bidirectional communication. Enables multi-agent orchestration from any MCP client.",
      technologies: ["TypeScript", "MCP", "Node.js"],
      widget: "agent-terminal" as const,
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/4Clover/agent-out-mcp",
        },
      ],
    },
    {
      title: "Middle-earth",
      description:
        "Personal NixOS and Home Manager configurations with a Lord of the Rings theme. Each host is named after a LOTR location.",
      technologies: ["Nix", "NixOS", "Home Manager"],
      widget: "nix-tree" as const,
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/4Clover/Middle-earth",
        },
      ],
    },
    {
      title: "PrimateHealth Analysis",
      description:
        "Data analysis tooling for a UC Davis primate health research project. Explores health metrics, trends, and population-level patterns.",
      technologies: ["Python", "Data Analysis", "UC Davis"],
      widget: "primate-chart" as const,
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/4Clover/2025-PrimateHealth-Personal",
        },
      ],
    },
  ],
} as const;
