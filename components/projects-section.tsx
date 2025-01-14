import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import {projects} from "../data/bio"



export function Projects() {
  return (
    <section className="py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white border border-primary/20 dark:border-primary/10 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image src={project.image} alt={project.title} width={500} height={200} className="w-full h-48 object-cover" />
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl text-primary font-semibold mb-2">{project.title}</h3>
                <p className="dark:text-gray-400 text-gray-700  mb-4">{project.date}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-dark px-2 py-1 rounded-full font-medium text-sm">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-dark px-2 py-1 rounded-full text-sm">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
                <div className="flex justify-between mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center dark:text-gray-200 dark:hover:text-primary hover:text-primary"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center dark:text-gray-200 dark:hover:text-primary hover:text-primary"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

