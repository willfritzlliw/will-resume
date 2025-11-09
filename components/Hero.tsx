import React from 'react';
import Link from 'next/link';
import Button from './Button';

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  tagline,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
}) => {
  return (
    <section className="text-center py-16 md:py-24 bg-secondary">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        {name}
      </h1>
      <h2 className="text-2xl md:text-3xl text-primary mb-4">{title}</h2>
      <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto">
        {tagline}
      </p>
      <div className="flex justify-center gap-4">
        <Button href={primaryCtaLink} size="large">
          {primaryCtaText}
        </Button>
        {secondaryCtaText && secondaryCtaLink && (
          <Button href={secondaryCtaLink} variant="outline" size="large">
            {secondaryCtaText}
          </Button>
        )}
      </div>
    </section>
  );
};

export default Hero;
