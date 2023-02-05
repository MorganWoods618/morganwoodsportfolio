import "./header.css";

function Header() {
  return (
    <ul>
            <li>
        <a href="/contactme">Contact Me</a>
      </li>
      <li>
        <a href="/resume">Resume</a>
      </li>
      <li>
        <a href="/experience">Experience</a>
      </li>
      <li>
        <a href="/webdevelopment">About Me</a>
      </li>
      <li className="name">
        <a href="/">Morgan Woods</a>
      </li>
    </ul>
  );
}

export default Header;
