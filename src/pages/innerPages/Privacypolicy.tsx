import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ThemeDark from "../../components/switcher/ThemeDark";
import DarkClass from "../../components/classes/DarkClass";

const Privacypolicy = () => {
    return (
        <>
            <Helmet>
                <title>Ammune.ai | API Security</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Privacy Policy' breadCrumb='Privacy Policy' />
                <div className={`about-style-seven-area default-padding bg-gray }`}>
                    <div className="container">
                        <div className="about-style-one-items">
                            <div className="row">
                                <div className="col-lg-12 ">
                                    <h4>Introduction</h4>
                                    <p>Welcome to Ammune.AI (the "Website"). Ammune™ is an AI-based autonomous API security solution that protects from advanced API attacks, with a very low error rate. The Website is owned and operated by Ammune AI Inc. (the "Company", or "we", "us", "our").
                                        We are committed to complying with applicable data protection laws. This Privacy Policy (“Policy”) explains how we collect and use your information when you browse and use the Website. </p>
                                    <p>The Website is not intended for users under the age of 18. We do not knowingly collect information or data from children under the age of 18 or knowingly allow minors under the age of 18 to use the Website.</p>
                                    <p>This Policy may be amended from time to time. We will post any change to this Policy on our Website at a reasonable time in advance of the effective date of the change, and we will also make efforts to proactively notify you of the changes if we have your email address.</p>

                                    <h4>Contact us</h4>
                                    <p>If you have any questions, comments or concerns regarding this Policy or our processing of your personal information, please email us at info@ammune.ai.</p>

                                    <h4>What we collect and why</h4>
                                    <div className="table-responsive">
                                        <table className="table" style={{ borderRadius: '20px' }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ minWidth: '100px' }}>Scenario</th>
                                                    <th style={{ minWidth: '200px' }}>Purposes</th>
                                                    <th style={{ minWidth: '300px' }}>Categories of information processed</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Registering to the Website</td>
                                                    <td>Creating your account on the Website; our business development</td>
                                                    <td>Your email address and password. If you sign up using your Google account or your account on Facebook, we will also collect any profile information that is publicly available. Please note that upon registration, you have the option to choose whether your account will be public (i.e., whether your account details will appear next to comments you leave on the Website).</td>
                                                </tr>
                                                <tr>
                                                    <td>Contacting us through our online chat</td>
                                                    <td>Responding to your questions and inquiries and further contacting you regarding such questions and inquiries; maintaining our customer relations with you; our business development</td>
                                                    <td>Your name, email address and the content of your messages, including any attachments you send through the chat. Please use discretion when deciding which information to share through the chat.</td>
                                                </tr>
                                                <tr>
                                                    <td>Applying to become a partner of the Company</td>
                                                    <td>Handling your request to become a partner; maintaining our customer relations with you</td>
                                                    <td>Your full name, username and password, email address and phone number.</td>
                                                </tr>
                                                <tr>
                                                    <td>Commenting on our blog posts</td>
                                                    <td>Operation of the website; our business development</td>
                                                    <td>The content of your comment, including any attachments you upload as part of the comment. If you comment as a registered user with a public account, your account details will appear next to your comment. Please note that your comments will be posted publicly and all other Website visitors will be able to read it.</td>
                                                </tr>
                                                <tr>
                                                    <td>Use of cookies on the Website</td>
                                                    <td>Operating the Website; our business development</td>
                                                    <td>Information concerning your use of the Website, e.g., IP address from which you access the Website, time and date of access, type of device and browser used, language used, links clicked via a mouse or a touch screen, and actions taken while using the Website.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>


                                    <p>You do not have a legal obligation to provide the above Information; however, if you choose to not share this information with us, we may not be able to create your account on the Website, respond to your questions and inquiries, or handle your request to become a partner of the Company.</p>

                                    <h4>Methods and sources for collecting your personal information</h4>
                                    <p><b>We collect the personal information from several sources:</b></p>
                                    <ul>
                                        <li>1- Directly from you when you register to the Website, comment on our blog posts, contact us through the chat, or apply to become our partner.</li>
                                        <li>2- From our service providers helping us to operate the Website.</li>
                                        <li>Through the device you use to access our Website.</li>
                                    </ul>
                                    <br />
                                    <h4>Sharing your personal information</h4>
                                    <p>We will not share your information with third parties, except in the events listed below or when you provide us your explicit and informed consent.</p>

                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th style={{ minWidth: '200px' }} >Scenario</th>
                                                    <th style={{ minWidth: '200px' }}>Purposes</th>
                                                    <th style={{ minWidth: '200px' }}>Examples of third parties involved</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>We will share your information with our service providers who assist us with the internal operations of the Website. These companies are authorized to use your personal information in this context only as necessary to provide these services to us and not for their own promotional purposes.</td>
                                                    <td>Operating the Website and managing our business</td>
                                                    <td>Google</td>
                                                </tr>
                                                <tr>
                                                    <td>If you abused your rights to use the Website or violated any applicable law while engaging with us</td>
                                                    <td>Responding to, handling, and mitigating suspected violations of law in connection with our business</td>
                                                    <td>Competent authorities, legal counsels, and advisors</td>
                                                </tr>
                                                <tr>
                                                    <td>If a judicial, governmental, or regulatory authority requires us to disclose your information</td>
                                                    <td>Complying with a binding request from a competent authority</td>
                                                    <td>Competent authorities</td>
                                                </tr>
                                                <tr>
                                                    <td>If the operation of the Website or our business is organized within a different framework, or through another legal structure or entity</td>
                                                    <td>Enabling a structural change in the operation of the Website and our business.</td>
                                                    <td>The target entity of the merger or acquisition, legal counsels, and advisors.</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                    <h4>Cookies</h4>
                                    <p>When you interact with our Website, we obtain certain information using automated technologies, such as cookies. A “cookie” is a text file that websites send to a visitor’s computer or other internet-connected device to uniquely identify the visitor’s browser or to store information or settings in the browser.</p>
                                    <p><b>We use cookies on the Website for several purposes, as detailed below:</b></p>
                                    <p><b>Strictly necessary cookies.  </b> These cookies are strictly necessary for the functioning of the Website. You can set your browser to block or alert you about these cookies, but some parts of the Website may not function properly.</p>

                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Cookie name</th>
                                                    <th>Source</th>
                                                    <th>Expiry</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>_ga</td>
                                                    <td>Third party – Google Analytics</td>
                                                    <td>2 years</td>
                                                </tr>
                                                <tr>
                                                    <td>_gid</td>
                                                    <td>Third party – Google Analytics</td>
                                                    <td>24 hours</td>
                                                </tr>
                                                <tr>
                                                    <td>_gat</td>
                                                    <td>Third party – Google Analytics</td>
                                                    <td>1 minute</td>
                                                </tr>
                                                <tr>
                                                    <td>session_token</td>
                                                    <td>First party – React App (for user session authentication)</td>
                                                    <td>Session</td>
                                                </tr>
                                                <tr>
                                                    <td>csrf_token</td>
                                                    <td>First party – React App (security protection)</td>
                                                    <td>Session</td>
                                                </tr>
                                                <tr>
                                                    <td>consent_status</td>
                                                    <td>First party – React App</td>
                                                    <td>6 months</td>
                                                </tr>
                                                <tr>
                                                    <td>theme_preference</td>
                                                    <td>First party – React App</td>
                                                    <td>1 year</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>



                                    <p><b>Analytics cookies. </b> These cookies track users' session and actions on the Website. You can disable these cookies through our cookies management center. Please bear in mind that deleting or disabling cookies may affect your experience when using the Website.</p>

                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Cookie name</th>
                                                    <th>Source</th>
                                                    <th>Expiry</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>svSession </td>
                                                    <td>First party </td>
                                                    <td>1 year and 1 month </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h4>
                                        Data retention and security
                                    </h4>
                                    <p><b>We retain your information for as long as needed to operate the Website or to maintain our customer relations with you, and thereafter as needed for record-keeping matters.</b></p>

                                    <p> pWe will retain your information for as long as needed to operate the Website or maintain our customer relations with you. Thereafter, we will still retain your personal information as necessary to comply with our legal obligations, resolve disputes, establish, and defend legal claims and enforce our agreements. </p>


                                    <p><b>We implement measures to secure your information</b></p>
                                    <p>We implement measures to reduce the risks of damage, loss of information and unauthorized access or use of information. However, these measures do not provide absolute information security. Therefore, although efforts are made to secure your personal information, there is no guarantee that it will be immune from information security risks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Privacypolicy;