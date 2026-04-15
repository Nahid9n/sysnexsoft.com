"use client";

import Testimonial from "@/components/Testimonial";
import ServiceCard from "@/components/ServiceCard";

const post = {
    slug: "product-value-concept",
    title: "Do you really understand the concept...",
    description: "Society is fragmenting...",
    category: "Design",
    author: "Jane Martin",
    date: "April 24, 2021",
};

export default function Service() {
    return (
        <>
            <section className="page-header position-relative overflow-hidden ptb-120 bg-dark" style={{ background: "url('assets/img/page-header-bg.svg')no-repeat bottom left" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <h1 className="display-5 fw-bold">We are Development Experts</h1>
                            <p className="lead">Seamlessly actualize client-based users after out-of-the-box value.
                                Globally embrace
                                strategic data through frictionless expertise.</p>
                        </div>
                    </div>
                    <div
                        className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
                </div>
            </section>
            <section className="feature-section ptb-120 bg-light-subtle">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="feature-grid">
                                <ServiceCard post={post} />
                                <ServiceCard post={post} />
                                <ServiceCard post={post} />
                                <ServiceCard post={post} />
                                <ServiceCard post={post} />
                                <ServiceCard post={post} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonial />
            <section className="cta-subscribe bg-dark ptb-120 position-relative overflow-hidden">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="subscribe-info-wrap text-center position-relative z-2">
                                <div className="section-heading">
                                    <h4 className="h5 text-warning">Let's Try! Get Free Support</h4>
                                    <h2>Start Your 14-Day Free Trial</h2>
                                    <p>We can help you to create your dream website for better business revenue.</p>
                                </div>
                                <div className="form-block-banner mw-60 m-auto mt-5">
                                    <a href="contact-us.html" className="btn btn-primary">Contact with Us</a>
                                    <a href="http://www.youtube.com/watch?v=hAP2QF--2Dg"
                                       className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn ms-lg-3 ms-md-3 mt-3 mt-lg-0">
                                        <i
                                            className="fas fa-play"></i> Watch Demo </a>
                                </div>
                                <ul className="nav justify-content-center subscribe-feature-list mt-4">
                                    <li className="nav-item">
                                        <span><i className="far fa-check-circle text-primary me-2"></i>Free 14-day trial</span>
                                    </li>
                                    <li className="nav-item">
                                    <span><i
                                        className="far fa-check-circle text-primary me-2"></i>No credit card required</span>
                                    </li>
                                    <li className="nav-item">
                                        <span><i
                                            className="far fa-check-circle text-primary me-2"></i>Support 24/7</span>
                                    </li>
                                    <li className="nav-item">
                                        <span><i
                                            className="far fa-check-circle text-primary me-2"></i>Cancel anytime</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
                    <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div>
                </div>
            </section>
        </>
    );
}