const education = [
  {
    school: "Stanford University",
    degree: "Master of Computer Science",
    year: "2016 - 2018",
    description: "Specialized in Artificial Intelligence and Machine Learning",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
  },
  {
    school: "MIT",
    degree: "Bachelor of Computer Science",
    year: "2012 - 2016",
    description: "Focus on Software Engineering and Data Structures",
    image: "https://images.unsplash.com/photo-1583373834259-46cc92173cb7",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="px-4 py-6 pb-20 md:pb-6">
      <h2 className="text-xl font-bold mb-4">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 items-center sm:items-start hover:bg-gray-100 border border-gray-200 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-900/60 p-4 rounded-xl transition-colors"
          >
            <img
              src={edu.image}
              alt={edu.school}
              className="w-full sm:w-32 h-48 sm:h-24 rounded-lg object-cover"
            />
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg">{edu.school}</h3>
              <p className="text-blue-500 dark:text-blue-400 font-medium">
                {edu.degree}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {edu.year}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
