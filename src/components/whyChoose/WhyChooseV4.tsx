import thumb3 from '../../assets/images/ammunebanner.png';

interface DataType {
    sectionClass?: string
}

const WhyChooseV4 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="thumb-style-one">
                                <img src={thumb3} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="choose-us-style-one">
                                <div className="pl-80 pl-md-0 pl-xs-0">
                                    <h4 className="sub-title">Main Features</h4>
                                    <h2 className="title">ammune™ Main Features</h2>
                                    <div className="pricing-style-two">
                                        <ul>
                                            <li>Comprehensive solution, Protects APIs, at scale</li>
                                            <li>Fully Autonomous ML/AI based solution with no human intervention</li>
                                            <li>Generates protection policies (“rules”) automatically</li>
                                            <li>Protection from the 1st request</li>
                                            <li>Rare cases of false positive errors (less than 0.1%)</li>
                                            <li>Platform Agnostic, On premises or On Cloud</li>
                                            <li>No noticeable impact on network</li>
                                            <li>Very low Total Cost of Ownership (TCO)</li>
                                        </ul>
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

export default WhyChooseV4;