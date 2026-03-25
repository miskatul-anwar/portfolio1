import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string[];
  icon: React.ElementType;
  image: string;
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
    icon: GraduationCap,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Department_of_Computer_Science_and_Engineering_at_University_of_Chittagong_%2810%29.jpg/500px-Department_of_Computer_Science_and_Engineering_at_University_of_Chittagong_%2810%29.jpg"
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
    icon: BookOpen,
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoLSer7oFyTZ5NzefTC0Y_JZtrnim_s-l836ooRKBQvGNEaKVh4BhPiaRrDiQJT4Uq18UY8aVIX2Ff211oFEwZqVhrTEr7ZbQ-xSmOrDa2H4wgXVGkkLoI8PpfVd__R7gSI9xtTpa0ux_rv=s1360-w1360-h1020"
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
    icon: Award,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nasirabad_Govt_High_School_Front_Rahat.jpg/500px-Nasirabad_Govt_High_School_Front_Rahat.jpg"
  },
  {
    institution: "Nanupur Abo Subhan high school",
    degree: "Junior School Certificate (JSC)",
    period: "2015 - 2017",
    location: "Nanupur, Fatickchari, Chittagong, Bangladesh",
    details: [
      "Early academic excellence and foundational learning."
    ],
    icon: Award,
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerF09Zs9LrD8hmqN25HwPK0KwQp8JpgMTfRLTAUoYhCgUGOtmYhCBESwq9UkNvwtP2FcWpZsJNiR9lfaIgWBJu1Y-BBhdJL1__FLvCpUxJfOGrZKo2EVB020sH07g_LO2ILtW4O2A=s1360-w1360-h1020"
  },
  {
    institution: "East Maizbhander Govt Primary High School",
    degree: "Primary School Certificate (PSC)",
    period: "2010 - 2014",
    location: "Maizbhandar, Fatickchari, Chittagong, Bangladesh",
    details: [
      "Primary education foundation."
    ],
    icon: Award,
    image: "https://scontent.fcgp7-2.fna.fbcdn.net/v/t39.30808-6/525572279_745027795125730_5996100351984167265_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHE4rD6cTCMimdVYBh-BP3Ldr4l_O3UXXB2viX87dRdcHcOWHgGC12_Tomj-_LNgAcGMznUbDpHHOa3SC6GmNol&_nc_ohc=_fYa-kZGRCMQ7kNvwFJW7BW&_nc_oc=AdpjrfFjxxvJNmLkBKhRDc1E7p251vS3Tp4uscxZxWwkWTirc6wgveOX0Etmff8YwZU&_nc_zt=23&_nc_ht=scontent.fcgp7-2.fna&_nc_gid=lPJJiguCU3UJ--9fMzatyQ&_nc_ss=7a32e&oh=00_AfwB-nBakNy9FaTrYT6yjoDcm0Ej-AmWuAuSu4bUYn6C0w&oe=69C97317"
  },
  {
    institution: "South Keochia Government Primary School",
    degree: "Pre-School",
    period: "2009 - 2010",
    location: "Satkania, Chittagong, Bangladesh",
    details: [
      "Primary education foundation."
    ],
    icon: Award,
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwermsyfx7vTNlZvD6iJaNuOJVOwoeHb4Cr6XoIW65qNkPgziYRXaVYcv4jk6S1IUVzGqMGNGqJMw0loewsEe6hInuMuTL9Y-BZIojnpTb9Z7hYaFMfNxkjBBbkARV242wuA2D-UR=s1360-w1360-h1020"
  }
];

export const Education: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto min-h-screen">
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
        <p className="text-foreground/50 text-lg max-w-2xl">
          My academic background and educational milestones.
        </p>
      </motion.div>

      <div className="relative">
        {/* Straight Backbone */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary/10 -translate-x-1/2 z-0" />

        <div className="space-y-12 md:space-y-20">
          {educationData.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={cn(
                  "relative flex items-center w-full",
                  isEven ? "md:justify-end" : "md:justify-start"
                )}
              >
                {/* Curvy Connection (SVG) */}
                <svg 
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 h-24 w-24 pointer-events-none z-0 overflow-visible",
                    "left-8 md:left-1/2 -translate-x-1/2", // Centered on backbone for all screen sizes
                    !isEven && "md:scale-x-[-1]" // Flip for items on the left side
                  )}
                  viewBox="0 0 96 96"
                  fill="none"
                >
                  {/* Backbone connection dot - centered at x=48 to align with backbone */}
                  <circle cx="48" cy="0" r="5" className="fill-primary/80" />
                  <circle cx="48" cy="0" r="10" className="fill-primary/20" />
                  
                  {/* The curve starts from the backbone (center) and rounds into the card */}
                  <path 
                    d="M 48 0 L 48 8 Q 48 48 96 48" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary/30 group-hover:text-primary/60 transition-colors duration-500"
                  />
                </svg>

                <div className="w-full md:w-[calc(50%-3rem)] ml-16 md:ml-0 relative z-10">
                  <div className="glass overflow-hidden rounded-[2.5rem] group hover:bg-foreground/5 transition-all duration-500">
                    <div className="aspect-[21/9] w-full overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.institution}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className={cn(
                        "absolute bottom-6 left-8 right-8 flex items-center gap-3",
                        isEven ? "md:flex-row-reverse" : ""
                      )}>
                        <div className="p-2 bg-primary/20 backdrop-blur-md rounded-xl">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                          {item.period}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className={cn(
                        "text-2xl font-bold mb-2 font-display group-hover:text-primary transition-colors",
                        isEven ? "md:text-right" : "md:text-left"
                      )}>
                        {item.institution}
                      </h3>
                      <p className={cn(
                        "text-primary font-medium mb-4",
                        isEven ? "md:text-right" : "md:text-left"
                      )}>{item.degree}</p>
                      
                      <div className={cn(
                        "flex items-center gap-2 text-xs font-mono text-foreground/40 mb-6",
                        isEven ? "md:justify-end" : "md:justify-start"
                      )}>
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>

                      <ul className={cn(
                        "space-y-3 flex flex-col",
                        isEven ? "md:items-end" : "md:items-start"
                      )}>
                        {item.details.map((detail, i) => (
                          <li key={i} className={cn(
                            "flex items-start gap-3 text-foreground/60 leading-relaxed text-sm",
                            isEven ? "md:flex-row-reverse md:text-right" : "md:text-left"
                          )}>
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
