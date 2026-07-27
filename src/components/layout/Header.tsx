import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-slate-900">
          JUNGHEEYOUNG
        </Link>

        <nav className="flex gap-6 text-sm text-slate-600">
          <a href="/#about">About</a>
          <a href="/#career">Career</a>
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
