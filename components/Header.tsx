import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary p-4 shadow-md">
    <nav className="relative">
      {/* hidden checkbox to control mobile menu via Tailwind peer utilities */}
      <input id="nav-toggle" type="checkbox" className="peer sr-only" />

      <div className="flex justify-between items-center px-5 text-white">
        <div className="text-xl font-bold hover:text-accent">
            Will&apos;s Portfolio
        </div>

        {/* mobile toggle */}
        <label
        htmlFor="nav-toggle"
        className="md:hidden p-2 rounded-md hover:bg-primary-hover cursor-pointer"
        aria-label="Toggle menu"
        aria-controls='nav-menu'
        >
        {/* hamburger */}
        <svg
          className="w-6 h-6 peer-checked:hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        {/* close icon */}
        <svg
          className="w-6 h-6 hidden peer-checked:block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </label>

        {/* desktop links */}
        <ul className="hidden md:flex gap-4">
        <li>
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
        </li>
        <li>
          <Link href="/resume" className="hover:text-accent">
            Resume
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-accent">
            Projects
          </Link>
        </li>
        </ul>
      </div>

      {/* mobile menu (visible when checkbox is checked) */}
      <div className="peer-checked:block md:hidden hidden px-5 pb-4">
        <ul className="flex flex-col gap-2 text-white">
        <li>
          <Link href="/" className="block w-full py-2 rounded hover:bg-white/5">
            Home
          </Link>
        </li>
        <li>
          <Link href="/resume" className="block w-full py-2 rounded hover:bg-white/5">
            Resume
          </Link>
        </li>
        <li>
          <Link href="/projects" className="block w-full py-2 rounded hover:bg-white/5">
            Projects
          </Link>
        </li>
        </ul>
      </div>
    </nav>
    </header>
  );
}