import ProjectCard from "@/components/ProjectCard";
const post = {
    slug: "product-value-concept",
    title: "Do you really understand the concept of product value?",
    description: "Society is fragmenting into two parallel realities...",
    category: "Design",
    author: "Jane Martin",
    date: "April 24, 2021",
};

export default function Projects() {
    return (
        <>
            <section className="page-header position-relative overflow-hidden ptb-120 bg-dark" style={{ background: "url('assets/img/page-header-bg.svg')no-repeat bottom left" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <h1 className="display-5 fw-bold">Our Featured Integrations</h1>
                            <p className="lead">Seamlessly actualize client-based users after out-of-the-box value.
                                Globally embrace strategic data through frictionless expertise.</p>
                        </div>
                    </div>
                    <div
                        className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
                </div>
            </section>
            <section className="our-integration ptb-120 bg-light-subtle">
                <div className="container">
                    <div className="position-relative w-100">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <ProjectCard post={post} />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <ProjectCard post={post} />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="integration-single.html"
                                   className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 mt-lg-0 transition-base rounded-custom d-block overflow-hidden p-5">
                                    <div className="position-relative connected-app-content">
                                        <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                                            <img src="assets/img/integations/3.png" width="40" alt="integration"
                                                 className="img-fluid"/>
                                        </div>
                                        <h5>Google Drive</h5>
                                        <p className="mb-0 text-muted">Globally engage tactical niche markets rather
                                            than client-based competently generate unique e-services</p>
                                    </div>
                                    <span
                                        className="badge position-absolute integration-badge bg-danger-soft px-3 py-2 text-danger">Premium</span>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="integration-single.html"
                                   className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5">
                                    <div className="position-relative connected-app-content">
                                        <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                                            <img src="assets/img/integations/4.png" width="40" alt="integration"
                                                 className="img-fluid"/>
                                        </div>
                                        <h5>Google Drive</h5>
                                        <p className="mb-0 text-muted">Globally engage tactical niche markets rather
                                            than client-based competently generate unique e-services</p>
                                    </div>
                                    <span
                                        className="badge position-absolute integration-badge bg-success-soft px-3 py-2 text-success">Free</span>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="integration-single.html"
                                   className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5">
                                    <div className="position-relative connected-app-content">
                                        <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                                            <img src="assets/img/integations/5.png" width="40" alt="integration"
                                                 className="img-fluid"/>
                                        </div>
                                        <h5>Google Drive</h5>
                                        <p className="mb-0 text-muted">Globally engage tactical niche markets rather
                                            than client-based competently generate unique e-services</p>
                                    </div>
                                    <span
                                        className="badge position-absolute integration-badge bg-danger-soft px-3 py-2 text-danger">Premium</span>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="integration-single.html"
                                   className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5">
                                    <div className="position-relative connected-app-content">
                                        <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                                            <img src="assets/img/integations/6.png" width="40" alt="integration"
                                                 className="img-fluid"/>
                                        </div>
                                        <h5>Google Drive</h5>
                                        <p className="mb-0 text-muted">Globally engage tactical niche markets rather
                                            than client-based competently generate unique e-services</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="integration-single.html"
                                   className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5">
                                    <div className="position-relative connected-app-content">
                                        <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                                            <img src="assets/img/integations/7.png" width="40" alt="integration"
                                                 className="img-fluid"/>
                                        </div>
                                        <h5>Google Drive</h5>
                                        <p className="mb-0 text-muted">Globally engage tactical niche markets rather
                                            than client-based competently generate unique e-services</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="integration-single.html"
                                   className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5">
                                    <div className="position-relative connected-app-content">
                                        <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                                            <img src="assets/img/integations/8.png" width="40" alt="integration"
                                                 className="img-fluid"/>
                                        </div>
                                        <h5>Google Drive</h5>
                                        <p className="mb-0 text-muted">Globally engage tactical niche markets rather
                                            than client-based competently generate unique e-services</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="integration-single.html"
                                   className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-4 transition-base rounded-custom d-block overflow-hidden p-5">
                                    <div className="position-relative connected-app-content">
                                        <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                                            <img src="assets/img/integations/9.png" width="40" alt="integration"
                                                 className="img-fluid"/>
                                        </div>
                                        <h5>Google Drive</h5>
                                        <p className="mb-0 text-muted">Globally engage tactical niche markets rather
                                            than client-based competently generate unique e-services</p>
                                    </div>
                                    <span
                                        className="badge position-absolute integration-badge bg-warning-soft px-3 py-2 text-warning">Popular</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}