import { motion } from 'framer-motion';
import Image from 'next/image';
import { education } from '@/data/bio';

export function Education() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-8 dark:bg-gray-900">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className=" p-6 dark:bg-gray-800 border border-primary/20 dark:border-primary/10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
              <Image src={edu.img} alt={edu.school} width={64} height={64} className="rounded-full mr-4" />
                <div>
                  <h3 className="text-xl text-primary font-semibold">{edu.school}</h3>
                  <p className="dark:text-gray-400 text-gray-600">{edu.date}</p>
                </div>
              </div>
              <h4 className="text-lg font-medium mb-2">{edu.degree}</h4>
              <p className="dark:text-gray-400 text-gray-700 mb-2">Grade: {edu.grade}</p>
              <p className="dark:text-gray-300 text-gray-600">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

