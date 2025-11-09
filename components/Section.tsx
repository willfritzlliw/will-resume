import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={`py-8 md:py-12 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
