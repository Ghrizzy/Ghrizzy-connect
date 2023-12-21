import { AiOutlineMenu } from "react-icons/ai";
import { MdCancelPresentation } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import Logo1 from "../Logo/Black & White Minimalist Business Logo.png";
import "./Header.css";
import { useState } from "react";
const Home = () => {
  const [Show, setShow] = useState(false);

  const Showlink = () => {
    setShow(true);
  };
  const Hidelink = () => {
    setShow(false);
  };

  return (
    <div>
      <nav className="Logo-div">
        <img src={Logo1} className="logo" alt="Ghrizzy logo" />
        <div>
          <input type="text" placeholder="Find an Event" />
          <HiOutlineSearch className="search" />
        </div>
        <div>
          {Show ? "" : <AiOutlineMenu className="menu" onClick={Showlink} />}
          {Show && <MdCancelPresentation className="menu" onClick={Hidelink} />}
        </div>

        {Show && (
          <ul className="nav-links">
            <li>
              <a href="">Find Event</a>
            </li>
            <li>
              <a href="">Create Event</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">Sign Up</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        )}
      </nav>
      <nav className="desktop-Logo-div">
        <img src={Logo1} className="logo" alt="Ghrizzy logo" />
        <div>
          <input type="text" placeholder="Find an Event" />
          <HiOutlineSearch className="search" />
        </div>

        <ul>
          <li>
            <a href="">Find Event</a>
          </li>
          <li>
            <a href="">Create Event</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
          <li>
            <a href="">Sign Up</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
