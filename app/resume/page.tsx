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
          <ExperienceCard 
            company="Fritz Consulting LLC"
            title="IT Consultant / Marketing Technologist / Web Developer"
            dateRange="2024 - Present"
            responsibilities={[
            "After implementing an ERP software solution, the monthly throughput of my client's business increased 400%.",
            "Using Cloudways' cloud service and Digital Ocean, I developed and deployed WordPress and Django websites for clients.",
            "Working with clients to build websites, optimize systems, and integrate manual processes with software.",
            "Creating WordPress websites, optimizing for SEO, implementing e-commerce, and conducting maintenance.",
            "Set up on-site IT infrastructure for local small businesses, including Wi-Fi, Ethernet connections, and security systems",
            "Created SOPs for clients to help standardize and optimize IT and marketing processes.",
            "Managing all aspects of a small business, including technology implementations, sales, marketing, and customer relations."
            ]}>
          </ExperienceCard>
          <ExperienceCard 
            company="Nine Line Apparel"
            title="Software Developer"
            dateRange="2022 - 2024"
            responsibilities={[
              "Given a business objective, gathered stakeholder requirements and key features needed.",
              "Using stakeholder requirements, designed, prototyped, and deployed internal web applications",
              "Used GitHub, Git, Docker, and webhooks with Docker Hub in order to implement CI/CD",
              "Acted as the bridge between the C-Suite and the IT department.",
              "Used Python to automate repetitive Google Sheet data entry and actions.",
              "Designed and developed internal web applications using Python, Django, HTML, CSS, and JavaScript.",
              "Created custom scripts and themes for Shopify.",
              "Automated repetitive business activities using Google Sheets API. Pulled data from SAP, cleaned and performed the business action using Python, and filled the Google Sheets via API calls."
            ]}>
          </ExperienceCard>
          <ExperienceCard 
            company="Gulfstream Aerospace"
            title="IT Risk Management Analyst Intern"
            dateRange="2022"
            responsibilities={[
              "Executed daily cybersecurity and risk management tasks, including vulnerability scanning and compliance assessments.",
              "Implemented remediation projects to mitigate identified risks and analyzed data to track risk reduction over time.",
              "Ensured company-wide compliance readiness for key regulatory frameworks, including GDPR and SOC.",
              "Used Power BI for in-depth data analysis and presented findings on the company's cybersecurity risk posture to stakeholders.",
              "Monitored network security using enterprise network security software and ensured readiness for upcoming cybersecurity and SOC audits."
            ]}>
          </ExperienceCard>
          <ExperienceCard 
            company="Special Operations"
            title="Team Leader / IT Specialist"
            dateRange="2015 - 2022"
            responsibilities={[
              "Used scripts to automate Linux tasks, downloaded and updated packages in Ubuntu, installed drivers, and operated a computer solely using the command line interface.",
              "Worked in Linux environments such as Ubuntu, and Debian to support the company objectives.",
              "Held a security clearance for over seven years.",
              "Responsible for over $300,000 worth of equipment. Effectively inventoried and maintained equipment for over five years.",
              "Responsible for understanding all forms of communication, for solutions such as radio frequency.",
              "Given the desired outcome, I developed a plan of action, presented it to superior officers, and served as the driving force."
            ]}>
          </ExperienceCard>
        </Section>
        <Section id="Education" title="Education">
          <ExperienceCard 
            company="Western Governors University"
            title="Bachelor of Science in Information Systems and Operations Management"
            dateRange="2022 - present"
            responsibilities={[
              "Data Management Systems, Systems Analysis and Design, Database Management Systems, Business Programming", 
              "Marketing, Operations Management, Project Management, Supply Chain Management", 
              "Business Analytics, Business Decisions and Statistics, IT Fundamentals for Business Professionals"
            ]}>
          </ExperienceCard>
          <ExperienceCard 
            company="Kirkwood Community College"
            title="Associate of Science in Software Development"
            dateRange="2013 - 2015"
            responsibilities={[
              "Coursework in software development, IT, and computer science",
              "Programming languages: Java, C#, JavaScript",
              "Web technologies: CSS",
              "Database: SQL",
              "System tools: UML, PowerShell, Linux"
            ]}>
          </ExperienceCard>
        </Section>
      </Container>
    </main>
  );
}