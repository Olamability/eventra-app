import techSummit from "@/assets/event-tech-summit.jpg";
import afrobeats from "@/assets/event-afrobeats.jpg";
import businessForum from "@/assets/event-business-forum.jpg";
import startupPitch from "@/assets/event-startup-pitch.jpg";
import jazzNight from "@/assets/event-jazz-night.jpg";
import web3 from "@/assets/event-web3.jpg";
import womenSummit from "@/assets/event-women-summit.jpg";
import amapiano from "@/assets/event-amapiano.jpg";

export type Category = "Tech" | "Music" | "Business";

export interface EventItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string; // ISO
  location: string;
  category: Category;
  price: string;
}

export const categories: ("All" | Category)[] = ["All", "Tech", "Music", "Business"];

export const events: EventItem[] = [
  {
    id: "africa-tech-summit",
    title: "Africa Tech Summit 2025",
    description:
      "Join 3,000+ founders, investors, and engineers from across the continent for three days of keynotes, hands-on workshops, and deal-making. Explore the future of fintech, AI, and infrastructure shaping the next decade of African innovation.",
    image: techSummit,
    date: "2025-06-12T09:00:00",
    location: "Eko Convention Centre, Lagos",
    category: "Tech",
    price: "From ₦25,000",
  },
  {
    id: "afrobeats-festival",
    title: "Afrobeats Live Festival",
    description:
      "An unforgettable night under the Lagos sky featuring the biggest names in Afrobeats. Multiple stages, food villages, and immersive art installations celebrating the global sound of a generation.",
    image: afrobeats,
    date: "2025-07-05T18:00:00",
    location: "Tafawa Balewa Square, Lagos",
    category: "Music",
    price: "From ₦15,000",
  },
  {
    id: "pan-african-business-forum",
    title: "Pan-African Business Forum",
    description:
      "A premier gathering of executives, policymakers, and entrepreneurs driving cross-border trade. Curated networking, panel discussions on AfCFTA, and private investor matchmaking sessions.",
    image: businessForum,
    date: "2025-08-22T08:30:00",
    location: "Kigali Convention Centre, Rwanda",
    category: "Business",
    price: "From $250",
  },
  {
    id: "startup-pitch-night",
    title: "Startup Pitch Night Nairobi",
    description:
      "Twelve early-stage startups pitch live to a panel of top VCs for a chance to win $50,000 in funding. Plus drinks, demos, and the warmest founder community in East Africa.",
    image: startupPitch,
    date: "2025-05-30T17:00:00",
    location: "iHub, Nairobi",
    category: "Tech",
    price: "Free",
  },
  {
    id: "jazz-under-the-stars",
    title: "Jazz Under the Stars",
    description:
      "An intimate evening of soulful jazz featuring renowned saxophonists and rising vocal talent. Candlelit tables, fine wine, and a sound that lingers long after the last note.",
    image: jazzNight,
    date: "2025-06-28T20:00:00",
    location: "The Orbit, Johannesburg",
    category: "Music",
    price: "From R450",
  },
  {
    id: "web3-africa-conference",
    title: "Web3 Africa Conference",
    description:
      "Deep-dive workshops on smart contracts, DeFi, and on-chain identity. Connect with builders shaping the decentralized economy on the continent.",
    image: web3,
    date: "2025-09-14T10:00:00",
    location: "Cape Town ICC, South Africa",
    category: "Tech",
    price: "From $180",
  },
  {
    id: "women-in-leadership-summit",
    title: "Women in Leadership Summit",
    description:
      "A bold one-day summit bringing together trailblazing women across industries. Expect candid keynotes, mentorship circles, and a community designed to elevate.",
    image: womenSummit,
    date: "2025-07-19T09:00:00",
    location: "Movenpick Hotel, Accra",
    category: "Business",
    price: "From ₵800",
  },
  {
    id: "amapiano-block-party",
    title: "Amapiano Block Party",
    description:
      "The biggest open-air amapiano experience of the year. Top DJs, log drum bass, food trucks, and a sunset that turns into a sunrise. Bring your dancing shoes.",
    image: amapiano,
    date: "2025-08-09T14:00:00",
    location: "Constitution Hill, Johannesburg",
    category: "Music",
    price: "From R350",
  },
];

export const getEventById = (id: string) => events.find((e) => e.id === id);
