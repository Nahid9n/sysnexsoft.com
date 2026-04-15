"use client";

import Link from "next/link";
const post = {
    slug: "product-value-concept",
    title: "Do you really understand the concept of product value?",
    description: "Society is fragmenting into two parallel realities...",
    category: "Design",
    author: "Jane Martin",
    date: "April 24, 2021",
};

export default function BlogCard({ post }) {
    return (
        <div className="single-article rounded-custom my-3">

            {/* Image */}
            <Link href={`/blogs/${post.slug}`} className="article-img">
                <img src="/assets/img/blog/blog-1.jpg" alt="article" className="img-fluid" />
            </Link>

            <div className="article-content p-4">

                {/* Category */}
                <div className="article-category mb-4 d-block">
                  <span className="d-inline-block text-dark badge bg-warning-soft">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <Link href={`/blogs/${post.slug}`}>
                    <h2 className="h5 article-title limit-2-line-text">
                        {post.title}
                    </h2>
                </Link>

                {/* Description */}
                <p className="limit-2-line-text">
                    {post.description}
                </p>

                {/* Author */}
                <Link href={`/blogs/${post.slug}`}>
                    <div className="d-flex align-items-center pt-4">
                        <div className="avatar">
                            <img
                                src="/assets/img/testimonial/6.jpg"
                                alt="avatar"
                                width="40"
                                className="img-fluid rounded-circle me-3"
                            />
                        </div>
                        <div className="avatar-info">
                            <h6 className="mb-0 avatar-name">{post.author}</h6>
                            <span className="small fw-medium text-muted">
                {post.date}
              </span>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
}