import "./Testimonials.css"

import testimonial from "../../../../assets/lady-drinking-coffee.jpeg";
import playIcon from "../../../../assets/play-icon.png"

const Testimonials = () => {
    return (
        <section id="testimonials-section">
            <div className="container">
                <div className="testimonials-section__content">
                    <div className="testimonials-section__left">
                        <div className="left-content">
                            <h3 className="heading-3">
                                “It was super easy to share my unique concept. I
                                got exactly what I ordered. Great service!”
                            </h3>
                            <div className="white-line"></div>
                            <span className="testimonials-name">Jenny Wilson</span>
                            <p className="text-md">St. Celina, Delaware</p>
                        </div>
                    </div>

                    <div className="testimonials-section__right">
                        <div className="testimonials-img-box">
                            <img
                                className="testimonials-img"
                                src={testimonial}
                                alt="Jenny Wilson drinking coffee"
                            />
                            <button className="play-btn">
                                <img
                                    className="play-icon"
                                    src={playIcon}
                                    alt="Play icon"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export {Testimonials}
