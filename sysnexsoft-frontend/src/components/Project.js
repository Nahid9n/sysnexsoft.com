"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Project() {
    return (
        <div className="it-company-project-area ptb-120 overflow-hidden">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-8">
                        <h2 className="it-company-title it-company-color fs-40 fw-600 flh-56 mb-0">Discover Our Latest
                            Projects
                            on
                            PowerPoint</h2>
                    </div>
                    <div className="col-xl-6 col-lg-4">
                        <div className="d-flex align-items-center justify-content-end gap-4">
                            <div className="it-slider-nav it-company-swiper-button-prev bg-black text-white d-flex align-items-center justify-content-center rounded-circle">
                                <i className="fas fa-arrow-left"></i>
                            </div>
                            <div className="it-slider-nav it-company-swiper-button-next bg-black text-white d-flex align-items-center justify-content-center rounded-circle">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={20}
                            loop={true}
                            navigation={{
                                nextEl: ".it-company-swiper-button-next",
                                prevEl: ".it-company-swiper-button-prev",
                            }}
                            pagination={{ clickable: true }}

                            breakpoints={{
                                320: { slidesPerView: 1 },
                                576: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                                1200: { slidesPerView: 4 },
                            }}
                        >
                            <SwiperSlide>
                                <div className="it-company-project-item position-relative rounded-10 overflow-hidden">
                                    <img src="assets/img/it_company/project.png" alt="" className="w-100 img-fluid"/>
                                    <div
                                        className="it-company-project-content w-100 h-100 d-flex flex-column justify-content-end gap-4 pl-40  position-absolute">
                                        <a href="#">
                                            <p className="it-company-color fs-14 fw-500 it-company-bg-six d-inline-block mb-0">
                                                App
                                                design
                                            </p>
                                        </a>
                                        <a href="#">
                                            <h5 className="text-white fs-20 fw-600 flh-28 pb-30 pr-40">Holisticly
                                                benchmark
                                                reliable
                                                sources
                                            </h5>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="it-company-project-item position-relative rounded-10 overflow-hidden">
                                    <img src="assets/img/it_company/project_2.png" alt=""
                                         className="w-100 img-fluid"/>
                                    <div
                                        className="it-company-project-content w-100 h-100 d-flex flex-column justify-content-end gap-4 pl-40   position-absolute">
                                        <a href="#">
                                            <p className="it-company-color fs-14 fw-500 it-company-bg-six d-inline-block mb-0">
                                                App
                                                design
                                            </p>
                                        </a>
                                        <a href="#">
                                            <h5 className="text-white fs-20 fw-600 flh-28 pb-30 pr-40">Holisticly
                                                benchmark
                                                reliable
                                                sources
                                            </h5>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="it-company-project-item position-relative rounded-10 overflow-hidden">
                                    <img src="assets/img/it_company/project_3.png" alt=""
                                         className="w-100 img-fluid"/>
                                    <div
                                        className="it-company-project-content w-100 h-100 d-flex flex-column justify-content-end gap-4 pl-40  position-absolute">
                                        <a href="#">
                                            <p className="it-company-color fs-14 fw-500 it-company-bg-six d-inline-block mb-0">
                                                App
                                                design
                                            </p>
                                        </a>
                                        <a href="#">
                                            <h5 className="text-white fs-20 fw-600 flh-28 pb-30 pr-40">Holisticly
                                                benchmark
                                                reliable
                                                sources
                                            </h5>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="it-company-project-item position-relative rounded-10 overflow-hidden">
                                    <img src="assets/img/it_company/project_4.png" alt=""
                                         className="w-100 img-fluid"/>
                                    <div
                                        className="it-company-project-content w-100 h-100 d-flex flex-column justify-content-end gap-4 pl-40  position-absolute">
                                        <a href="#">
                                            <p className="it-company-color fs-14 fw-500 it-company-bg-six d-inline-block mb-0">
                                                App
                                                design
                                            </p>
                                        </a>
                                        <a href="#">
                                            <h5 className="text-white fs-20 fw-600 flh-28 pb-30 pr-40">Holisticly
                                                benchmark
                                                reliable
                                                sources
                                            </h5>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="it-company-project-item position-relative rounded-10 overflow-hidden">
                                    <img src="assets/img/it_company/project_5.png" alt=""
                                         className="w-100 img-fluid"/>
                                    <div
                                        className="it-company-project-content w-100 h-100 d-flex flex-column justify-content-end gap-4 pl-40  position-absolute">
                                        <a href="#">
                                            <p className="it-company-color fs-14 fw-500 it-company-bg-six d-inline-block mb-0">
                                                App
                                                design
                                            </p>
                                        </a>
                                        <a href="#">
                                            <h5 className="text-white fs-20 fw-600 flh-28 pb-30 pr-40">Holisticly
                                                benchmark
                                                reliable
                                                sources
                                            </h5>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        <div className="it-company-slider__pagination mt-30">
                            <span></span><span></span><span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}