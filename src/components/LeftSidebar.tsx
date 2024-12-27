import { Home, User, Briefcase, GraduationCap, Mail, Code } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Projects', href: '#projects', icon: Code },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function LeftSidebar() {
  return (
    <div className="fixed h-screen w-[275px] border-r border-gray-200 dark:border-gray-800">
      <div className="flex flex-col h-full p-2">
        <div className="flex items-center justify-between p-3 mb-2">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <ThemeToggle />
        </div>
        <nav className="space-y-0.5">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-5 px-4 py-3 text-xl text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <item.icon className="w-7 h-7" />
              <span className="font-medium">{item.name}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto mb-4 px-4">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3.5 font-bold text-lg transition-colors">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}