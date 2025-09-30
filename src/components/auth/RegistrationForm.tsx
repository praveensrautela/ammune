import RegistrationForm from "../form/RegistrationForm";

interface DataType {
    sectionClass?: string
}

const Loginform = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`contact-area overflow-hidden relative ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="contact-style-one-items">
                        <div className="row">
                            <div className="col-tact-stye-one col-lg-5">
                                <div className="contact-style-one-info">
                                    <ul className="contact-address">
                                        <h2>Enter the World Of Ammune.Ai
                                        </h2>
                                        <p>
                                            Navigating the fast-paced world of API cybersecurity can seem intimidating. That's why we're here to ohelp you along your journey. By becoming a Partner of Ammune.ai, you're signing up for first-hand access to industry updates, research, trends, company information, events, and even exciting goodies!
                                        </p>
                                        <h5><b>Stay in the Know</b></h5>
                                        <p>Get access to a wide range of resources</p>
                                    </ul>
                                    <ul>
                                        <li className="mb-0">
                                            <div className="row">
                                                <div className="col-2">
                                                    <i className="fa fa-book fa-2x"></i>
                                                </div>
                                                <div className="col-10">
                                                    <p className="mb-0"><b>User Guides</b></p>
                                                    <p>Get in-depth instructions on using Ammune.ai's API security platform.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="mb-0">
                                            <div className="row">
                                                <div className="col-2">
                                                    <i className="fa fa-file-alt fa-2x"></i>
                                                </div>
                                                <div className="col-10">
                                                    <p className="mb-0"><b>Case Studies & White Papers</b></p>
                                                    <p>See Ammune.ai in action with our past client success stories.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="mb-0">
                                            <div className="row">
                                                <div className="col-2">
                                                    <i className="fa fa-chart-line fa-2x"></i>
                                                </div>
                                                <div className="col-10">
                                                    <p className="mb-0"><b>Trends & Events</b></p>
                                                    <p>Stay on top of industry happenings.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="mb-0">
                                            <div className="row">
                                                <div className="col-2">
                                                    <i className="fa fa-question-circle fa-2x"></i>
                                                </div>
                                                <div className="col-10">
                                                    <p className="mb-0"><b>FAQs</b></p>
                                                    <p>Find answers to all your queries here.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-tact-stye-one col-lg-6 offset-lg-1">
                                <div className="contact-form-style-one">
                                    <h4 className="sub-title">Sign up</h4>
                                    <RegistrationForm />
                                </div>
                                <div className="mt-2 text-end">
                                    <p>Already have an account? <a href="/login">Sign in</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loginform;