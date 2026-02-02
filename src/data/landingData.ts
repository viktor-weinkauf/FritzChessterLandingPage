import { Volume2, Shield, Heart, Download, Mail, UserPlus, Play, Monitor, Tablet, Lock, Globe, Crown, type LucideIcon } from "lucide-react";

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  titleColor?: string;
}

export interface GiftStep {
  step: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface MethodItem {
  title: string;
  rule: string;
  game: string;
  result: string;
  color: string;
}

export interface TechSpec {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const benefits: BenefitItem[] = [
  {
    icon: Volume2,
    title: "Quiet Focus",
    desc: "While you relax, they are deeply engaged in solving logic puzzles.",
    color: "text-secondary",
    titleColor: "#21368c"
  },
  {
    icon: Shield,
    title: "No Violence",
    desc: "No shooting, no stress. Just whimsical problem-solving.",
    color: "text-accent-green",
    titleColor: "#21368c"
  },
  {
    icon: Heart,
    title: "Lasting Value",
    desc: "Most toys break by January. Chess skills last a lifetime.",
    color: "text-primary",
    titleColor: "#21368c"
  }
];

export const giftSteps: GiftStep[] = [
  {
    step: "1",
    icon: Download,
    title: "Buy the Game",
    desc: "Secure checkout in 2 minutes"
  },
  {
    step: "2",
    icon: Mail,
    title: "Get Your Code",
    desc: "License code delivered instantly via email"
  },
  {
    step: "3",
    icon: UserPlus,
    title: "Create Account",
    desc: "Quick setup on any device"
  },
  {
    step: "4",
    icon: Play,
    title: "Start Playing",
    desc: "The adventure begins immediately"
  }
];

export const methodItems: MethodItem[] = [
  {
    title: "The Toilet Smash",
    rule: "Rook Movement",
    game: "Smash toilets in straight lines to clear the path.",
    result: "They master files and ranks instantly.",
    color: "from-primary/10 to-accent-gold/10"
  },
  {
    title: "The Sumo Wrestlers",
    rule: "King Opposition",
    game: "Push sumo wrestlers out of the ring without getting blocked.",
    result: "They understand complex spacing naturally.",
    color: "from-secondary/10 to-accent-gold/10"
  },
  {
    title: "The Flower Maze",
    rule: "Bishop Movement",
    game: "Bounce a ball off billiards cushions to hit flowers.",
    result: "They visualize diagonals effortlessly.",
    color: "from-accent-gold/10 to-primary/10"
  }
];

export const techSpecs: TechSpec[] = [
  {
    icon: Monitor,
    title: "No Installation",
    desc: "Runs directly in Chrome, Safari, or Edge"
  },
  {
    icon: Tablet,
    title: "Tablet Ready",
    desc: "Perfect for iPads and Android tablets"
  },
  {
    icon: Globe,
    title: "12 Languages",
    desc: "Play in your native language—perfect for international families"
  },
  {
    icon: Lock,
    title: "One-Time Purchase",
    desc: "No monthly subscription. You own it forever."
  }
];

export const PRICE = "29.90";
export const CURRENCY = "EUR";

export const formatPrice = (amount: string = PRICE, currency: string = CURRENCY): string => {
  return `${currency === "EUR" ? "€" : currency} ${amount}`;
};
