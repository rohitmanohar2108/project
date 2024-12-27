interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export function ProjectCard({ title, description, image, technologies, link }: ProjectCardProps) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[300px] bg-gray-50 dark:bg-neutral-900 dark:border-neutral-800 rounded-2xl overflow-hidden">
      <img src={image} alt={title} className="w-full h-36 sm:h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-neutral-800 text-blue-800 dark:text-blue-100 rounded-full text-xs sm:text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center px-4 py-2 border border-neutral-800 hover:bg-neutral-800 text-white font-bold rounded-full  transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  );
}