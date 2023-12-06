import { Header } from "./sections/header/Header";
import { Hero } from "./sections/hero-section/Hero";
import { Features } from "./sections/features/Features";
import { Designs } from "./sections/designs/Designs";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Features/>
            <Designs/>
        </>
    );
};

export { Home };
