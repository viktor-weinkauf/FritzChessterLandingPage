import { Crown, Check, X } from "lucide-react";
import { methodItems } from "@/data/landingData";
import sumoImage from "@/assets/Sumo.jpg";
import toiletImage from "@/assets/Toilet.jpg";
import flowerMazeImage from "@/assets/Flower_Maze.jpg";
import { useState } from "react";

// TODO: Replace placeholder Crown icons with actual gameplay screenshots:
// - "The Toilet Smash" card: Replace with dynamic screenshot showing a winning scenario
//   (preferably featuring Bianca character)
// - Other cards: Consider adding relevant gameplay images

export const MethodSection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const getImageForTitle = (title: string) => {
    if (title === "The Sumo Wrestlers") return sumoImage;
    if (title === "The Toilet Smash") return toiletImage;
    if (title === "The Flower Maze") return flowerMazeImage;
    return null;
  };

  return (
  <section id="method" className="sky-texture py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="font-lobster text-3xl md:text-5xl mb-4" style={{ color: '#21368c' }}>
          The <span style={{ color: '#e33913' }}>"Sumo"</span> Method
        </h2>
        <p className="font-fredoka-original text-lg text-muted-foreground">
          Learning by Accident — Memory hooks that <strong style={{ color: '#21368c' }}>stick forever.</strong>
        </p>
        <p className="font-fredoka-original text-muted-foreground mt-2 max-w-xl mx-auto">
          Most apps drill kids with abstract rules. We use games that make the concepts unforgettable.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {methodItems.map(item => {
          const image = getImageForTitle(item.title);
          return (
          <div key={item.title} className="royal-card overflow-hidden hover:shadow-xl transition-shadow" style={{ borderColor: '#e33913' }}>
            <div className={`h-36 bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden relative group`}>
              {image ? (
                <>
                  <img
                    src={image}
                    alt={`${item.title} game`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                    onClick={() => setSelectedImage({ src: image, alt: `${item.title} game` })}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-white text-sm font-fredoka-original bg-black/50 px-3 py-1 rounded-full">Click to enlarge</span>
                  </div>
                </>
              ) : (
                <Crown className="w-16 h-16 text-foreground/20" aria-hidden="true" />
              )}
            </div>
            <div className="p-6">
              <h3 className="font-lobster text-2xl mb-4" style={{ color: '#21368c' }}>{item.title}</h3>
              <div className="space-y-2 font-fredoka-original text-sm">
                <p className="text-muted-foreground"><strong style={{ color: '#21368c' }}>The Rule:</strong> {item.rule}</p>
                <p className="text-muted-foreground"><strong style={{ color: '#21368c' }}>The Game:</strong> {item.game}</p>
                <p className="text-accent-green font-semibold flex items-center gap-1 mt-3">
                  <Check className="w-4 h-4" aria-hidden="true" /> {item.result}
                </p>
              </div>
            </div>
          </div>
        );
        })}
      </div>
    </div>

    {/* Image Modal */}
    {selectedImage && (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={() => setSelectedImage(null)}
      >
        <div className="relative max-w-4xl max-h-[90vh] w-full">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -top-12 right-0 text-white hover:text-accent-gold transition-colors"
            aria-label="Close image"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="w-full h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    )}
  </section>
  );
};
