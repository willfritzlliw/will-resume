import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import Hero from '@/components/Hero';
import ExperienceCard from '@/components/ExperienceCard';
import Image from 'next/image';


export default function Resume() {
  return (
    <main className="bg-background text-foreground">
      <Container className="">
        <Section id="Bio" title="Bio">
          {/* Responsive personal profile */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Image container */}
            <div className="w-full md:w-1/3">
              <Image
              src="/images/will-fritz-headshot.jpg"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full mx-auto"
              priority />
            </div>
            {/* Content container */}
            <div className="w-full md:w-2/3">
              <p>Your bio content here...</p>
            </div>
          </div>
          
        </Section>
      </Container>
    </main>
  );
}