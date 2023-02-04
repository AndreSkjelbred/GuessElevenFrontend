import { FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function HomeNavbar({ active }) {
  return (
    <div className='home-navbar'>
      <Link className='nav-link' href='/'>
        <div className='logo-box'>
          <div className='logo-main img'>
            <Image alt='main-logo' src='/assets/logo7.png' fill />
          </div>

          <h4 className={`logo-title ${active === "home" ? "active" : ""}`}>
            TWIRE
          </h4>
        </div>
      </Link>

      <div className='social-media-container'>
        <FaInstagram className='social-logo instagram hide-icon-title' />
        <FaTwitter className='social-logo twitter hide-icon-title' />
      </div>
      <Link className='how-to-play-title' href='/guess-eleven/how-to-play'>
        <p className={`navBarText ${active === "htp" ? "active" : ""}`}>
          How To Play
        </p>
      </Link>

      <form action='guess-eleven/how-to-play' className='search'>
        <input type='text' className=' search__input' placeholder='Search' />
        <button className='search__button'>
          <FaSearch className='hide-icon-title search-btn-icon' />
        </button>
      </form>
    </div>
  );
}

export default HomeNavbar;
