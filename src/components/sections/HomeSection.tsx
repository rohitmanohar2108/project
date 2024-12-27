import { Calendar, LinkIcon, MapPin } from "lucide-react";

export function HomeSection() {
  return (
    <section id="home" className="px-4 py-6">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
            alt="Profile"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover   border-4 border-white dark:border-black"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Full Stack Developer
            </p>
          </div>
        </div>
        <p className="text-base text-gray-600 dark:text-neutral-200 text-center sm:text-left">
          Building amazing web experiences with React, Node.js, and modern
          technologies. Passionate about clean code and user-centric design.
        </p>
        <div className="flex gap-6 mt-4 text-neutral-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon className="w-4 h-4" />
                <a href="#" className="text-twitter hover:underline">portfolio.dev</a>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Joined March 2024
              </div>
            </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto text-center px-6 py-2.5 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-colors"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto text-center px-6 py-2.5 border border-blue-500 text-blue-500 font-bold rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
