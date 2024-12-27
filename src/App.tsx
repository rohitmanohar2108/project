import { LeftSidebar } from './components/LeftSidebar';
import { RightSidebar } from './components/RightSidebar';
import { MainContent } from './components/MainContent';
import { MobileNav } from './components/MobileNav';

function App() {
  return (
    <div className="flex min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      {/* Mobile Navigation - Only visible on mobile */}
      <MobileNav />
      
      {/* Left Sidebar - Hidden on mobile */}
      <div className="hidden md:block">
        <LeftSidebar />
      </div>
      
      {/* Main Content - Full width on mobile, adjusted margins on desktop */}
      <div className="flex-1 md:ml-[275px] md:mr-[350px]">
        <MainContent />
      </div>
      
      {/* Right Sidebar - Hidden on mobile */}
      <div className="hidden md:block">
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;