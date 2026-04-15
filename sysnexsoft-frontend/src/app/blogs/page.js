import Link from "next/link";
import BlogCard from "@/components/BlogCard";

const post = {
    slug: "product-value-concept",
    title: "Do you really understand the concept...",
    description: "Society is fragmenting...",
    category: "Design",
    author: "Jane Martin",
    date: "April 24, 2021",
};

export default function Blogs() {
    return (
        <>
            <section className="page-header position-relative overflow-hidden ptb-120 bg-dark" style={{ background: "url('assets/img/page-header-bg.svg')no-repeat center bottom" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="section-heading text-center">
                                <h1 className="display-5 fw-bold">Our Latest News and Blogs</h1>
                                <p className="lead mb-0">Completely integrate equity invested partnerships without
                                    revolutionary systems. Monotonectally network pandemic e-services via bricks-and-clicks
                                    information. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-8">
                            <Link href="" className="btn btn-soft-primary btn-pill btn-sm m-2">Marketing</Link>
                            <Link href="" className="btn btn-soft-primary btn-pill btn-sm m-2">Sales</Link>
                            <Link href="" className="btn btn-soft-primary btn-pill btn-sm m-2">Design</Link>
                            <Link href="" className="btn btn-soft-primary btn-pill btn-sm m-2">Development</Link>
                            <Link href="" className="btn btn-soft-primary btn-pill btn-sm m-2">Product Design</Link>
                            <Link href="" className="btn btn-soft-primary btn-pill btn-sm m-2">Customers</Link>
                            <Link href="" className="btn btn-soft-primary btn-pill btn-sm m-2">Agency</Link>
                            <Link href="" className="btn btn-soft-primary btn-pill btn-sm m-2">Investors</Link>
                            <Link href="" className="btn btn-soft-primary btn-pill btn-sm m-2">Research</Link>
                        </div>
                    </div>
                    <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
                </div>
            </section>
            <section className="masonary-blog-section ptb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <BlogCard post={post} />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <BlogCard post={post} />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <BlogCard post={post} />
                        </div>

                    </div>

                    {/*<!--pagination start-->*/}
                    <div className="row justify-content-center align-items-center mt-5">
                        <div className="col-auto my-1">
                            <a href="#" className="btn btn-soft-primary btn-sm">Previous</a>
                        </div>
                        <div className="col-auto my-1">
                            <nav>
                                <ul className="pagination rounded mb-0">
                                    <li className="page-item"><a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">3</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-auto my-1">
                            <a href="#" className="btn btn-soft-primary btn-sm">Next</a>
                        </div>
                    </div>
                    {/*<!--pagination end-->*/}
                </div>
            </section>
        </>
    );
}