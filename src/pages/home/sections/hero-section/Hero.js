import "./Hero.css";
import chair from "../../../../assets/hero.png"
import circle from "../../../../assets/shape-1.png"
const Hero = () => {
    return (
        <section id="hero-section">
            <div className="container">
                <div className="hero-section__content">
                    <div className="hero-section__left">
                        <img
                            className="chair"
                            src={chair}
                            alt="Chair"
                        />
                        <img
                            className="circle"
                            src={circle}
                            alt="Circle shape"
                        />
                    </div>

                    <div className="hero-section__right">
                        <span className="uppercase-text-2 text-top">
                            QUALITY DESIGN FOR ALL
                        </span>
                        <h1 className="heading-1">
                            Bring back the classic look by using Whiter. Easy
                            home delivery!
                        </h1>
                        <p className="text-md">
                            Rediscover the timeless allure of the past as Whiter <br/>
                            effortlessly revives the beloved vintage aesthetic.
                        </p>
                        <div className="orange-line"></div>
                        <span className="uppercase-text-2">
                            EXPLORE OUR PRODUCTS
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export {Hero}