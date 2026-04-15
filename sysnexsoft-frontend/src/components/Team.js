import TeamCard from "@/components/TeamCard";

export default function Team() {
    return (
        <div className="it-company-team-area it-company-bg-two ptb-120 position-relative z-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h2 className="it-company-title it-company-color fs-40 fw-600 flh-56 mb-30">Our Expert Team
                                Members
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <TeamCard />
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <TeamCard />
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <TeamCard />
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <TeamCard />
                    </div>
                </div>
            </div>
        </div>
    );
}