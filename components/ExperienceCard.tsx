import React from 'react';
import Card from './Card'; // Assuming Card component is in the same directory

interface ExperienceCardProps {
  company: string;
  title: string;
  dateRange: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, title, dateRange, responsibilities }) => {
  return (
    <Card className="mb-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-lg text-foreground">{company}</p>
      <p className="text-sm font-thin italic text-foreground mb-4">{dateRange}</p>
      <ul className="list-disc list-inside space-y-2 text-foreground">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </Card>
  );
};

export default ExperienceCard;
