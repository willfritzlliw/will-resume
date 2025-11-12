import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import Hero from '@/components/Hero';
import ExperienceCard from '@/components/ExperienceCard';
import Image from 'next/image';
import { experiences, education } from './data';


export default function Resume() {
  const skills = ['Full-Stack','Python','Django','Flask','FastAPI','SQL','Pandas','APIs','Git', 'Docker',
    'Automation','React','TypeScript','JavaScript','HTML5','CSS3','Cloud',
    'Node.js','CI/CD','Agile','REST','Microservices', 'PowerBI','PostgreSQL',
    'Linux','Version Control','Problem-Solving','Communication','Teamwork','Adaptability'];

  return (
    <main className="bg-background text-foreground">
      <Container className="max-w-7xl mx-auto">
        <Section id="Bio" title="Bio">
          {/* Responsive personal profile */}
          <Card className="flex flex-col md:flex-row gap-8 items-center">
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
              <p className="text-lg text-foreground leading-relaxed">
                  <span className="font-semibold  text-glow">Full-stack developer</span> and software systems architect with 
                  <span className="font-semibold  text-glow"> 6+ years of experience</span> bridging technical solutions with business outcomes. 
                  Proven track record of delivering 
                  <span className="font-semibold  text-glow"> web applications, automations</span>, implementing 
                  <span className="font-semibold  text-glow"> business applications</span>, working with 
                  <span className="font-semibold  text-glow"> cloud infrastructure</span>, and making 
                  non-biased business-objective based technology stack decisions. drove a 
                  <span className="font-semibold  text-glow"> 400% production output increase</span> through strategic ERP implementation. 
                  Combines software development expertise across  
                    <span className="font-semibold text-glow"> Python, Django, Flask, FastAPI, SQL, Pandas, APIs, Git, Docker, Automation, React, Next.js, 
                    TypeScript, JavaScript, HTML5, CSS3, Cloud (AWS, Digital Ocean), Node.js
                    </span>, and modern IT technologies with understanding of 
                  <span className="font-semibold  "> Cloud deployment</span>, 
                  <span className="font-semibold  text-glow"> CI/CD pipelines</span>, and DevOps practices. 
                  Veteran with security clearance experience, specializing in transforming complex requirements into 
                  <span className="font-semibold  text-glow"> scalable solutions that drive ROI and business objectives</span>.
              </p>
            </div>
          </Card>
          
          <Card className='py-5 mt-10'>
            <h3 className="text-2xl font-bold mb-4 text-center">Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill, index) => (
              <Badge key={index} className="">
                {skill}
              </Badge>
              ))}
            </div>
          </Card>
        </Section>

        <Section id="Experience" title="Experience">
                {experiences.map((exp, idx) => (
                  <ExperienceCard
                    key={`${exp.company}-${idx}`}
                    company={exp.company}
                    title={exp.title}
                    dateRange={exp.dateRange}
                    responsibilities={exp.responsibilities}
                  />
                ))}
        </Section>

        <Section id="Education" title="Education">
                {education.map((edu, idx) => (
                  <ExperienceCard
                    key={`${edu.company}-${idx}`}
                    company={edu.company}
                    title={edu.title}
                    dateRange={edu.dateRange}
                    responsibilities={edu.responsibilities}
                  />
                ))}
        </Section>
      </Container>
    </main>
  );
}