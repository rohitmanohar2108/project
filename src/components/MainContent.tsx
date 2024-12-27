import { Header } from './Header';
import { HomeSection } from './sections/HomeSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { EducationSection } from './sections/EducationSection';
import { ProjectsSection } from './sections/ProjectsSection';


export function MainContent() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="max-w-[800px] mx-auto divide-y divide-gray-200 dark:divide-gray-800">
        <HomeSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
       
      </div>
    </div>
  );
}