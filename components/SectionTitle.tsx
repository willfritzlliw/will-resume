import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: 'h2' | 'h3' | 'h4';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ id, as: Tag = 'h2', children, className }) => {
  return (
    <Tag id={id} className={`text-3xl font-bold text-foreground mb-6 ${className}`}>
      {children}
    </Tag>
  );
};

export default SectionTitle;
