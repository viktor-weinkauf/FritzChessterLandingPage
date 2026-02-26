import { techSpecs } from "@/data/landingData";

export const TechSpecsSection = () => (
  <section className="parchment py-16 md:py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-lobster text-3xl md:text-4xl mb-3" style={{ color: '#21368c' }}>
          Play Chess on Any Device — New Tech & Old Tech
        </h2>
        <p className="font-fredoka-original text-muted-foreground">
          Visiting relatives? Using an old laptop? Fritz & Chesster runs everywhere.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
        {techSpecs.map(item => (
          <div key={item.title} className="text-center">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-7 h-7 text-secondary" aria-hidden="true" />
            </div>
            <h3 className="font-fredoka font-bold mb-2" style={{ color: '#21368c' }}>{item.title}</h3>
            <p className="font-fredoka-original text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
