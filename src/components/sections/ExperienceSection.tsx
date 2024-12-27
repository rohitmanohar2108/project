import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Corp",
    period: "2020 - Present",
    description: "Led development of multiple full-stack applications and mentored junior developers.",
  },
  {
    title: "Full Stack Developer",
    company: "StartUp Inc",
    period: "2018 - 2020",
    description: "Developed and maintained various web applications using modern technologies.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Experience</h2>
      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:bg-neutral-900/60 transition-colors shadow-md"
          >
            <div className="flex gap-4">
              {/* Icon */}
              <div className="p-2 bg-neutral-800 rounded-full h-fit">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              {/* Details */}
              <div>
                <h3 className="font-bold text-xl">{experience.title}</h3>
                <p className="text-neutral-400">{experience.company}</p>
                <p className="text-neutral-500 text-sm">{experience.period}</p>
                <p className="mt-2 text-neutral-300">{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
