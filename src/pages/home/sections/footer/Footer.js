import "./Footer.css";
import logo from "../../../../assets/Whiter..png";
import { footerColumns } from "./data";

const Footer = () => {
    return (
        <footer id="footer">
            <div class="container">
                <div class="footer__content">
                    <div class="footer__brand footer-column">
                        <img src={logo} alt="Logo"/>
                        <p class="text-lg">
                            We make furniture with love and passions. No doubt,
                            really.
                        </p>
                        <p class="text-lg">© TuranTech Inc.</p>
                    </div>
                    {footerColumns.map((column, idx) => {
                        return (
                            <div
                                class="footer__contact footer-column"
                                key={idx}
                            >
                                <h4 class="footer__heading uppercase-text-2">
                                    {column.heading}
                                </h4>
                                <a href={column.link1.link} class="text-lg">
                                    {column.link1.text}
                                </a>
                                <a href={column.link2.link} class="text-lg">
                                    {column.link2.text}
                                </a>
                                <a href={column.link3.link} class="text-lg">
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
