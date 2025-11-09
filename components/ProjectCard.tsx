import React from 'react';
import Link from 'next/link';
import Card from './Card'; // Assuming Card component is in the same directory
import Badge from './Badge'; // Assuming Badge component is in the same directory

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  demoLink?: string;
  repoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, demoLink, repoLink }) => {
  return (
    <Card className="mb-6">
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <Badge key={index}>{tech}</Badge>
        ))}
      </div>
      <div className="flex gap-4">
        {demoLink && (
          <Link href={demoLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Live Demo
          </Link>
        )}
        {repoLink && (
          <Link href={repoLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Repository
          </Link>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
