import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  titleColor?: string;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  iconColor = "text-secondary",
  titleColor
}: FeatureCardProps) => {
  const isHexColor = iconColor?.startsWith('#');

  return (
    <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-parchment-dark/20
      hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500
      hover:bg-white/90 cursor-default relative overflow-hidden">
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mx-auto mb-4
          shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:shadow-xl">
          <Icon
            className={`w-7 h-7 ${isHexColor ? '' : iconColor} transition-transform duration-500 group-hover:scale-110`}
            style={isHexColor ? { color: iconColor } : undefined}
            aria-hidden="true"
          />
        </div>
        <h3
          className="font-fredoka font-bold text-lg mb-3 transition-colors duration-300"
          style={titleColor ? { color: titleColor } : undefined}
        >
          {title}
        </h3>
        <p className="font-fredoka-original text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
