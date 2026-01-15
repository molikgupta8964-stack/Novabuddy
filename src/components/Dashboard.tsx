import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Flame,
  BookOpen,
  Award,
  ChevronRight
} from "lucide-react";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const heatmapData = [
  [3, 4, 2, 5, 4, 1, 0],
  [4, 5, 3, 4, 5, 2, 1],
  [2, 3, 4, 5, 4, 3, 2],
  [5, 4, 5, 4, 5, 4, 3],
];

const getHeatmapColor = (value: number) => {
  const colors = [
    "bg-muted",
    "bg-accent/20",
    "bg-accent/40",
    "bg-accent/60",
    "bg-accent/80",
    "bg-accent",
  ];
  return colors[value] || colors[0];
};

const Dashboard = () => {
  return (
    <section id="dashboard" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Learning Dashboard
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Your <span className="gradient-text">Learning Hub</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Track your progress, maintain consistency, and achieve your learning goals 
            with our intuitive dashboard.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass-card rounded-3xl p-6 md:p-8 border-accent/20 glow-accent">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                  Welcome back, Learner! 👋
                </h3>
                <p className="text-muted-foreground mt-1">
                  You're on a 7-day streak. Keep it up!
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10">
                <Flame className="w-5 h-5 text-accent" />
                <span className="font-semibold text-accent">7 Day Streak</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Clock, label: "Hours Learned", value: "24.5", trend: "+2.5h" },
                { icon: BookOpen, label: "Lessons Done", value: "48", trend: "+5" },
                { icon: Target, label: "Goals Met", value: "12/15", trend: "80%" },
                { icon: Award, label: "XP Earned", value: "2,450", trend: "+320" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-muted/50 rounded-2xl p-4"
                >
                  <stat.icon className="w-5 h-5 text-muted-foreground mb-2" />
                  <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                    <span className="text-xs font-medium text-accent">{stat.trend}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Progress Section */}
              <div className="lg:col-span-2 space-y-6">
                {/* Current Course */}
                <div className="bg-muted/30 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground">Current Course</h4>
                    <span className="text-sm text-accent">75% complete</span>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-medium text-foreground truncate">Python Fundamentals</h5>
                      <p className="text-sm text-muted-foreground">Module 8 of 12</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                {/* Daily Goals */}
                <div className="bg-muted/30 rounded-2xl p-5">
                  <h4 className="font-semibold text-foreground mb-4">Today's Goals</h4>
                  <div className="space-y-3">
                    {[
                      { task: "Complete 2 lessons", progress: 100 },
                      { task: "Practice coding for 30 min", progress: 66 },
                      { task: "Review flashcards", progress: 0 },
                    ].map((goal, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${goal.progress === 100 ? 'bg-accent border-accent' : 'border-muted-foreground'}`}>
                          {goal.progress === 100 && (
                            <svg className="w-3 h-3 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className={`flex-1 text-sm ${goal.progress === 100 ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                          {goal.task}
                        </span>
                        <span className="text-xs text-muted-foreground">{goal.progress}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Heat Map */}
              <div className="bg-muted/30 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">Learning Heat Map</h4>
                  <TrendingUp className="w-4 h-4 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">Last 4 weeks</p>
                
                <div className="space-y-2">
                  {heatmapData.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex gap-1.5">
                      {week.map((day, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`w-full aspect-square rounded-md ${getHeatmapColor(day)} transition-colors hover:ring-2 hover:ring-accent/50`}
                          title={`${weekDays[dayIndex]}: ${day} hours`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                  {weekDays.map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-4 text-xs">
                  <span className="text-muted-foreground">Less</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4, 5].map((level) => (
                      <div key={level} className={`w-3 h-3 rounded-sm ${getHeatmapColor(level)}`} />
                    ))}
                  </div>
                  <span className="text-muted-foreground">More</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
