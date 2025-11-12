import Link from 'next/link';
import Image from 'next/image';

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">Download My Resume</h1>
      <p className="text-lg mb-8 text-center">
        Click the button below to download my resume in PDF format.
      </p>
      <Link href="/William-Resume.pdf" download="William-Resume.pdf" className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg shadow-lg flex items-center space-x-2 transition duration-300 ease-in-out">
          <Image src="/file.svg" alt="Download Icon" width={24} height={24} />
          <span>Download Resume (PDF)</span>
      </Link>
    </div>
  );
}
