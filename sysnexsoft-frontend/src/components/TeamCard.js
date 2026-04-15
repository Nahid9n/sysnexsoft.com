export default function TeamCard() {
    return (
        <div className="team-single-wrap mb-5">
            <div className="team-img rounded-custom">
                <img src="assets/img/team/team-1.jpg" alt="team"
                     className="img-fluid position-relative"/>
                <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                    <li className="list-inline-item"><a href="#"><i
                        className="fab fa-linkedin-in"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i
                        className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i
                        className="fab fa-github"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i
                        className="fab fa-facebook-f"></i></a></li>
                </ul>
            </div>
            <div className="team-info mt-4 text-center">
                <h5 className="h6 mb-1">John Sullivan</h5>
                <p className="text-muted small mb-0">Front End Developer</p>
            </div>
        </div>
    );
}