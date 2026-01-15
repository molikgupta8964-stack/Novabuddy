import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Map, 
  LayoutDashboard, 
  Share2, 
  Sparkles,
  TrendingUp,
  BookOpen,
  Users
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Student Learning Hub",
    description: "Track your progress with interactive dashboards, daily goals, and learning consistency heat maps.",
    color: "from-primary to-primary/70",
  },
  {
    icon: MessageSquare,
    title: "AI Tutor Interface",
    description: "Real-time chat-based assistance where you can ask questions about course material instantly.",
    color: "from-accent to-accent/70",
  },
  {
    icon: Map,
    title: "Personalized Roadmaps",
    description: "Input your goal, and our AI generates a visual, clickable learning pathway tailored to you.",
    color: "from-primary to-accent",
  },
  {
    icon: Share2,
    title: "Open Innovation Hub",
    description: "Share and discover custom learning prompts and study templates from the community.",
    color: "from-accent to-primary",
  },
];

const additionalFeatures = [
  { icon: Sparkles, label: "AI-Powered Insights" },
  { icon: TrendingUp, label: "Progress Analytics" },
  { icon: BookOpen, label: "Resource Library" },
  { icon: Users, label: "Peer Collaboration" },
];

const Features = () => {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
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
            Powerful Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="gradient-text"> Learn Smarter</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with intuitive design to create 
            a learning experience that adapts to you.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card rounded-3xl p-8 h-full hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-2 px-5 py-3 rounded-full glass-card hover:border-accent/30 transition-colors"
            >
              <feature.icon className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
