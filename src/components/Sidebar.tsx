import { Home, User, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function Sidebar() {
  return (
    <div className="fixed h-screen w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold">Portfolio</h1>
          <ThemeToggle />
        </div>
        <nav className="space-y-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-4 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <item.icon className="w-6 h-6" />
              <span className="text-lg">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}