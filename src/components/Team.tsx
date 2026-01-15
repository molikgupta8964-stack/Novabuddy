import { motion } from "framer-motion";
import { Linkedin, Github, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Pari Bangar",
    role: "Team Lead & UI/UX Designer",
    focus: "Accessibility and user-centric design",
    avatar: "PB",
    gradient: "from-primary to-primary/70",
  },
  {
    name: "Sahil Yadav",
    role: "Backend Developer",
    focus: "Robust data architecture and API integration",
    avatar: "SY",
    gradient: "from-accent to-accent/70",
  },
  {
    name: "Priyansh Gupta",
    role: "Full Stack Developer",
    focus: "Bridging the gap between design and logic",
    avatar: "PG",
    gradient: "from-primary to-accent",
  },
  {
    name: "Molik Gupta",
    role: "AI/ML Engineer",
    focus: "Adaptive learning algorithms and LLM integration",
    avatar: "MG",
    gradient: "from-accent to-primary",
  },
];

const Team = () => {
  return (
    <section id="team" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            The Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meet the <span className="gradient-text">Innovators</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate team of developers, designers, and AI enthusiasts 
            working to revolutionize education through Open Innovation.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-3xl p-6 text-center h-full hover:border-accent/30 transition-all duration-300 hover:-translate-y-2">
                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <span className="text-2xl font-display font-bold text-primary-foreground">
                      {member.avatar}
                    </span>
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-card rounded-full border-2 border-card flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.focus}
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3">
                  {[Linkedin, Github, Twitter].map((Icon, i) => (
                    <button
                      key={i}
                      className="w-9 h-9 rounded-lg bg-muted hover:bg-accent/10 flex items-center justify-center transition-colors group/icon"
                    >
                      <Icon className="w-4 h-4 text-muted-foreground group-hover/icon:text-accent transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathon Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass-card border-primary/20">
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
              <span className="text-xl">🏆</span>
            </div>
            <div className="text-left">
              <p className="font-display font-semibold text-foreground">
                College Hackathon 2024
              </p>
              <p className="text-sm text-muted-foreground">
                Theme: Open Innovation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
