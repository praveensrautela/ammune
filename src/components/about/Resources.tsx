import useScrollAnimation from '../../hooks/useScrollAnimation';
import useUpDownScroll from '../../hooks/useUpDownScroll';
import resourceimg from '/assets/img/resources/resources.png';
import { Link } from "react-router-dom";

interface DataType {
    sectionClass?: string
}

const Resources = ({ sectionClass }: DataType) => {
    const containerRef = useScrollAnimation();
    useUpDownScroll(".upDownScrol");

    return (
        <div
            className={`about-style-three-area  ${sectionClass ? sectionClass : ""
                }`}
        >
            <div className="container">
                <div className="row  align-center default-padding" >
                    {/* Even rows → Image left, Text right */}

                    <div className="col-lg-6">
                        <div
                            className="about-style-three-info text-scroll-animation"
                            ref={containerRef}
                        >
                            <h2 className="title text">Deep Dive Into
                                <br /> API Security</h2>
                            <div className="d-flex mt-40">
                                <div className="right">
                                    <p className="text">
                                        Ammune.ai is a leading AI-led API security firm, and we take pride in enabling our clients to transform their business securely.That’s why we’ve curated an extensive library of resources to demystify the world of
                                        API security for our clients
                                    </p>
                                </div>
                            </div>

                            <div className="defaultbtn ">
                                <Link className="" to="https://calendly.com/yisrael-ammune/30min"><span>Schedule a meeting </span> <i className="fas fa-arrow-right" /> </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="thumb-style-three">
                            <img
                                src={resourceimg}
                                alt="Ammune ai"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Resources;