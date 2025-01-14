'use client'
import { experiences } from "@/data/bio";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Experience() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1048);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1048);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sortedExperiences = [...experiences].sort((a, b) => b.id - a.id);

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className={isMobile ? "grid grid-cols-1 gap-6" : "relative"}>
          {!isMobile && (
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
          )}
          {sortedExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`mb-8 ${isMobile ? "" : `flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className={`${
                  isMobile
                    ? ""
                    : `w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`
                }`}
              >
                <div className="bg-white dark:bg-gray-800 border border-primary/20 dark:border-primary/10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 mr-4">
                      <Image
                        src={exp.img}
                        alt={`${exp.company} logo`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{exp.role}</h3>
                      <h4 className="text-lg font-medium text-primary dark:text-primary-dark">{exp.company}</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.date}</p>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-dark px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


