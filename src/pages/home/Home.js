import { Header } from "./sections/header/Header";
import { Hero } from "./sections/hero-section/Hero";
import { Features } from "./sections/features/Features";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Features/>
        </>
    );
};

export { Home };
