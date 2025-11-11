import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className, id, title }) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-md font-thin bg-accent text-foreground hover:shadow-lg transition-all duration-300 hover:scale-105 ${className}`}
    id={`badge-${id}`}
    title={title}>
      {children}
    </span>
  );
};

export default Badge;
