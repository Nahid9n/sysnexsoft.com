"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonial() {
    return (
        <div className="it-company-testimonial-area it-company-bg-two ptb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h2 className="it-company-title it-company-color fs-40 fw-600 flh-56 mb-30">Our Client
                                Testimonials
                            </h2>
                        </div>
                        <Swiper modules={[Navigation, Pagination]} pagination={{ clickable: true }} /*navigation={true}*/ className={'sc-feedback-slider'} spaceBetween={30} slidesPerView={3} loop={true}>
                            <SwiperSlide>
                                <div className="sc-feedback-card bg-white rounded">
                                    <img src="/assets/img/it_company/testimonial.png" alt="" className="mb-4"/>
                                    <p className="clr-paragraph fs-16 fw-500 flh-24 mb-30">Synergistically
                                        integrate dynamic
                                        solutions
                                        vis maximizing ROI. Appropriately target leadership. Interactively
                                        orchestrate
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <img src="/assets/img/it_company/testimoniala.png" alt="not found"
                                             className="rounded-circle flex-shrink-0"/>
                                        <div className="ms-4">
                                            <h5 className="mb-1 it-company-color fs-16 fw-600">Logan jon
                                                deo</h5>
                                            <span className="text-dg-color fs-sm">Director at Webflow</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sc-feedback-card bg-white rounded">
                                    <img src="/assets/img/it_company/testimonial_2.png" alt="" className="mb-4"/>
                                    <p className="clr-paragraph fs-16 fw-500 flh-24 mb-30">Synergistically
                                        integrate dynamic
                                        solutions
                                        vis maximizing ROI. Appropriately target leadership. Interactively
                                        orchestrate
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <img src="/assets/img/it_company/testimoniala_2.png" alt="not found"
                                             className="rounded-circle flex-shrink-0"/>
                                        <div className="ms-4">
                                            <h5 className="mb-1 it-company-color fs-16 fw-600">Logan jon
                                                deo</h5>
                                            <span className="text-dg-color fs-sm">Director at Webflow</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sc-feedback-card bg-white rounded">
                                    <img src="/assets/img/it_company/testimonial_2.png" alt="" className="mb-4"/>
                                    <p className="clr-paragraph fs-16 fw-500 flh-24 mb-30">Synergistically
                                        integrate dynamic
                                        solutions
                                        vis maximizing ROI. Appropriately target leadership. Interactively
                                        orchestrate
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <img src="/assets/img/it_company/testimoniala_2.png" alt="not found"
                                             className="rounded-circle flex-shrink-0"/>
                                        <div className="ms-4">
                                            <h5 className="mb-1 it-company-color fs-16 fw-600">Logan jon
                                                deo</h5>
                                            <span className="text-dg-color fs-sm">Director at Webflow</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sc-feedback-card bg-white rounded">
                                    <img src="/assets/img/it_company/testimonial_2.png" alt="" className="mb-4"/>
                                    <p className="clr-paragraph fs-16 fw-500 flh-24 mb-30">Synergistically
                                        integrate dynamic
                                        solutions
                                        vis maximizing ROI. Appropriately target leadership. Interactively
                                        orchestrate
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <img src="/assets/img/it_company/testimoniala_2.png" alt="not found"
                                             className="rounded-circle flex-shrink-0"/>
                                        <div className="ms-4">
                                            <h5 className="mb-1 it-company-color fs-16 fw-600">Logan jon
                                                deo</h5>
                                            <span className="text-dg-color fs-sm">Director at Webflow</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="sc-feedback-card bg-white rounded">
                                    <img src="/assets/img/it_company/testimonial_2.png" alt="" className="mb-4"/>
                                    <p className="clr-paragraph fs-16 fw-500 flh-24 mb-30">Synergistically
                                        integrate dynamic
                                        solutions
                                        vis maximizing ROI. Appropriately target leadership. Interactively
                                        orchestrate
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <img src="/assets/img/it_company/testimoniala_2.png" alt="not found"
                                             className="rounded-circle flex-shrink-0"/>
                                        <div className="ms-4">
                                            <h5 className="mb-1 it-company-color fs-16 fw-600">Logan jon
                                                deo</h5>
                                            <span className="text-dg-color fs-sm">Director at Webflow</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        {/*<div className="sc-feedback-slider swiper mt-40">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="sc-feedback-card bg-white rounded">
                                        <img src="assets/img/it_company/testimonial.png" alt="" className="mb-4"/>
                                            <p className="clr-paragraph fs-16 fw-500 flh-24 mb-30">Synergistically
                                                integrate dynamic
                                                solutions
                                                vis maximizing ROI. Appropriately target leadership. Interactively
                                                orchestrate
                                            </p>
                                            <div className="d-flex align-items-center">
                                                <img src="assets/img/it_company/testimoniala.png" alt="not found"
                                                     className="rounded-circle flex-shrink-0"/>
                                                    <div className="ms-4">
                                                        <h5 className="mb-1 it-company-color fs-16 fw-600">Logan jon
                                                            deo</h5>
                                                        <span className="text-dg-color fs-sm">Director at Webflow</span>
                                                    </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="sc-feedback-card bg-white rounded">
                                        <img src="assets/img/it_company/testimonial_2.png" alt="" className="mb-4"/>
                                            <p className="clr-paragraph fs-16 fw-500 flh-24 mb-30">Synergistically
                                                integrate dynamic
                                                solutions
                                                vis maximizing ROI. Appropriately target leadership. Interactively
                                                orchestrate
                                            </p>
                                            <div className="d-flex align-items-center">
                                                <img src="assets/img/it_company/testimoniala_2.png" alt="not found"
                                                     className="rounded-circle flex-shrink-0"/>
                                                    <div className="ms-4">
                                                        <h5 className="mb-1 it-company-color fs-16 fw-600">Logan jon
                                                            deo</h5>
                                                        <span className="text-dg-color fs-sm">Director at Webflow</span>
                                                    </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="sc-feedback-card bg-white rounded">
                                        <img src="assets/img/it_company/testimonial_3.png" alt="" className="mb-4"/>
                                            <p className="clr-paragraph fs-16 fw-500 flh-24 mb-30">Synergistically
                                                integrate dynamic
                                                solutions
                                                vis maximizing ROI. Appropriately target leadership. Interactively
                                                orchestrate
                                            </p>
                                            <div className="d-flex align-items-center">
                                                <img src="assets/img/it_company/testimoniala_3.png" alt="not found"
                                                     className="rounded-circle flex-shrink-0"/>
                                                    <div className="ms-4">
                                                        <h5 className="mb-1 it-company-color fs-16 fw-600">Logan jon
                                                            deo</h5>
                                                        <span className="text-dg-color fs-sm">Director at Webflow</span>
                                                    </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="itc-testimonial-slide-dots d-flex align-items-center justify-content-center mt-40">
                                <span></span><span></span><span></span>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}