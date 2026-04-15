"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <header className="main-header header-fixed-two w-100 z-10">
            <nav className="navbar navbar-expand-xl sticky-header  navbar-dark bg-dark text-white" style={{ padding:"0" }}>
                <div className="container d-flex align-items-center justify-content-lg-between position-relative">
                    <Link href="/" className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none me-0 py-0" style={{ width:"240px" , height:"100px" }}>
                        <img style={{ objectFit: "cover" }} src="/logo2-removebg-preview.png" alt="logo" className="img-fluid logo-white"/>
                        <img src="/logo2-removebg-preview.png" alt="logo" className="img-fluid logo-color"/>
                    </Link>

                    <Link className="navbar-toggler position-absolute right-0 border-0" href="#offcanvasWithBackdrop"
                       role="button">
                        <i className="flaticon-menu" data-bs-toggle="offcanvas"
                           data-bs-target="#offcanvasWithBackdrop"
                           aria-controls="offcanvasWithBackdrop"></i>
                    </Link>
                    <div className="clearfix"></div>
                    <div className="collapse navbar-collapse justify-content-center">
                        <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                            <li><Link href="/" className="nav-link text-white">Home</Link></li>
                            <li className="nav-item text-white dropdown">
                                <Link className="nav-link dropdown-toggle text-white" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
                                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                    <div className="dropdown-grid rounded-custom width-full-3">
                                        <div className="dropdown-grid-item bg-white radius-left-side">
                                            <Link href="/" className="dropdown-link">
                                                <span className="me-2"><i className="flaticon-menu"></i></span>
                                                <div className="drop-title">Web Development</div>
                                            </Link>
                                            <Link href="/" className="dropdown-link">
                                                <span className="me-2"><i className="flaticon-layer"></i></span>
                                                <div className="drop-title">Mobile App</div>
                                            </Link>
                                            <Link href="/" className="dropdown-link">
                                                <span className="me-2"><i className="flaticon-phone-book"></i></span>
                                                <div className="drop-title">UI/UX Design</div>
                                            </Link>
                                            <Link href="/" className="dropdown-link">
                                                <span className="me-2"><i className="flaticon-flash"></i></span>
                                                <div className="drop-title">SaaS Development</div>
                                            </Link>
                                        </div>
                                        <div className="dropdown-grid-item bg-white">
                                            <Link href="/" className="dropdown-link">
                                                <span className="me-2"><i className="flaticon-clipboard"></i></span>
                                                <div className="drop-title">API Integration</div>
                                            </Link>
                                            <Link href="/" className="dropdown-link">
                                                <span className="me-2"><i className="flaticon-settings"></i></span>
                                                <div className="drop-title">E-commerce Solutions</div>
                                            </Link>
                                            <Link href="/" className="dropdown-link">
                                                <span className="me-2"><i className="flaticon-vector"></i></span>
                                                <div className="drop-title">Maintenance & Support</div>
                                            </Link>
                                        </div>
                                        <div className="dropdown-grid-item last-item bg-light-subtle radius-right-side">
                                            <a href="#">
                                                <img src="/assets/img/feature-img3.jpg" alt="add"
                                                     className="img-fluid rounded-custom"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><Link href="/projects" className="nav-link text-white">Projects</Link></li>
                            <li><Link href="/" className="nav-link text-white">Pricing</Link></li>
                            <li><Link href="/blogs" className="nav-link text-white">Blogs</Link></li>
                            <li><Link href="/about-us" className="nav-link text-white">About</Link></li>
                            <li><Link href="/contact-us" className="nav-link text-white">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
                        <a href="#" className="btn btn-link p-1 tt-theme-toggle">
                            <div className="tt-theme-light text-white" data-bs-toggle="tooltip" data-bs-placement="left"
                                 data-bs-title="Light"><i
                                className="flaticon-sun-1 fs-lg"></i></div>
                            <div className="tt-theme-dark" data-bs-toggle="tooltip" data-bs-placement="left"
                                 data-bs-title="Dark"><i
                                className="flaticon-moon-1 fs-lg"></i></div>
                        </a> <a href="login.html" className="btn btn-link text-decoration-none me-2 text-white">Sign In</a>
                        <a href="request-demo.html" className="btn text-white" style={{ backgroundColor: "#38B6DD" }}>Get Started</a>
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasWithBackdrop">
                <div className="offcanvas-header d-flex align-items-center mt-4">
                    <a href="index.html" className="d-flex align-items-center mb-md-0 text-decoration-none">
                        <img src="/assets/img/logo-color.png" alt="logo" className="img-fluid ps-2"/>
                    </a>
                    <button type="button" className="close-btn text-danger" data-bs-dismiss="offcanvas"
                            aria-label="Close">
                        <i className="flaticon-cancel"></i>
                    </button>
                </div>
                <div className="offcanvas-body">
                    <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Home
                            </a>
                            <div
                                className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white homepage-list-wrapper">
                                <div className="dropdown-grid rounded-custom width-full homepage-dropdown">
                                    <div className="dropdown-grid-item bg-white radius-left-side">
                                        <h6 className="drop-heading">Different Home</h6>
                                        <a href="index.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold">1</span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Saas Company 1</div>
                                                <p>It's for <strong>SaaS Software</strong> Company </p>
                                            </div>
                                        </a>
                                        <a href="index-2.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold">2</span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Saas Company 2</div>
                                                <p>Modern <strong>Saas agency</strong>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-3.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold">3</span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Desktop App</div>
                                                <p>
                                                    <strong>Web Software</strong> Company
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-4.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold">4</span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">App Landing</div>
                                                <p>App and <strong>Software</strong> Landing </p>
                                            </div>
                                        </a>
                                        <a href="index-5.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold">5</span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Software Application</div>
                                                <p>IT solutions and <strong>SaaS Application</strong>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-6.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold">6</span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Startup Agency</div>
                                                <p>Different type of <strong>Agency</strong>&lrm; </p>
                                            </div>
                                        </a>
                                        <a href="index-7.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold">7</span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Data Analysis</div>
                                                <p>Software & <strong>Data Analysis</strong>&lrm; </p>
                                            </div>
                                        </a>
                                        <a href="index-8.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold">8</span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">App Landing Two</div>
                                                <p>Software & <strong>Data Analysis</strong>&lrm; </p>
                                            </div>
                                        </a>
                                        <a href="index-9.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold">9</span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">IT Solution</div>
                                                <p>IT solutions and <strong>SaaS Application</strong>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-10.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold">10</span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Cyber Security</div>
                                                <p>Cyber Security <strong>Landing Page</strong>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-11.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 11 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Crypto Currency</div>
                                                <p>
                                                    <strong>Crypto Currency</strong> landing page
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-grid-item bg-light-subtle">
                                        <h6 className="drop-heading">Different Home</h6>
                                        <a href="index-12.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 12 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Game Solutions</div>
                                                <p>
                                                    <strong>Game Server</strong> landing page
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-13.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 13 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Payment Gateway</div>
                                                <p>
                                                    <strong>Payment Gateway</strong> landing page
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-14.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 14 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Digital Marketing</div>
                                                <p>
                                                    <strong>Digital Marketing</strong> landing page
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-15.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 15 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Conference & Event</div>
                                                <p>
                                                    <strong>Conference & Event</strong> landing
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-16.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 16 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Quiety Insurance</div>
                                                <p>
                                                    <strong>Quiety Insurance</strong> landing
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-17.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 17 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Sass Marketing</div>
                                                <p>
                                                    <strong>Sass Marketing</strong> landing
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-18.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 18 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">CRM Home</div>
                                                <p>Customer Relationship</p>
                                            </div>
                                        </a>
                                        <a href="index-19.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 19 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Help Desk</div>
                                                <p>Help Desk Home</p>
                                            </div>
                                        </a>
                                        <a href="index-20.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 20 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Digital Agency</div>
                                                <p>Digital Agency Home</p>
                                            </div>
                                        </a>
                                        <a href="index-21.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 21 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Software Company</div>
                                                <p>Software Company Home</p>
                                            </div>
                                        </a>
                                        <a href="index-22.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 22 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Creative Agency</div>
                                                <p>
                                                    <strong>Creative Agency</strong> landing
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-grid-item bg-white">
                                        <h6 className="drop-heading">Different Home</h6>
                                        <a href="index-23.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 23 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Digital Marketing Agency</div>
                                                <p>
                                                    <strong>Digital Marketing </strong>Agency landing
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-24.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 24 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Design Agency</div>
                                                <p>
                                                    <strong>Design Agency </strong>Home One
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-25.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 25 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Design Agency</div>
                                                <p>
                                                    <strong>Design Agency </strong>Home Two
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-26.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 26 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Agency Home</div>
                                                <p>
                                                    <strong>Agency Home </strong>New
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-27.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 27 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Creative Agency</div>
                                                <p>
                                                    <strong>Creative Agency </strong>Two
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-28.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 28 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Risk Managment</div>
                                                <p>
                                                    <strong>Risk Managment </strong>Home
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-29.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 29 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">It Company</div>
                                                <p>
                                                    <strong>It Company </strong>Home
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-30.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 30 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Ai Home</div>
                                                <p>
                                                    <strong>Ai Company </strong>Home
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-31.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 31 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Ai Content Generator</div>
                                                <p>
                                                    <strong>Saas </strong>Content Generator
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-32.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 32 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Ai SAAS Content Generator</div>
                                                <p>
                                                    <strong>Ai SAAS Content </strong>For Marketing
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-33.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 33 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Ai Image Generation SAAS</div>
                                                <p>
                                                    <strong>Ai image generation </strong>New
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-grid-item bg-light-subtle">
                                        <h6 className="drop-heading">Different Home</h6>
                                        <a href="index-34.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 34 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Payment Gateway</div>
                                                <p>
                                                    <strong>Payment Gateway </strong>New
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-35.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 35 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Corporate Agency</div>
                                                <p>
                                                    <strong>Agency Website </strong>New
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-36.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 36 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Creative Agency</div>
                                                <p>
                                                    <strong>Agency Website </strong>New
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-37.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 37 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Marketplace Agency</div>
                                                <p>
                                                    <strong>Marketplace Website </strong>New
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-38.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 38 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Job Finder</div>
                                                <p>
                                                    <strong>Job </strong>Finder New
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-39.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 39 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Job Finder 2</div>
                                                <p>
                                                    <strong>Job </strong>Finder New
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-40.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 40 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Charity</div>
                                                <p>
                                                    Home <strong>Charity </strong>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-41.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 41 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Logistics</div>
                                                <p>
                                                    Home <strong>Logistics </strong>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-42.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 42 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Crypto</div>
                                                <p>
                                                    Home <strong>Logistics </strong>
                                                </p>
                                            </div>
                                        </a>
                                        <a href="index-43.html" className="dropdown-link">
                                                <span
                                                    className="demo-list bg-primary rounded text-white fw-bold"> 43 </span>
                                            <div className="dropdown-info">
                                                <div className="drop-title">Agency</div>
                                                <p>
                                                    Home <strong>Agency </strong>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="services.html" className="nav-link">Services</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">Resources</a>
                            <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                <div className="dropdown-grid rounded-custom width-full-3">
                                    <div className="dropdown-grid-item bg-white radius-left-side">
                                        <h6 className="drop-heading">Reusable Section</h6>
                                        <a href="header.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-menu"></i>
      						        </span>
                                            <div className="drop-title">Navigations</div>
                                        </a>
                                        <a href="hero-sections.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-layer"></i>
      						        </span>
                                            <div className="drop-title">Hero Sections</div>
                                        </a>
                                        <a href="testimonials.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-phone-book"></i>
      						        </span>
                                            <div className="drop-title">Testimonials</div>
                                        </a>
                                        <a href="call-to-action.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-flash"></i>
      						        </span>
                                            <div className="drop-title">Call to Action</div>
                                        </a>
                                        <a href="tab-style.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-settings"></i>
      						        </span>
                                            <div className="drop-title">Tab Style</div>
                                        </a>
                                        <a href="services-style.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-graduation-cap"></i>
      						        </span>
                                            <div className="drop-title">Services Style</div>
                                        </a>
                                        <a href="work-process.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-folder"></i>
      						        </span>
                                            <div className="drop-title">Work Process</div>
                                        </a>
                                    </div>
                                    <div className="dropdown-grid-item bg-white">
                                        <h6 className="drop-heading">Reusable Section</h6>
                                        <a href="pricing-style.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-clipboard"></i>
      						        </span>
                                            <div className="drop-title">Pricing Style</div>
                                        </a>
                                        <a href="accordions.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-settings"></i>
      						        </span>
                                            <div className="drop-title">Accordions</div>
                                        </a>
                                        <a href="features.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-vector"></i>
      						        </span>
                                            <div className="drop-title">Features</div>
                                        </a>
                                        <a href="footers.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-link"></i>
      						        </span>
                                            <div className="drop-title">Footers</div>
                                        </a>
                                        <a href="team.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-avatar"></i>
      						        </span>
                                            <div className="drop-title">Our Team</div>
                                        </a>
                                        <a href="integration-style.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-paper-plane-1"></i>
      						        </span>
                                            <div className="drop-title">Integration Style</div>
                                        </a>
                                        <a href="blog-style.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-pen-tool"></i>
      						        </span>
                                            <div className="drop-title">Blog Style</div>
                                        </a>
                                    </div>
                                    <div className="dropdown-grid-item last-item bg-light-subtle radius-right-side">
                                        <a href="#">
                                            <img src="/assets/img/feature-img3.jpg" alt="add"
                                                 className="img-fluid rounded-custom"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="pricing.html" className="nav-link">Pricing</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">Company</a>
                            <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                <div className="dropdown-grid rounded-custom width-full">
                                    <div className="dropdown-grid-item bg-white radius-left-side">
                                        <h6 className="drop-heading">Useful Links</h6>
                                        <a href="about-us.html" className="dropdown-link px-0">
                                            <span className="me-2">
      						          <i className="flaticon-fingerprint"></i>
      						        </span>
                                            <div className="drop-title">About Us</div>
                                        </a>
                                        <a href="contact-us.html" className="dropdown-link px-0">
                                            <span className="me-2">
      						          <i className="flaticon-phone-book"></i>
      						        </span>
                                            <div className="drop-title">Contact Us</div>
                                        </a>
                                        <a href="services.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-pie-chart"></i>
      						        </span>
                                            <div className="drop-title">Services</div>
                                        </a>
                                        <a href="service-single.html" className="dropdown-link px-0">
                                            <span className="me-2">
      						          <i className="flaticon-server-storage"></i>
      						        </span>
                                            <div className="drop-title">Services Single</div>
                                        </a>
                                        <a href="blog.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-clipboard"></i>
      						        </span>
                                            <div className="drop-title">Our Latest News</div>
                                        </a>
                                        <a href="blog-single.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-menu"></i>
      						        </span>
                                            <div className="drop-title">News Details</div>
                                        </a>
                                        <a href="career.html" className="dropdown-link px-0">
                                            <span className="me-2">
      						          <i className="flaticon-graduate"></i>
      						        </span>
                                            <div className="drop-title">Career</div>
                                        </a>
                                        <a href="career-single.html" className="dropdown-link px-0">
                                            <span className="me-2">
      						          <i className="flaticon-pen-tool"></i>
      						        </span>
                                            <div className="drop-title">Career Single</div>
                                        </a>
                                        <a href="integrations.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-paper-plane-1"></i>
      						        </span>
                                            <div className="drop-title">Integrations</div>
                                        </a>
                                        <a href="integration-single.html" className="dropdown-link px-0">
                                            <span className="me-2">
      						          <i className="flaticon-shopping-list"></i>
      						        </span>
                                            <div className="drop-title">Integration Single</div>
                                        </a>
                                    </div>
                                    <div className="dropdown-grid-item radius-right-side bg-light-subtle">
                                        <h6 className="drop-heading">Utility Pages</h6>
                                        <a href="style-guide.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-web-programming"></i>
      						        </span>
                                            <div className="drop-title">Style Guide</div>
                                        </a>
                                        <a href="support.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-headset"></i>
      						        </span>
                                            <div className="drop-title">Help Center</div>
                                        </a>
                                        <a href="support-single.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-envelope"></i>
      						        </span>
                                            <div className="drop-title">Help Details</div>
                                        </a>
                                        <a href="team.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-avatar"></i>
      						        </span>
                                            <div className="drop-title">Our Team</div>
                                        </a>
                                        <a href="request-demo.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-vector"></i>
      						        </span>
                                            <div className="drop-title">Request for Demo</div>
                                        </a>
                                        <a href="login.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-download"></i>
      						        </span>
                                            <div className="drop-title">User Login</div>
                                        </a>
                                        <a href="register.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-logout"></i>
      						        </span>
                                            <div className="drop-title">User SignUp</div>
                                        </a>
                                        <a href="password-reset.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-garbage"></i>
      						        </span>
                                            <div className="drop-title">Recovery Account</div>
                                        </a>
                                        <a href="404.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-web-programming"></i>
      						        </span>
                                            <div className="drop-title">404 Page</div>
                                        </a>
                                        <a href="coming-soon.html" className="dropdown-link">
                                            <span className="me-2">
      						          <i className="flaticon-reload"></i>
      						        </span>
                                            <div className="drop-title">Coming Soon</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="action-btns mt-4 ps-3">
                        <a href="login.html" className="btn btn-outline-primary me-2">Sign In</a>
                        <a href="request-demo.html" className="btn btn-primary">Get Started</a>
                    </div>
                </div>
            </div>
        </header>
        /*<nav>
            <Link href="/">Home</Link> | {" "}
            <Link href="/about-us">Users</Link>
        </nav>*/
    );
}