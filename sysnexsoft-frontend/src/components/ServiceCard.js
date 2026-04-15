"use client";

import Link from "next/link";

export default function ServiceCard({post}) {
    return (
        <>
            <div className="feature-card bg-white shadow-sm rounded-custom p-5">
                <div className="icon-box d-inline-block rounded-circle bg-primary-soft mb-32">
                    <i className="fas fa-chart-simple icon-sm text-primary"></i>
                </div>
                <div className="feature-content">
                    <h3 className="h5">Advanced analytics</h3>
                    <p>Synergistically pursue accurate initiatives without economically sound
                        imperatives.</p>
                    <p> Professionally architect unique process improvements via optimal.</p>
                    <h6 className="mt-4">Included with...</h6>
                    <ul className="list-unstyled mb-0">
                        <li className="py-1"><i
                            className="far fa-check-circle me-2 text-primary"></i>High
                            -converting
                        </li>
                        <li className="py-1"><i
                            className="far fa-check-circle me-2 text-primary"></i>Personal
                            branding
                        </li>
                        <li className="py-1"><i
                            className="far fa-check-circle me-2 text-primary"></i>Modernized
                            prospecting
                        </li>
                        <li className="py-1"><i
                            className="far fa-check-circle me-2 text-primary"></i>Clean and
                            modern
                        </li>
                        <li className="py-1"><i
                            className="far fa-check-circle me-2 text-primary"></i>Showcasing
                            success
                        </li>
                        <li className="py-1"><i
                            className="far fa-check-circle me-2 text-primary"></i>Bootstrap latest
                            version
                        </li>
                    </ul>
                </div>
                <Link href={`/services/${post.slug}`} className="link-with-icon text-decoration-none mt-3">View
                    Details <i className="fas fa-arrow-right"></i></Link>
            </div>
        </>
    );
}