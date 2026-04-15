"use client";

import Link from "next/link";

export default function ProjectCard({ post }) {
    return (
        <Link href={`/projects/${post.slug}`} className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white mt-0 mt-lg-0 mt-md-0 transition-base rounded-custom d-block overflow-hidden p-5">
            <div className="position-relative connected-app-content">
                <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                    <img src="/assets/img/integations/1.png" width="40" alt="integration" className="img-fluid" />
                </div>
                <h5>Google Drive</h5>
                <p className="mb-0 text-muted">Globally engage tactical niche markets rather
                    than client-based competently generate unique e-services</p>
            </div>
        </Link>
    );
}