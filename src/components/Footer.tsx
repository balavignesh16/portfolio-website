export function Footer() {
  return (
    <footer className="pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-12 text-zinc-400 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <a className="text-white hover:underline" href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        <p className="text-xs text-center">© {new Date().getFullYear()} Bala Vignesh R. All rights reserved.</p>
      </div>
    </footer>
  );
}
