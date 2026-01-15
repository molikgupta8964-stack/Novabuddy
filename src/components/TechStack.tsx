import { motion } from "framer-motion";

const technologies = [
  {
    category: "Frontend",
    description: "React with Tailwind CSS for rapid UI development",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "TypeScript", icon: "📘" },
      { name: "Framer Motion", icon: "✨" },
    ],
  },
  {
    category: "Intelligence",
    description: "Integration with OpenAI/Gemini APIs for the Companion logic",
    items: [
      { name: "OpenAI API", icon: "🧠" },
      { name: "Gemini API", icon: "💫" },
      { name: "LangChain", icon: "🔗" },
      { name: "Vector DB", icon: "📊" },
    ],
  },
  {
    category: "Backend & Data",
    description: "Supabase or Firebase for real-time user progress tracking",
    items: [
      { name: "Supabase", icon: "⚡" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Edge Functions", icon: "🌐" },
      { name: "Real-time Sync", icon: "🔄" },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="tech" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Technology
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Built with <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We leverage cutting-edge technologies to deliver a seamless, 
            intelligent, and scalable learning experience.
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-3xl p-8 h-full hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {tech.category}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Tech Items */}
                <div className="grid grid-cols-2 gap-3">
                  {tech.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-accent/10 transition-colors"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-medium text-foreground">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="glass-card rounded-3xl p-8 md:p-10 text-center border-accent/20">
            <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">
              Open Innovation at the Core
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our architecture is designed with openness in mind. We use open-source 
              technologies where possible and have built APIs that allow the community 
              to contribute custom learning modules, prompts, and integrations. 
              This is education democratized through technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
