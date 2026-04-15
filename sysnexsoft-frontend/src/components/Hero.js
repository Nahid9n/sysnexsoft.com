"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
    return (
        <div className="it-company-hero-area it-company-bg-two pt-160 pb-40 position-relative z-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="it-company-hero-title it-company-color fs-64 mb-30">
                            <span className="fs-40 fw-600">Solve Your Business</span> <br/>
                            Challenges With IT
                        </h1>
                        <p className="clr-paragraph fs-18 fw-500 flh-28 fch-50 mb-40">Be available right where your customers need it and give your team the automatically.</p>
                        <a href="#" className="btn btn-danger it-company-bg ca-two-bg-hover-two rounded-5 text-white fs-16">Get
                            Started</a>
                    </div>
                    <div className="col-lg-6">
                        <img src="assets/img/it_company/hero.png" alt="" className="it-company-img img-fluid"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper
                            className={'digi-logo-slider'}
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            loop={true}
                            breakpoints={{
                                320: { slidesPerView: 2 },
                                576: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                992: { slidesPerView: 4 },
                                1200: { slidesPerView: 6 },
                            }}
                        >
                            <SwiperSlide>
                                <div className="single-logo text-center p-3 risk-btn-hover">
                                    <img src="/assets/img/creative-agency-2/logo.png" className="img-fluid"
                                         height="30" alt="logo"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-logo text-center p-3 risk-btn-hover">
                                    <img src="/assets/img/creative-agency-2/logo_2.png" className="img-fluid"
                                         alt="logo" height="30"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-logo text-center p-3 risk-btn-hover">
                                    <img src="/assets/img/creative-agency-2/logo_3.png" className="img-fluid"
                                         alt="logo" height="30"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-logo text-center p-3 risk-btn-hover">
                                    <img src="/assets/img/creative-agency-2/logo_4.png" className="img-fluid"
                                         alt="logo" height="30"/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <img src="/assets/img/it_company/shape/hero.png" alt="" className="s-one position-absolute"/>
            <img src="/assets/img/it_company/shape/hero_2.png" alt="" className="s-two position-absolute"/>
        </div>
    );
}