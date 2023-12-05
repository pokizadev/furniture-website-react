import "./Features.css";

import { features } from "./data";

const Features = () => {
    return (
        <section id="features-section">
            <div className="container">
                <div className="features-section__content">
                    {features.map((feature, idx) => {
                        return (
                            <div className="feature" key={idx}>
                                <div className="feature-icon">
                                    <div className="ellipse shape-1">
                                        <img
                                            className="icon"
                                            src={feature.img}
                                            alt="heart shape"
                                        />
                                    </div>
                                </div>
                                <div className="feature-text">
                                    <h5 className="heading-5">{feature.heading}</h5>
                                    <p className="text-md">{feature.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export { Features };
