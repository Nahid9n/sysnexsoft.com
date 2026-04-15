import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Support from "@/components/Support";
import Team from "@/components/Team";
import Project from "@/components/Project";
import Feature from "@/components/Feature";
import Support2 from "@/components/Support2";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
export const metadata = {
    title: "SYSNEX - Software & IT Solutions",
    description: "SYSNEX - Software & IT Solutions",
};

export default function Page() {
    return (
        <div className="main-wrapper">
            <Hero />
            <About />
            <Service />
            <Support />
            <Team />
            <Project />
            <Feature />
            <Support2 />
            <Testimonial />
            <Faq />
        </div>
);

}