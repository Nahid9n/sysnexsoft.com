import Team from "@/components/Team";
import TeamCard from "@/components/TeamCard";
import Testimonial from "@/components/Testimonial";

export const metadata = {
    title: "About Us - SYSNEX - Software & IT Solutions",
    description: "Welcome",
};

export default function AboutUs() {
    return (
        <>
            <section className="about-header-section ptb-120 position-relative overflow-hidden bg-dark" style={{ background: "url('/assets/img/page-header-bg.svg') no-repeat center right" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading-wrap d-flex justify-content-between z-5 position-relative">
                                <div className="about-content-left">
                                    <div className="about-info mb-5">
                                        <h1 className="fw-bold display-5">Grow your Business & Customer Satisfaction with
                                            Quiety</h1>
                                        <p className="lead">Dynamically disintermediate technically sound technologies with
                                            compelling quality vectors error-free communities. </p>
                                        <a href="career.html" className="btn btn-primary mt-4 me-3">Open Positions</a>
                                        <a href="#our-team" className="btn btn-soft-primary mt-4">Meet Our Team</a>
                                    </div>
                                    <img src="assets/img/about-img-1.jpg" alt="about"
                                         className="img-fluid about-img-first mt-5 rounded-custom shadow"/>
                                </div>
                                <div className="about-content-right">
                                    <img src="assets/img/about-img-2.jpg" alt="about"
                                         className="img-fluid mb-5 rounded-custom shadow"/>
                                    <img src="assets/img/about-img-3.jpg" alt="about"
                                         className="rounded-custom about-img-last shadow"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5">
                </div>
            </section>
            <section className="our-story-section pt-60 pb-120" style={{ background : "url('assets/img/shape/dot-dot-wave-shape.svg')no-repeat left bottom" }}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5 col-md-12 order-lg-1">
                            <div className="section-heading sticky-sidebar">
                                <h4 className="h5 text-primary">Our Story</h4>
                                <h2>A Great Story Starts with a Friendly Team</h2>
                                <p>Globally e-enable principle-centered e-business before dynamic quality vectors
                                    cross-media
                                    materials before proactive outsourcing leverage other's vertical technology
                                    leadership. </p>
                                <div className="mt-4">
                                    <h6 className="mb-3">We Are Awarded By-</h6>
                                    <img src="assets/img/awards-01.svg" alt="awards" className="me-4 img-fluid"/>
                                        <img src="assets/img/awards-02.svg" alt="awards" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-lg-0">
                            <div className="story-grid-wrapper position-relative">
                                {/*<!--animated shape start-->*/}
                                <ul className="position-absolute animate-element parallax-element shape-service d-none d-lg-block">
                                    <li className="layer" data-depth="0.02">
                                        <img src="assets/img/color-shape/image-2.svg" alt="shape"
                                             className="img-fluid position-absolute color-shape-2 z-5"/>
                                    </li>
                                    <li className="layer" data-depth="0.03">
                                        <img src="assets/img/color-shape/feature-3.svg" alt="shape"
                                             className="img-fluid position-absolute color-shape-3"/>
                                    </li>
                                </ul>
                                {/*<!--animated shape end-->*/}
                                <div className="story-grid rounded-custom bg-dark overflow-hidden position-relative">
                                    <div className="story-item bg-light-subtle border">
                                        <h3 className="display-5 fw-bold mb-1 text-success">550K+</h3>
                                        <h6 className="mb-0">Active Users</h6>
                                    </div>
                                    <div className="story-item bg-white border">
                                        <h3 className="display-5 fw-bold mb-1 text-primary">250+</h3>
                                        <h6 className="mb-0">Team Members</h6>
                                    </div>
                                    <div className="story-item bg-white border">
                                        <h3 className="display-5 fw-bold mb-1 text-dark">$20M+</h3>
                                        <h6 className="mb-0">Revenue Per/Year</h6>
                                    </div>
                                    <div className="story-item bg-light-subtle border">
                                        <h3 className="display-5 fw-bold mb-1 text-warning">8 Years</h3>
                                        <h6 className="mb-0">In Business</h6>
                                    </div>
                                    <div className="story-item bg-light-subtle border">
                                        <h3 className="display-5 fw-bold mb-1 text-danger">425+</h3>
                                        <h6 className="mb-0">Clients Worldwide</h6>
                                    </div>
                                    <div className="story-item bg-white border">
                                        <h3 className="display-5 fw-bold mb-1 text-primary">855+</h3>
                                        <h6 className="mb-0">Projects Completed</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="our-team" className="team-section ptb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="section-heading text-center">
                                <h5 className="h6 text-primary">Our Team</h5>
                                <h2>The People Behind Quiety</h2>
                                <p>Intrinsicly strategize cutting-edge before interoperable applications incubate
                                    extensive
                                    expertise through integrated intellectual capital. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <TeamCard />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <TeamCard />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <TeamCard />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <TeamCard />
                        </div>

                    </div>
                </div>
            </section>
            <Testimonial />
        </>

    );
}