import fred from "@/assets/Fred.png";
import fritz from "@/assets/Fritz.png";
import bianca from "@/assets/Bianca.png";

export const StorySection = () => (
  <section id="story" className="sky-texture py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto">
        {/* Story Card */}
        <div className="flex-1">
          <div className="royal-card p-8 md:p-10" style={{ borderColor: '#e33913' }}>
            <h2 className="font-lobster text-3xl md:text-4xl text-foreground mb-2">
              A Kingdom in <span style={{ color: '#e33913' }}>Crisis</span>
            </h2>
            <h3 className="font-lobster text-2xl md:text-3xl mb-8" style={{ color: '#21368c' }}>
              A Duel for the Crown
            </h3>

            <div className="space-y-4 font-fredoka-original text-foreground/80 leading-relaxed">
              <p>
                Your child isn't signing up for a "class." They are <strong style={{ color: '#21368c' }}>stepping into a story.</strong>
              </p>
              <p>
                King White and Queen White have gone on vacation, leaving Prince Fritz and his cousin Bianca in charge. But the evil <span className="font-semibold" style={{ color: '#e33913' }}>King Black</span> has challenged them to a duel!
              </p>
              <p>
                There's just one problem: <strong style={{ color: '#e33913' }}>Fritz doesn't know how to play.</strong>
              </p>
              <p>
                Guided by <span className="font-semibold" style={{ color: '#21368c' }}>Fred the Rat</span> (a sewer-dwelling chess coach), your child will travel through the kingdom, solving puzzles, wrestling giants, and smashing toilets to build their skills before the final showdown.
              </p>
            </div>
          </div>
        </div>

        {/* Character Images */}
        <div className="flex-1 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fritz */}
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-200 to-sky-100 rounded-2xl p-6 shadow-xl border-4 border-parchment-dark/20 h-72 md:h-80 flex items-center justify-center">
                <img
                  src={fritz}
                  alt="Prince Fritz - the main character who learns chess"
                  className="w-48 md:w-56 h-auto max-h-full object-contain cursor-pointer transition-transform hover:animate-wiggle-bounce"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-white px-4 py-1 rounded-full font-fredoka-original font-semibold text-sm shadow-lg whitespace-nowrap" style={{ backgroundColor: '#21368c' }}>
                Meet Fritz!
              </div>
            </div>

            {/* Fred the Rat */}
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-200 to-sky-100 rounded-2xl p-6 shadow-xl border-4 border-parchment-dark/20 h-72 md:h-80 flex items-center justify-center">
                <img
                  src={fred}
                  alt="Fred the Rat character - a friendly rat wearing clothes who serves as your chess coach throughout the game"
                  className="w-48 md:w-56 h-auto max-h-full object-contain cursor-pointer transition-transform hover:animate-wiggle-bounce"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-white px-4 py-1 rounded-full font-fredoka-original font-semibold text-sm shadow-lg whitespace-nowrap" style={{ backgroundColor: '#21368c' }}>
                Meet Fred!
              </div>
            </div>

            {/* Bianca */}
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-200 to-sky-100 rounded-2xl p-6 shadow-xl border-4 border-parchment-dark/20 h-72 md:h-80 flex items-center justify-center">
                <img
                  src={bianca}
                  alt="Princess Bianca - Fritz's cousin who helps him learn chess"
                  className="w-48 md:w-56 h-auto max-h-full object-contain cursor-pointer transition-transform hover:animate-wiggle-bounce"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-white px-4 py-1 rounded-full font-fredoka-original font-semibold text-sm shadow-lg whitespace-nowrap" style={{ backgroundColor: '#21368c' }}>
                Meet Bianca!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
