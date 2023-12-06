import "./About.css";
import enjoying from "../../../../assets/wife-husband.jpeg";
import greenShape from "../../../../assets/shape-2.svg"

const About = () => {
    return (
        <section id="about-section">
            <div className="container">
                <div className="about-section__content">
                    <div className="about-section__left">
                        <div className="img-box">
                            <img
                                className="about-section__img"
                                src={enjoying}
                                alt="Wife and husband"
                            />
                            <img
                                className="about-section__shape"
                                src={greenShape}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="about-section__right">
                        <div className="about-section__right_container">
                            <h3 className="heading-3">
                                Spend your happy time with full comfort.
                            </h3>
                            <p className="text-md">
                                Embrace blissful comfort: Revel in delightful
                                moments, surrounded by unmatched tranquility and
                                exquisite relaxation.
                            </p>
                            <div className="orange-line"></div>
                            <span className="uppercase-text-2">
                                EXPLORE OUR PRODUCTS
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export { About}