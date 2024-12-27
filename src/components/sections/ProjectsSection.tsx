import { ProjectCard } from '../ProjectCard';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    technologies: ['Vue.js', 'Firebase', 'Vuex','tailwind'],
    link: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather tracking application',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    link: '#',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
        {projects.map((project) => (
          <div key={project.title} className="snap-start">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}