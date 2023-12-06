import "./Subscribe.css";

import lockIcon from "../../../../assets/lock.svg"

const Subscribe = () => {
    return (
        <section id="subscribe-section">
            <div className="container">
                <div className="subscribe-section__content">
                    <h3 className="heading-3">
                        Subscribe to our <br />newsletter to get updated
                    </h3>
                    <p className="text-lg">
                        Get our latest update on your inbox. With lots of unique
                        blocks, you can easily build a page without coding.
                        Build your next consultancy website within few minutes.
                    </p>
                    <input
                        className="email-input"
                        type="email"
                        placeholder="Enter email address"
                    />
                    <input
                        className="subscribe-input"
                        type="submit"
                        value="Subscribe"
                    />

                    <div className="promise-container">
                        <img
                            className="lock-img"
                            src={lockIcon}
                            alt="lock icon"
                        />
                        <p className="text-md">
                            We don't spam at all, our promise!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {Subscribe}