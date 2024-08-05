import { Container, Hero, About, Experience, PetProjects } from "@/components/shared";
import config from '../../config.json';

export default function Home() {
  return (
    <main>
      <Container className="mt-[150px] lg:mt-[200px] xl:mt-[250px]" sectionId={1} title="home">
        <Hero className="flex justify-between" />
      </Container>
      <Container className="pt-[200px]" sectionId={2} title="about">
        <About className="flex flex-col gap-7" tech_stack={config.technologies} />
      </Container>
      <Container className="pt-[200px]" sectionId={3} title="experience">
        <Experience className="flex flex-col gap-7" experience={config.experience} />
      </Container>
      <Container className="pt-[200px]" sectionId={4} title="projects">
        <PetProjects className="flex flex-col gap-7" projects={config.projects} />
      </Container>
    </main>
  );
}