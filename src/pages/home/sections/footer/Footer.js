import "./Footer.css";
import logo from "../../../../assets/Whiter..png";
import { footerColumns } from "./data";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__brand footer-column">
                        <img src={logo} alt="Logo"/>
                        <p className="text-lg">
                            We make furniture with love and passions. No doubt,
                            really.
                        </p>
                        <p className="text-lg">© TuranTech Inc.</p>
                    </div>
                    {footerColumns.map((column, idx) => {
                        return (
                            <div
                                className="footer__contact footer-column"
                                key={idx}
                            >
                                <h4 className="footer__heading uppercase-text-2">
                                    {column.heading}
                                </h4>
                                <a href={column.link1.link} className="text-lg">
                                    {column.link1.text}
                                </a>
                                <a href={column.link2.link} className="text-lg">
                                    {column.link2.text}
                                </a>
                                <a href={column.link3.link} className="text-lg">
                                    {column.link3.text}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export { Footer };
