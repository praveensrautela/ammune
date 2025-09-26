import about1 from "/assets/img/about/1.jpg";
// import about4 from "/assets/img/about/4.jpg";
// import SkillProgressData from "../../../src/assets/jsonData/progress/SkillProgressData.json";
// import SkillProgress from "../process/SkillProgress";
import SplitText from "../animation/SplitText.jsx"
import useUpDownScrollV2 from "../../hooks/useUpDownScrollV2";

interface DataType {
    sectionClass?: string
}

const AboutV4 = ({ sectionClass }: DataType) => {

    useUpDownScrollV2(".upDownScrolSlow");

    return (
        <>
            <div className={`about-style-four-area  ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="about-style-four-thumb">
                                <img src={about1} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="about-style-four-info">
                                <div className="content">

                                    <p>
                                        <SplitText
                                            delay={5}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                           API abuses are the most-frequent attack vector resulting in data breaches for enterprise applications. Enterprises of all sizes trust Ammune™ by ammune.ai to keep their APIs safe.
                                        </SplitText>

                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV4;