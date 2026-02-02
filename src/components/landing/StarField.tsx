import { useMemo } from "react";

interface StarFieldProps {
  count?: number;
}

export const StarField = ({ count = 50 }: StarFieldProps) => {
  const stars = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: 0.2 + Math.random() * 0.4
    })),
    [count]
  );

  return (
    <>
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: star.left,
            top: star.top,
            opacity: star.opacity
          }}
          aria-hidden="true"
        />
      ))}
    </>
  );
};
