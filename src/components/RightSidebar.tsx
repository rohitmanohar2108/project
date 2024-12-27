import { Github, Linkedin, Twitter, Search } from 'lucide-react';

const skills = [
  'React', 'TypeScript', 'Node.js', 'Python',
  'AWS', 'Docker', 'GraphQL', 'MongoDB'
];

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
];

export function RightSidebar() {
  return (
    <div className="fixed right-0 h-screen w-[350px] border-l border-gray-200 dark:border-gray-800">
      <div className="p-3 space-y-4">
        {/* Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Search Portfolio"
            className="w-full bg-gray-100 dark:bg-gray-800/90 rounded-full py-3 pl-11 pr-4 focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-blue-500 border border-transparent focus:border-blue-500"
          />
        </div>

        {/* Skills */}
        <div className="bg-gray-50 dark:bg-neutral-900 border border-neutral-800 rounded-2xl">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 dark:bg-neutral-800 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-gray-50 dark:bg-neutral-900 border dark:border-neutral-800 rounded-2xl">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-3">Connect</h2>
            <div className="space-y-1">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 p-3 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="bg-gray-50 dark:bg-neutral-900 border border-neutral-800  rounded-2xl">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-3">Quick Contact</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Available for freelance opportunities
            </p>
            <a
              href="mailto:contact@example.com"
              className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 font-bold transition-colors"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}