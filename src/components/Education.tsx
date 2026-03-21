import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string[];
  icon: React.ElementType;
}

const educationData: EducationItem[] = [
  {
    institution: "University of Chittagong",
    degree: "B.Sc. in Computer Science and Engineering",
    period: "2023 - Present",
    location: "Hathazari, Chittagong, Bangladesh",
    details: [
      "Focused on Systems Programming, Algorithms, and Software Engineering.",
      "Active participant in competitive programming contests.",
      "Researching on high-performance computing and memory-safe architectures."
    ],
    icon: GraduationCap
  },
  {
    institution: "Govt. City College Chittagong",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2020 - 2022",
    location: "New Market Moor, Chittagong, Bangladesh",
    details: [
      "Specialized in Science group.",
      "Participated in various science fairs and math olympiads."
    ],
    icon: BookOpen
  },
  {
    institution: "Nasirabad Govt. High School",
    degree: "Secondary School Certificate (SSC)",
    period: "2018 - 2020",
    location: "GEC, Chittagong, Bangladesh",
    details: [
      "Foundational education with a focus on Mathematics and Science.",
      "Developed early interest in computer science and technology."
    ],
    icon: Award
  },
  {
    institution: "Nanupur Abo Subhan high school",
    degree: "Junior School Certificate (JSC)",
    period: "2015 - 2017",
    location: "Nanupur, Fatickchari, Chittagong, Bangladesh",
    details: [
      "Early academic excellence and foundational learning."
    ],
    icon: Award
  },
  {
    institution: "East Maizbhander Govt Primary High School",
    degree: "Primary School Certificate (PSC)",
    period: "2010 - 2014",
    location: "Maizbhandar, Fatickchari, Chittagong, Bangladesh",
    details: [
      "Primary education foundation."
    ],
    icon: Award
  },
    {
    institution: "South keochia goverment primary school",
    degree: "Pre-School",
    period: "2009 - 2010",
    location: "Satkania, Chittagong, Bangladesh",
    details: [
      "Primary education foundation."
    ],
    icon: Award
  }
];

export const Education: React.FC = () => {
  return (
    <section className="py-32 px-4 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <GraduationCap className="text-primary w-8 h-8" />
          Education Path
        </h2>
        <p className="text-foreground/50 font-mono text-sm">
          &gt; academic journey and certifications.
        </p>
      </motion.div>

      <div className="space-y-8">
        {educationData.map((item, idx) => (
          <motion.div
            key={item.institution}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-[2rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display">{item.institution}</h3>
                  <p className="text-primary font-medium">{item.degree}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 text-xs font-mono text-foreground/40">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </span>
              </div>
            </div>

            <ul className="space-y-3">
              {item.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/60 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
