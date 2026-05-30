import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
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
import { Cpp } from "@/components/ui/svgs/cpp";
import { Word } from "@/components/ui/svgs/word";
import { Powerpoint } from "@/components/ui/svgs/powerpoint";
import { Excel } from "@/components/ui/svgs/excel";
import { Powerbi } from "@/components/ui/svgs/powerbi";
import { GoogleWorkspace } from "@/components/ui/svgs/google-workspace";
import { Notion } from "@/components/ui/svgs/notion";
import { Linear } from "@/components/ui/svgs/linear";
import { Figma } from "@/components/ui/svgs/figma";
import { Slack } from "@/components/ui/svgs/slack";
import { Aws } from "@/components/ui/svgs/aws";
import { Azure } from "@/components/ui/svgs/azure";
import { Amazon } from "@/components/ui/svgs/amazon";

export const DATA = {
  name: "Dillon Mannion",
  initials: "DM",
  url: "https://dillonmannion.com",
  location: "Rancho Cucamonga, CA",
  locationLink: "https://www.google.com/maps/place/rancho+cucamonga+ca",
  description:
    "CS graduate with wide-reaching interests and a bias toward making things faster, simpler, and more reliable — from warehouse throughput to booking platforms to game engines. Competitive water polo gave me a decade of learning how teams win, and I bring that same energy to every project I ship.",
  summary:
    "I spend most of my time [building things](/#projects) and finding ways to integrate AI into any part of my life that can use automation or a second pair of eyes. I tend to notice where processes are slower or messier than they need to be, and I genuinely enjoy writing the documentation that keeps things from falling apart. When I'm not coding I'm usually [tinkering](/#lab) — automating parts of my workflow, running financial analysis on stocks, or picking up something I've never tried before.",
  avatarUrl: "/me.png",
  skills: [
    {
      category: "Development",
      items: [
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
      ],
    },
    {
      category: "Business & Productivity",
      items: [
        { name: "Word", icon: Word },
        { name: "PowerPoint", icon: Powerpoint },
        { name: "Excel", icon: Excel },
        { name: "Power BI", icon: Powerbi },
        { name: "Google Workspace", icon: GoogleWorkspace },
        { name: "Notion", icon: Notion },
        { name: "Linear", icon: Linear },
        { name: "Figma", icon: Figma },
        { name: "Slack", icon: Slack },
        { name: "AWS", icon: Aws },
        { name: "Azure", icon: Azure },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
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
      company: "Independent",
      href: "https://dillonmannion.com",
      badges: [],
      location: "Remote",
      title: "Business Systems Developer",
      logoUrl: "/fleuron-glyph.svg",
      start: "2023",
      end: "Present",
      description:
        "Designed and delivered full-stack business operations platforms for small-business clients, covering booking, scheduling, finance tracking, and tax-deduction workflows. Built a live cabin-rental site with availability calendar and back-office deduction tracking. Shipped a production salon booking system with multi-step scheduling, customer portal, admin dashboard, OAuth, and internationalization in three languages. Developed a multi-tenant SaaS pattern extending the booking core with per-business sites, employee management, and finance modules. Scoped requirements through stakeholder interviews, translated business processes into data models, and maintained CI/CD pipelines on Vercel and Cloudflare.",
    },
    {
      company: "Costco Wholesale",
      href: "https://costco.com",
      badges: [],
      location: "Rancho Cucamonga, CA",
      title: "Seasonal Merchandise Associate",
      logoUrl: "/costco.svg",
      start: "Oct 2025",
      end: "Jan 2026",
      description:
        "Handled high-volume merchandise stocking and inventory rotation during peak holiday season. Collaborated with department leads to maintain floor presentation standards under heavy customer traffic.",
    },
    {
      company: "Amazon",
      href: "https://amazon.com",
      badges: [],
      location: "San Bernardino, CA",
      title: "Warehouse Associate — Operations Point of Contact",
      logoUrl: "/amazon.svg",
      logoIcon: Amazon,
      start: "Feb 2022",
      end: "Jul 2023",
      description:
        "Managed a team of 30+ associates operating robotic induct stations across multiple shifts. Reduced early-shift attrition by 25% by fostering teamwork and peer communication. Boosted line productivity by ~15% through proactive volume-data sharing with associates. Established streamlined communication protocols between associate teams and central control stations.",
    },
    {
      company: "Premier Swim Academy",
      href: "https://premierswimacademy.com",
      badges: [],
      location: "Rancho Cucamonga, CA",
      title: "Swim Instructor",
      logoUrl: "/premier-swim.svg",
      start: "Jul 2023",
      end: "Sep 2023",
      description:
        "Taught swim lessons to children and adults of varying skill levels. Built rapport with students and parents while ensuring a safe learning environment.",
    },
    {
      company: "Wendy's",
      href: "https://wendys.com",
      badges: [],
      location: "Rancho Cucamonga, CA",
      title: "Crew Member",
      logoUrl: "/wendys.svg",
      start: "Jul 2023",
      end: "Sep 2023",
      description:
        "Operated grill, fryer, and prep stations under time pressure. Cross-trained on multiple stations and supported the team during peak hours.",
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
      degree: "Computer Science / Data Science",
      logoUrl: "/chaffey.png",
      start: "2018",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Grizzly Getaway",
      href: "https://grizzlygetaway.co",
      dates: "Jun 2025 - Present",
      active: true,
      description:
        "Live booking, availability, and tax-tracking platform supporting an operating cabin-rental business; integrated back-office workflows for deduction tracking.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://grizzlygetaway.co",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/4Clover/bigbear",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/grizzly-getaway.svg",
      video: "",
    },
    {
      title: "Picasso Hair Salon",
      href: "https://picasso-hair-salon.vercel.app",
      dates: "Jun 2025 - Present",
      active: true,
      description:
        "Production multi-step scheduling, customer portal, and admin dashboard for end-to-end service management. Supabase backend with RLS and OAuth, TDD via Vitest and Playwright (90% core coverage), Vercel CI/CD, internationalized in English, Spanish, and Chinese.",
      technologies: [
        "SvelteKit",
        "TypeScript",
        "Supabase",
        "Vitest",
        "Playwright",
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
      image: "/picasso-hair-salon.svg",
      video: "",
    },
    {
      title: "Quantasy",
      href: "https://quantasy.ai",
      dates: "May 2025 - Present",
      active: true,
      description:
        "Founder-led platform in alpha with ~40 testers; designed core data model and UX for roster management, synthesized user feedback to drive iterative roadmap refinement.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Sleeper API",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://quantasy.ai",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/4Clover/quantasy.ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/quantasy.svg",
      video: "",
    },
    {
      title: "Fleuron",
      href: "https://github.com/4Clover/expressions",
      dates: "2025 - Present",
      active: true,
      description:
        "Extended Picasso's core booking system into a multi-tenant SaaS pattern with boutique per-business sites, finance tracking, tax-deduction support, and employee management; mapped feature-parity gaps against market-leading platforms to prioritize roadmap items.",
      technologies: [
        "SvelteKit",
        "Supabase",
        "Drizzle ORM",
        "Square API",
        "Cloudflare Pages",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/4Clover/expressions",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fleuron.svg",
      video: "",
    },
    {
      title: "UC Davis DataLab",
      href: "https://github.com/4Clover/2025-PrimateHealth-Personal",
      dates: "Apr 2025 - Jun 2025",
      active: false,
      description:
        "Analyzed 43,800 records across 218 subjects using EDA, PCA, CCA, and SEM in Python and R. Built a Python web app and HTML reference guide so non-statisticians could contribute across the analysis pipeline. Findings presented to DataLab researchers.",
      technologies: [
        "Python",
        "R",
        "Pandas",
        "Scikit-learn",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/4Clover/2025-PrimateHealth-Personal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ucdavis-datalab.svg",
      video: "",
    },
    {
      title: "Cafepillar",
      href: "https://github.com/4Clover/Cafepillar",
      dates: "Sep 2024 - Mar 2025",
      active: false,
      description:
        "Implemented scalable game-state and data-management systems enabling 15 new recipes to be added without code rewrites; reduced feature build time ~30% via OOP patterns (Factory, Observer, Command). Optimized A* pathfinding (~80% reduction in computational overhead) and resolved 100+ Git merge conflicts across a five-person team repository.",
      technologies: [
        "Godot",
        "GDScript",
        "Git",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/4Clover/Cafepillar",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cafepillar.svg",
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
