import "./headerArt.css";

function HeaderArt() {
  return (
    <ul>
            <li>
        <a href="/artportfoliocontact">Contact Me</a>
      </li>
      <li>
        <a href="/resume">Resume</a>
      </li>
      <li>
        <a href="/experience">Experience</a>
      </li>
      <li>
        <a href="/artportfolio">About Me</a>
      </li>
      <li className="name">
        <a href="/">Morgan Woods</a>
      </li>
    </ul>
  );
}

export default HeaderArt;
