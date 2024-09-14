const Navbar = () => {

  return (
    <nav className="navbar">
      <NavbarBox/>
    </nav>
  );
};

export default Navbar;


const NavbarBox = () => {
  const handleButtonClick = () => {
    // Add your logic here. For example, navigating to the app section:
    window.location.href = '#app';
  };
  return (
    <div className="navbar__box">
        <Logo/>
        <NavLinks/>
        <button className="btn" onClick={handleButtonClick}>DOWNLOAD THE APP</button>
      </div>
  )
}

const Logo = () => {
  return (
      <div className="logo">
          <a href="#">
            <img src="/images/logo/logo.webp" alt="Fasco Logo" />
          </a>
      </div>
  )
}

const NavLinks = () => {
  return (
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About us</a></li>
        <li><a href="#app">Our App</a></li>
        <li><a href="#contact">Contact us</a></li>
      </ul>
  )
}


