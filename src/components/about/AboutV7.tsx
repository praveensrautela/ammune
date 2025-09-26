import { Link } from "react-router-dom";
// import icon16 from "/assets/img/icon/16.png"
import logo from '/assets/img/Logo-01.avif';


// import team10 from "/assets/img/team/10.jpg"
// import team11 from "/assets/img/team/11.jpg"
// import team12 from "/assets/img/team/12.jpg"
// import team13 from "/assets/img/team/13.jpg"
import SplitText from "../animation/SplitText.jsx"

interface DataType {
    sectionClass?: string
}

const AboutV7 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`about-style-seven-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="about-style-one-items">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="about-style-seven-left-info">
                                    <h2 className="title">
                                        <SplitText
                                            delay={20}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Please check our LinkedIn page for further details.
                                        </SplitText>
                                    </h2>

                                    <div className="defaultbtn ">
                                        <Link className="" to="https://www.linkedin.com/company/ammune/?viewAsMember=true"><span>Linkedin </span> <i className="fas fa-arrow-right" /> </Link>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-7 pl-80 pl-md-15 pl-xs-15">
                                <div className="about-style-seven-info">
                                    <div className="d-grid">
                                        <div className="left">
                                            <p>
                                                ammune.ai is a leading cyber security company that developed a unique AI-based API security solution.
                                                We are constantly looking for talents to join our excellent team.
                                            </p>
                                        </div>
                                        <div className="award-style-one" style={{ background: "#18191b", border: "1px solid #333" }}>
                                            <div className="top">
                                                <div className="icon">
                                                    <img src={logo} alt="Image Not Found" />
                                                </div>
                                                <div className="info">
                                                    <h4 className="text-white">AI-Driven Protection for Your API Ecosystem</h4>
                                                </div>
                                            </div>
                                            <div className="user-card-two">
                                                <div className="thumb">

                                                    <Link to="https://www.linkedin.com/company/ammune/?viewAsMember=true" target="_blank">
                                                        <i className="fab fa-linkedin-in" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV7;