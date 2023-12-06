import "./Process.css";
import { processes } from "./data";

const Process = () => {
    return (
        <section id="process-section">
            <div className="container">
                <div className="process-section__content">
                    <h5 className="uppercase-text-1">OUR WORKING PROCESS</h5>

                    {processes.map((process, idx) => {
                        return (<div className="process-row" key={idx}>
                            <p className="num">{process.num}</p>
                            <h4>{process.heading}</h4>
                            <p className="text-lg">{process.describtion}</p>

                            <div className="process-link">
                                <div className="orange-line"></div>
                                <a
                                    className="uppercase-text-2"
                                    href={process.link.link}
                                >
                                    {process.link.text}
                                </a>
                            </div>
                        </div>);
                    })}
                </div>
            </div>
        </section>
    );
};

export { Process };
