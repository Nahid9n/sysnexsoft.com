export default function BlogDetails({ params }) {
    const { slug } = params;

    return (
        <>
            <section className="page-header position-relative overflow-hidden ptb-120 bg-dark"
                     style={{ background: "url('assets/img/page-header-bg.svg')no-repeat bottom left" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-12">
                            <h1 className="fw-bold display-5">Why customer retention is the ultimate growth
                                strategy</h1>
                        </div>
                    </div>
                    <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
                </div>
            </section>
            <section className="blog-details ptb-120">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-8 pe-lg-5">
                            <div className="blog-details-wrap">
                                <p>Objectively restore stand-alone markets rather than enterprise-wide products.
                                    Uniquely underwhelm best-of-breed mindshare through adaptive niches. Interactively
                                    leverage existing innovative e-services seamlessly parallel task open-source content
                                    without resource sucking technology.
                                </p>
                                <p>Dramatically cultivate frictionless communities with enterprise-wide customer
                                    service. Dramatically simplify web-enabled growth strategies rather than integrated
                                    imperatives. Interactively leverage existing innovative e-services customer service.
                                    Intrinsicly impact web-enabled value vis-a-vis innovative customer service.
                                    Continually procrastinate efficient growth strategies for backend experiences.</p>
                                <div className="blog-details-info mt-5">
                                    <h3 className="h5">Customer retention is key</h3>
                                    <ul className="content-list list-unstyled">
                                        <li>Be involved in every step of the product design cycle from discovery and
                                            user acceptance testing.
                                        </li>
                                        <li>Work with BAs, product managers and tech teams to lead the Product Design
                                        </li>
                                        <li>Maintain quality of the design process and ensure that when designs are
                                            translated into code they accurately.
                                        </li>
                                        <li>Accurately estimate design tickets during planning sessions.</li>
                                        <li>Contribute to sketching sessions involving non-designersCreate, and pattern
                                            libraries.
                                        </li>
                                        <li>Design pixel perfect responsive UI’s and understand that adopting common
                                            interface
                                        </li>
                                        <li>Interface patterns is better for UX than reinventing the wheel</li>
                                    </ul>
                                    <blockquote
                                        className="bg-white custom-shadow p-5 mt-5 rounded-custom border-4 border-primary border-top">
                                        <p className="text-muted"><i
                                            className="fas fa-quote-left me-2 text-primary"></i> Globally network
                                            long-term high-impact schemas vis-a-vis distinctive e-commerce
                                            cross-media infrastructures rather than ethical. Credibly visualize
                                            distinctive testing procedures without end-to-end ROI. Seamlessly brand
                                            cross-platform communities with backend markets. Assertively utilize
                                            business services through robust solutions. Rapidiously deliver cross-unit
                                            infrastructures rather than accurate metrics.
                                            <i className="fas fa-quote-right ms-2 text-primary"></i>
                                        </p>
                                    </blockquote>
                                </div>
                                <img src="/assets/img/tab-feature-img-4.png" className="img-fluid mt-4 rounded-custom" alt="apply" />
                                    <div className="job-details-info mt-5">
                                        <h3 className="h5">Focus on increasing customer retention first</h3>
                                        <p>Appropriately fashion ubiquitous information without future-proof growth
                                            strategies. Interactively morph cutting-edge e-business before functional
                                            potentialities. Compellingly syndicate empowered communities via multimedia
                                            based schemas. Objectively productize granular materials whereas quality
                                            solutions. Collaboratively reinvent innovative paradigms and low-risk
                                            high-yield action items.</p>
                                        <ul className="content-list list-unstyled">
                                            <li>Interactively plagiarize covalent "outside the box" thinking
                                                vis-a-vis.
                                            </li>
                                            <li>Holisticly communicate integrated channels via backend interfaces.
                                                Authoritatively.
                                            </li>
                                            <li>Globally actualize effective processes through synergistic ROI.
                                                Interactively.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="blog-details-info mt-5">
                                        <h3 className="h5">Skill & Experience</h3>
                                        <ul className="content-list list-unstyled">
                                            <li>You have at least 3 years’ experience working as a Product Designer.
                                            </li>
                                            <li>You have experience using Sketch and InVision or Framer X</li>
                                            <li>You have some previous experience working in an agile environment –
                                                Think two-week sprints.
                                            </li>
                                            <li>You are familiar using Jira and Confluence in your workflow</li>
                                        </ul>
                                    </div>

                                    <img src="/assets/img/tab-feature-img-2.png" className="img-fluid mt-5 rounded-custom" alt="apply" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="author-wrap text-center bg-light-subtle p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0">
                                <img src="/assets/img/team/team-2.jpg" alt="author" width="120" className="img-fluid shadow-sm rounded-circle" />
                                    <div className="author-info my-4">
                                        <h5 className="mb-0">Elena Mou</h5>
                                        <span className="small">Head of Designer</span>
                                    </div>
                                    <p>Uniquely communicate open-source technology after value-added ideas.
                                        Professionally engage efficient channels without B2C functionalities.</p>
                                    <ul className="list-unstyled author-social-list list-inline mt-3 mb-0">
                                        <li className="list-inline-item"><a href="#"><i
                                            className="fab fa-linkedin-in"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a>
                                        </li>
                                        <li className="list-inline-item"><a href="#"><i
                                            className="fab fa-github"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i
                                            className="fab fa-facebook-f"></i></a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!--newsletter subscription container start-->*/}
                <div className="container">
                    {/*<!--cat subscribe start-->*/}
                    <div className="bg-dark ptb-60 px-5 mt-100 position-relative overflow-hidden rounded-custom"
                         style={{background: "url('assets/img/page-header-bg.svg')no-repeat center bottom"}}>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-9">
                                <div className="subscribe-info-wrap text-center position-relative z-2">
                                    <div className="section-heading">
                                        <h4 className="h5 text-warning">For Latest News & Update</h4>
                                        <h2>Want Receive the Best SAAS Insights? Subscribe Now!</h2>
                                        <p>We can help you to create your dream website for better business revenue.</p>
                                    </div>
                                    <div className="form-block-banner mw-60 m-auto mt-5">
                                        <form id="email-form2" name="email-form" className="subscribe-form d-flex">
                                            <input type="email" className="form-control me-2" name="Email"
                                                   data-name="Email"
                                                   placeholder="Enter your email"
                                                   id="Email2"
                                                   required="" />
                                                <input type="submit" value="Join!" data-wait="Please wait..." className="btn btn-primary" />
                                        </form>
                                    </div>
                                    <ul className="nav justify-content-center subscribe-feature-list mt-3">
                                        <li className="nav-item">
                                        <span><i className="far fa-dot-circle text-primary me-2"></i>Don’t worry we won’t
                                                  send you spam</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-circle rounded-circle circle-shape-1 position-absolute bg-dark-light left-5"></div>
                    </div>
                    {/*<!--cat subscribe end-->*/}
                </div>
                {/*<!--newsletter subscription container end-->*/}
            </section>
        </>
    );
}