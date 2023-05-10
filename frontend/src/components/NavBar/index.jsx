import "./index.css";

const darkTheme = "dark-theme";
const iconTheme = "uil-sun";
const navItems = [
  { text: "Home", icon: "estate" },
  { text: "Sobre", icon: "user" },
  { text: "Habilidades", icon: "book-alt" },
  { text: "Qualificações", icon: "laptop" },
  { text: "Projetos", icon: "scenery" },
];

function NavBar() {
  const openMenu = () => {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu) {
      navMenu.classList.add("show-menu");
    }
  };

  const closeMenu = () => {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu) {
      navMenu.classList.remove("show-menu");
    }
  };

  const changeTheme = () => {
    const themeButton = document.getElementById("theme-button");

    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  };

  const getCurrentTheme = () => {
    return document.body.classList.contains(darkTheme) ? "dark" : "light";
  };
  const getCurrentIcon = () => {
    const themeButton = document.getElementById("theme-button");

    return themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" aria-label="Read to start page" className="nav__logo">
          Mauricio
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            {navItems.map((item) => (
              <li className="nav__item" key={item.text} onClick={closeMenu}>
                <a
                  href={`#${item.text.toLowerCase()}`}
                  aria-label="Nav link in mobile screen"
                  className="nav__link"
                >
                  <i className={`uil uil-${item.icon} nav__icon`}></i>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <i
            className="uil uil-times nav__close"
            id="nav-close"
            onClick={closeMenu}
          ></i>
        </div>

        <div className="nav__btns">
          <i
            className="uil uil-moon change-theme"
            id="theme-button"
            onClick={changeTheme}
          ></i>

          <div className="nav__toggle" id="nav-toggle" onClick={openMenu}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
