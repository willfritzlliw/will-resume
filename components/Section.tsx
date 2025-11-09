import React from 'react';
import SectionTitle from './SectionTitle';

interface SectionProps {
  id?: string;
  title?: React.ReactNode; // string or <SectionTitle>
  className?: string;
  children?: React.ReactNode;
  describedBy?: string;
}

export default function Section({ id, title, describedBy, children, className }: SectionProps) {
  const titleId = title && id ? `${title}-${id}` : undefined;
  
  return (
    <section
      id={id}
      aria-describedby={describedBy}
      aria-labelledby={title ? (id ? `${title}-${id}` : undefined) : undefined}
      className={`my-12 px-4 md:px-8 lg:px-16 ${className}`}
    >
      {title ? (
        // allow title either as string or already as a <SectionTitle />
        typeof title === 'string' ? (
          <SectionTitle id={titleId}>{title}</SectionTitle>
        ) : (
          // if caller passed a SectionTitle already, clone to ensure id
          React.isValidElement(title) ? React.cloneElement(title, ) : null
        )
      ) : null}

      {children}
    </section>
  );
}
