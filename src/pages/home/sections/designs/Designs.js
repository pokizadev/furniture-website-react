import "./Designs.css";
import arrowRight from "../../../../assets/arrow-right.png";
import arrowLeft from "../../../../assets/arrow-left.png";
import lightChair from "../../../../assets/chair-light.jpeg";
import darkChair from "../../../../assets/chair-dark.jpeg";
import couch from "../../../../assets/couch.jpeg"

const Designs = () => {
    return (
        <section id="designs-section">
            <div className="container">
                <div className="designs-section__content">
                    <h3 className="heading-3">Explore our exclusive design.</h3>
                    <div className="arrows">
                        <img
                            className="arrow-left"
                            src={arrowLeft}
                            alt="arrow left"
                        />
                        <img
                            className="arrow-right"
                            src={arrowRight}
                            alt="arrow right"
                        />
                    </div>

                    <div className="design-card">
                        <img
                            className="design-img chair-light"
                            src={lightChair}
                            alt="Chair Light Color"
                        />
                    </div>

                    <div className="design-card">
                        <img
                            className="design-img chair-dark"
                            src={darkChair}
                            alt="Chair Dark Color"
                        />
                    </div>

                    <div className="design-card" id="design-last-card">
                        <img
                            className="design-img couch"
                            src={couch}
                            alt="Couch"
                        />
                        <div className="design-inner-card">
                            <span>$271</span>
                            <p id="inner-card-text">White Phonix</p>
                            <img src={arrowRight} alt="Arrow Right" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {Designs}