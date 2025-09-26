import Animate from '../animation/Animate';
import thumb3 from '../../assets/images/ammunebanner.png';

interface DataType {
    sectionClass?: string
}

const WhyChooseV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`${sectionClass ? sectionClass : ""} blurry-shape-right blurry-shape-top-left `}>
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
                                    <h4 className="sub-title">Why Ammune.ai</h4>
                                    <h2 className="title">Ammune.ai Technology</h2>
                                    <div className="faq-style-one accordion mt-30" id="faqAccordion">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Inline Integration
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        The Deployment can be used in Protection or Monitoring mode


                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Side-by-Side Integration
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        The Deployment can be used in Protection or Monitoring mode
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Monitoring via VPC Mirror
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        Captures and analyzes real-time VPC traffic by mirroring packets for monitoring, troubleshooting, and security insights.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    Side-by-Side K8s Integration
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                                <div className="accordion-body">
                                                    <p>
                                                        The Deployment can be used in Protection or Monitoring mode
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="award-items">
                                    <Animate className='animate__animated animate__fadeInLeft'>
                                        <div className="award-item">
                                            <i className="fab fa-behance" />
                                            <h4>Behance Awards </h4>
                                        </div>
                                    </Animate>

                                    <Animate className='animate__animated animate__fadeInLeft' delay="100ms">
                                        <div className="award-item">
                                            <i className="fas fa-layer-group" />
                                            <h4>Design Awards</h4>
                                        </div>
                                    </Animate>

                                    <Animate className='animate__animated animate__fadeInLeft' delay="200ms">
                                        <div className="award-item">
                                            <i className="fab fa-laravel" />
                                            <h4>Coding Awards</h4>
                                        </div>
                                    </Animate>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV1;