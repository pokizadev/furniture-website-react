import "./Header.css";
import logo from "../../../../assets/Whiter..png";
import mobileNav from "../../../../assets/menu 1.svg";

const links = [
    { text: "Products", link: "http://google.com" },
    { text: "Rooms", link: "http://google.com" },
    { text: "Inspirations", link: "http://google.com" },
    { text: "Support", link: "http://google.com" }
];

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <img src={logo} alt="" className="logo" />
                <nav className="navigation">
                    <ul className="navigation__links">
                        {links.map((link, idx) => {
                            return (
                                <li key={idx}>
                                    <a href={link.link}>{link.text}</a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="signIn_wrapper">
                        <a className="signIn" href="www.facebook.com">
                            Sign in
                        </a>
                    </div>
                </nav>
                <img
                    src={mobileNav}
                    alt="mobile-navigation"
                    id="mobile-nav-icon"
                />
                <nav className="mobile-nav">
                    <span className="close-icon">&times;</span>
                    <ul className="mobile-nav_link">
                        {links.map((link, idx) => {
                            return (
                                <li key={idx}>
                                    <a href={link.link}>link.text</a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export { Header };