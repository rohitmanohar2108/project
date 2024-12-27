import { Home, User, Briefcase, GraduationCap, Code, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Projects', href: '#projects', icon: Code },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 md:hidden z-50">
      <div className="flex justify-around items-center px-2 py-3">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex flex-col items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}