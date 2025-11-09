
/**
 * Footer Component
 *
 * This component renders the footer for the application. It provides a consistent
 * look and feel across all pages.
 *
 * @returns {JSX.Element} The rendered footer component.
 */

export default function Footer() {
  return (
    // The footer element is styled with a primary background color, padding, and a top margin.
    // The `mt-auto` class ensures that the footer sticks to the bottom of the page in cases where the content is not long enough to fill the viewport.
    <footer className="bg-primary p-4 mt-8 shadow-md mt-auto">
      <p className="text-center">&copy; 2025 William. All rights reserved.</p>
    </footer>
  );
}