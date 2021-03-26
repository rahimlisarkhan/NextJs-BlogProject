import Link from "next/link";
import { SiNextDotJs } from "react-icons/si";

let Header = () => {
  return (
    <header>
        <h1>
          <SiNextDotJs />
          <Link href="/">Native</Link>
        </h1>
      

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/clients">Clients</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
