import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className, id, title }) => {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-primary ${className}`}
    id={`badge-${id}`}
    title={title}>
      {children}
    </span>
  );
};

export default Badge;
