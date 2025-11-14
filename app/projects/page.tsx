import ProjectCard from "@/components/ProjectCard"; 
import Container from "@/components/Container";
import Section from "@/components/Section";
import projects from "./data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects by Will Fritz.",
};


export default function Projects() {
  return (
    <div>
      <main>
        <Container className="max-w-7xl mx-auto">
          <Section id="Projects" title="Projects">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  repoLink={project.repoUrl}
                  description={project.shortDescription}
                  techStack={project.tech}
                />
              ))}
            </div>
          </Section>
        </Container>
      </main>
    </div>
  );
}