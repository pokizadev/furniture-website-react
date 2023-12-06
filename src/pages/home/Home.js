import { Header } from "./sections/header/Header";
import { Hero } from "./sections/hero-section/Hero";
import { Features } from "./sections/features/Features";
import { Designs } from "./sections/designs/Designs";
import { Process } from "./sections/process/Process";
import { About } from "./sections/about/About";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <Designs />
            <Process />
            <About />
        </>
    );
};

export { Home };
