import { Helmet } from "react-helmet-async";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ThemeDark from "../../components/switcher/ThemeDark";
import DarkClass from "../../components/classes/DarkClass";
import SplitText from "../../components/animation/SplitText.jsx";
import useScrollAnimation from "../../hooks/useScrollAnimation.js";

const Apisecurity = () => {
    const containerRef = useScrollAnimation();

    return (
        <>
            <Helmet>
                <title>Enterprise Grade API Protection Security - Ammune</title>
                <meta name="keywords" content="API security platform, enterprise API protection, API threat detection, API compliance" />
                <meta name="description" content="Enterprise-grade API protection and security platform providing advanced threat detection, compliance, and performance at scale" />
            </Helmet>

            <LayoutV1>
                {/* Breadcrumb Section */}
                <div className="breadcrumb-area text-center bg-cover" style={{ backgroundImage: 'url(/path/to/breadcrumb-bg.jpg)' }}>
                    <div className="container">
                        <div className="breadcrumb-inner">
                            <h2 className="page-title">API Security Platform</h2>
                            <ul className="page-list">
                                <li><a href="/">Home</a></li>
                                <li>API Security</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Main API Security Content */}
                <div className="about-style-six-area blurry-shape-right blurry-shape-top-left bg-gray default-padding">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <div className="thumb-style-four svgimg">
                                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 355 376.678" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 355 383" height="383" width="355" data-type="ugc" role="presentation" aria-hidden="true" aria-label="">
                                        <g>
                                            <g filter="url(#6a46ce83-25e3-46c9-b099-555c9a969568_comp-m5njb9v2)">
                                                <path fill="url(#89bf84e3-f247-48a6-a385-c09631832121_comp-m5njb9v2)" d="M230.343 178.177c0 29.559-23.962 53.521-53.521 53.521s-53.521-23.962-53.521-53.521 23.962-53.521 53.521-53.521 53.521 23.962 53.521 53.521"></path>
                                                <path strokeWidth="2.71" stroke="#ffffff" d="M228.988 178.177c0 28.81-23.356 52.166-52.166 52.166s-52.166-23.356-52.166-52.166 23.356-52.166 52.166-52.166 52.166 23.356 52.166 52.166z" fill="none"></path>
                                                <path fill="url(#1ef7d9d1-f695-4be6-8f20-f2bdbadcb554_comp-m5njb9v2)" d="M176.822 212.051q-6.966 0-13.148-2.67-6.183-2.671-10.783-7.273-4.602-4.6-7.272-10.782t-2.671-13.149q0-7.022 2.671-13.176t7.272-10.755q4.6-4.602 10.783-7.272t13.148-2.671q7.022 0 13.176 2.671 6.155 2.67 10.755 7.272 4.602 4.6 7.273 10.755t2.67 13.176q0 6.967-2.67 13.149t-7.273 10.782q-4.6 4.602-10.755 7.273-6.154 2.67-13.176 2.67m0-5.424q2.73-3.62 4.595-7.303t3.038-8.05H169.19q1.242 4.506 3.073 8.188t4.559 7.165m-6.905-.981q-2.05-2.941-3.682-6.688a43.7 43.7 0 0 1-2.537-7.684h-12.096q2.825 5.555 7.577 9.333t10.738 5.039m13.81 0q5.986-1.26 10.738-5.039t7.577-9.333h-12.095a56 56 0 0 1-2.709 7.718q-1.632 3.747-3.511 6.654m-34.368-19.72h13.256a45 45 0 0 1-.488-3.899 49 49 0 0 1 0-7.7q.152-1.91.488-3.898h-13.256a28 28 0 0 0-.788 3.778 29 29 0 0 0-.274 3.97 28.6 28.6 0 0 0 1.062 7.749m18.603 0h17.72q.336-1.989.487-3.864t.15-3.885q0-2.008-.15-3.885a45 45 0 0 0-.487-3.863h-17.72a45 45 0 0 0-.486 3.863 48 48 0 0 0-.151 3.885q0 2.01.151 3.885t.486 3.864m23.068 0h13.255q.515-1.818.788-3.778.275-1.962.275-3.971t-.275-3.97a28 28 0 0 0-.788-3.778H191.03a45 45 0 0 1 .487 3.898q.151 1.91.151 3.85t-.151 3.85a45 45 0 0 1-.487 3.899m-1.083-20.846h12.095q-2.858-5.622-7.525-9.333-4.667-3.71-10.79-5.074a44.3 44.3 0 0 1 3.648 6.81 49 49 0 0 1 2.572 7.597m-20.757 0h15.265q-1.242-4.47-3.124-8.239a41.6 41.6 0 0 0-4.509-7.113 41.7 41.7 0 0 0-4.509 7.113q-1.881 3.769-3.123 8.239m-17.588 0h12.096a49 49 0 0 1 2.572-7.597q1.597-3.697 3.647-6.81-6.157 1.365-10.806 5.092-4.65 3.726-7.509 9.315"></path>
                                            </g>
                                            <path fill="#D9D9D9" d="M273.702 178.178c0 53.505-43.375 96.879-96.88 96.879s-96.88-43.374-96.88-96.879 43.375-96.88 96.88-96.88 96.88 43.374 96.88 96.88m-192.862 0c0 53.009 42.972 95.982 95.982 95.982s95.983-42.973 95.983-95.982-42.973-95.983-95.983-95.983-95.982 42.973-95.982 95.983"></path>
                                            <path fill="#D9D9D9" d="M311.641 178.177c0 74.458-60.36 134.819-134.818 134.819s-134.82-60.361-134.82-134.819 60.361-134.819 134.82-134.819c74.458 0 134.818 60.361 134.818 134.819m-268.389 0c0 73.769 59.802 133.57 133.571 133.57 73.768 0 133.57-59.801 133.57-133.57s-59.802-133.57-133.57-133.57c-73.769 0-133.57 59.801-133.57 133.57"></path>
                                            <path fill="#D9D9D9" d="M355 177.5c0 98.031-79.469 177.5-177.5 177.5C79.47 355 0 275.531 0 177.5 0 79.47 79.47 0 177.5 0 275.531 0 355 79.47 355 177.5m-353.356 0c0 97.123 78.733 175.856 175.856 175.856S353.356 274.623 353.356 177.5 274.623 1.644 177.5 1.644 1.644 80.377 1.644 177.5"></path>
                                            <g filter="url(#60bb4426-8f1c-4827-a5c3-1f984e4b5d9b_comp-m5njb9v2)">
                                                <path shapeRendering="crispEdges" fill="#F5F5F5" d="M295.382 177.5v.001c0 13.47-10.92 24.389-24.389 24.389h-.001c-13.47 0-24.389-10.92-24.389-24.389v-.001c0-13.47 10.92-24.389 24.389-24.389h.001c13.47 0 24.389 10.92 24.389 24.389"></path>
                                                <path shapeRendering="crispEdges" strokeDasharray="2.71 2.71" strokeWidth="1.355" stroke="#67A3FF" d="M294.705 177.501c0 13.096-10.616 23.712-23.712 23.712s-23.712-10.616-23.712-23.712 10.616-23.712 23.712-23.712 23.712 10.616 23.712 23.712z" fill="none"></path>
                                                <path fill="#67A3FF" d="M263.54 186.309q-2.809 0-4.792-1.952t-1.983-4.76q0-2.487 1.592-4.422 1.593-1.937 4.063-2.291.65-3.038 3.055-4.969 2.404-1.93 5.517-1.931 3.678 0 6.242 2.566 2.566 2.565 2.566 6.242v.677h.417q2.141.166 3.572 1.723 1.431 1.555 1.431 3.697 0 2.267-1.577 3.843t-3.843 1.577zm0-2.033h16.26q1.422 0 2.405-.982.982-.983.982-2.405 0-1.423-.982-2.405-.983-.982-2.405-.982h-2.033v-2.71q0-2.812-1.981-4.794t-4.794-1.981q-2.811 0-4.793 1.981-1.981 1.982-1.981 4.794h-.678q-1.964 0-3.353 1.388-1.389 1.389-1.389 3.354t1.389 3.354q1.389 1.388 3.353 1.388"></path>
                                            </g>
                                            <g filter="url(#6971f324-a6fb-4a56-a53e-122ebc9c99b9_comp-m5njb9v2)">
                                                <path shapeRendering="crispEdges" fill="#F5F5F5" d="M92.138 105.687v.001c0 13.47-10.92 24.389-24.389 24.389h-.001c-13.47 0-24.389-10.92-24.389-24.389v-.001c0-13.47 10.92-24.389 24.389-24.389h.001c13.47 0 24.389 10.92 24.389 24.389"></path>
                                                <path shapeRendering="crispEdges" strokeDasharray="2.71 2.71" strokeWidth="1.355" stroke="#FFA767" d="M91.46 105.687c0 13.096-10.616 23.712-23.712 23.712s-23.712-10.616-23.712-23.712 10.616-23.712 23.712-23.712S91.46 92.591 91.46 105.687z" fill="none"></path>
                                                <path fill="#FFA767" d="M61.39 119.914a2.37 2.37 0 0 1-1.737-.711 2.37 2.37 0 0 1-.712-1.739V93.909q0-1.026.712-1.738a2.36 2.36 0 0 1 1.738-.711h12.715q1.027 0 1.739.711.71.712.71 1.738v23.555q0 1.027-.71 1.739a2.37 2.37 0 0 1-1.739.711zm-.416-6.41v3.96q0 .157.13.287t.287.13h12.715q.157 0 .287-.13a.4.4 0 0 0 .13-.287v-3.96zm6.775 3.387q.497 0 .848-.35.35-.351.35-.848 0-.498-.35-.848a1.16 1.16 0 0 0-.848-.351q-.498 0-.849.351-.35.35-.35.848 0 .497.35.848.351.35.849.35m-6.775-5.42h13.55V97.218h-13.55zm0-16.285h13.55v-1.277q0-.156-.13-.286a.4.4 0 0 0-.288-.13H61.391q-.157 0-.287.13a.4.4 0 0 0-.13.286z"></path>
                                            </g>
                                            <g filter="url(#5909e252-e4ba-4a77-8940-f094c8a9ed79_comp-m5njb9v2)">
                                                <path shapeRendering="crispEdges" fill="#F5F5F5" d="M199.18 352.289c0 13.47-10.92 24.389-24.389 24.389h-.001c-13.47 0-24.389-10.92-24.389-24.389v-.001c0-13.47 10.92-24.389 24.389-24.389h.001c13.47 0 24.389 10.92 24.389 24.389"></path>
                                                <path shapeRendering="crispEdges" strokeDasharray="2.71 2.71" strokeWidth="1.355" stroke="#B298FF" d="M198.502 352.29c0 13.096-10.616 23.712-23.712 23.712s-23.712-10.616-23.712-23.712 10.616-23.712 23.712-23.712 23.712 10.616 23.712 23.712z" fill="none"></path>
                                                <path fill="#B298FF" d="M172.758 361.774v-2.71h-8.39a2.36 2.36 0 0 1-1.738-.711 2.36 2.36 0 0 1-.712-1.738v-13.393q0-1.027.712-1.738a2.36 2.36 0 0 1 1.738-.712h20.845a2.36 2.36 0 0 1 1.738.712q.711.71.711 1.738v13.393q0 1.027-.711 1.738a2.36 2.36 0 0 1-1.738.711h-8.39v2.71h1.693q.433 0 .725.292a1 1 0 0 1 .292.724q0 .433-.292.725a1 1 0 0 1-.725.292h-7.452a1 1 0 0 1-.724-.292.98.98 0 0 1-.292-.725q0-.432.292-.724a.98.98 0 0 1 .724-.292zm-8.39-4.742h20.845q.156 0 .287-.13a.4.4 0 0 0 .13-.287v-13.393q0-.157-.13-.287a.4.4 0 0 0-.287-.13h-20.845q-.157 0-.287.13a.4.4 0 0 0-.13.287v13.393q0 .156.13.287t.287.13"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="about-style-six-info text-scroll-animation" ref={containerRef}>
                                    <div className="info">
                                        <div className="d-flex">
                                            <h2 className="title split-text mb-20">
                                                <SplitText
                                                    delay={40}
                                                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                                    easing="easeOutCubic"
                                                    threshold={0.2}
                                                    rootMargin="-50px"
                                                >
                                                    API Security Platform
                                                </SplitText>
                                            </h2>
                                        </div>
                                        <p className="lead mb-30">
                                            An API security platform is a specialized solution designed to protect application programming interfaces (APIs) from misuse, abuse, and attacks across their entire lifecycle. As APIs have become the backbone of modern applications, powering mobile apps, cloud services, microservices, and third-party integrations, they have also become a prime target for attackers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Protection Capabilities Section */}
                <div className="capabilities-area  default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center mb-60">
                                <h2 className="section-title text-white">
                                    <SplitText
                                        delay={40}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                    >
                                        Core Protection Capabilities
                                    </SplitText>
                                </h2>
                                <p className="section-subtitle">Comprehensive security features for enterprise-grade API protection</p>
                            </div>
                        </div>

                        <div className="row">
                            {/* API Discovery & Inventory */}
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="capability-card h-100">
                                    <div className="icon-box">
                                        <i className="fas fa-search"></i>
                                    </div>
                                    <h4>API Discovery & Inventory</h4>
                                    <p>Identifies, catalogs, and manages all APIs within an organization, including shadow and undocumented APIs that may be active and exposed.</p>
                                    <ul className="feature-list">
                                        <li>Complete API visibility</li>
                                        <li>Shadow API detection</li>
                                        <li>Automated inventory management</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Threat Detection & Prevention */}
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="capability-card h-100">
                                    <div className="icon-box">
                                        <i className="fas fa-shield-alt"></i>
                                    </div>
                                    <h4>Threat Detection & Prevention</h4>
                                    <p>Detects and prevents attacks like credential stuffing, token abuse, injection attacks, and business logic abuse aligned with OWASP API Top 10.</p>
                                    <ul className="feature-list">
                                        <li>Real-time threat detection</li>
                                        <li>Behavioral analysis</li>
                                        <li>OWASP API Top 10 coverage</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Authentication & Authorization */}
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="capability-card h-100">
                                    <div className="icon-box">
                                        <i className="fas fa-user-lock"></i>
                                    </div>
                                    <h4>Authentication & Authorization Enforcement</h4>
                                    <p>Ensures only verified users and applications can access API resources using API keys, OAuth 2.0, JWT tokens, or mutual TLS.</p>
                                    <ul className="feature-list">
                                        <li>Strong identity validation</li>
                                        <li>Fine-grained access control</li>
                                        <li>Multi-factor authentication</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Behavioral & Anomaly Analysis */}
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="capability-card h-100">
                                    <div className="icon-box">
                                        <i className="fas fa-chart-line"></i>
                                    </div>
                                    <h4>Behavioral & Anomaly Analysis</h4>
                                    <p>Analyzes normal API usage patterns and detects deviations indicating malicious activity like account takeover or data scraping.</p>
                                    <ul className="feature-list">
                                        <li>Continuous monitoring</li>
                                        <li>Machine learning detection</li>
                                        <li>Zero-day threat prevention</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Schema & Payload Validation */}
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="capability-card h-100">
                                    <div className="icon-box">
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <h4>Schema & Payload Validation</h4>
                                    <p>Ensures API requests and responses follow defined data structures, preventing malformed or malicious payloads from reaching backend services.</p>
                                    <ul className="feature-list">
                                        <li>OpenAPI/JSON Schema validation</li>
                                        <li>Data integrity protection</li>
                                        <li>Input sanitization</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Rate Limiting & Abuse Protection */}
                            <div className="col-lg-4 col-md-6 mb-30">
                                <div className="capability-card h-100">
                                    <div className="icon-box">
                                        <i className="fas fa-tachometer-alt"></i>
                                    </div>
                                    <h4>Rate Limiting & Abuse Protection</h4>
                                    <p>Controls request rates to prevent brute-force attacks, denial-of-service attempts, and excessive data scraping.</p>
                                    <ul className="feature-list">
                                        <li>Dynamic rate limiting</li>
                                        <li>DoS protection</li>
                                        <li>Automated throttling</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enterprise-Grade Features Section */}
                <div className="enterprise-features pt-100 pb-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-30">
                                <div className="feature-content">
                                    <h2 className="mb-30">Enterprise-Grade API Protection</h2>
                                    <p className="lead mb-30">
                                        A comprehensive security approach designed to safeguard APIs at scale across complex, distributed environments. Provides complete visibility into all APIs—public, private, partner, shadow, and legacy.
                                    </p>
                                    <div className="features-list">
                                        <div className="feature-item">
                                            <i className="fas fa-check-circle text-primary"></i>
                                            <span>Built for high performance and scalability</span>
                                        </div>
                                        <div className="feature-item">
                                            <i className="fas fa-check-circle text-primary"></i>
                                            <span>Seamless integration with cloud and microservices</span>
                                        </div>
                                        <div className="feature-item">
                                            <i className="fas fa-check-circle text-primary"></i>
                                            <span>Compliance-ready controls and continuous enforcement</span>
                                        </div>
                                        <div className="feature-item">
                                            <i className="fas fa-check-circle text-primary"></i>
                                            <span>Real-time traffic monitoring and threat prevention</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="feature-image">
                                    <div className="stats-box">
                                        <div className="stat-item">
                                            <h3>99.9%</h3>
                                            <p>Uptime SLA</p>
                                        </div>
                                        <div className="stat-item">
                                            <h3>&lt;10ms</h3>
                                            <p>Latency Impact</p>
                                        </div>
                                        <div className="stat-item">
                                            <h3>Millions</h3>
                                            <p>API Calls/sec</p>
                                        </div>
                                        <div className="stat-item">
                                            <h3>Global</h3>
                                            <p>Traffic Distribution</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Real-Time & Scalability Section */}
                <div className="real-time-scalability bg-gray pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-30">
                                <div className="feature-card">
                                    <div className="icon-header">
                                        <i className="fas fa-bolt text-warning"></i>
                                        <h3>Real-Time Protection</h3>
                                    </div>
                                    <p>Detects and stops threats as they happen, preventing data loss, fraud, and service disruption in high-volume API environments.</p>
                                    <ul className="benefits-list">
                                        <li>Instant traffic inspection</li>
                                        <li>Immediate threat detection</li>
                                        <li>Live policy enforcement</li>
                                        <li>Continuous schema validation</li>
                                        <li>Behavioral analysis in motion</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="feature-card">
                                    <div className="icon-header">
                                        <i className="fas fa-expand-alt text-info"></i>
                                        <h3>Enterprise Scalability</h3>
                                    </div>
                                    <p>Handles massive API request volumes with elastic horizontal scaling, multi-cloud support, and distributed enforcement.</p>
                                    <ul className="benefits-list">
                                        <li>High-throughput traffic handling</li>
                                        <li>Multi-cloud and hybrid support</li>
                                        <li>Centralized management</li>
                                        <li>Efficient data processing</li>
                                        <li>Global API protection</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Compliance & Benefits Section */}
                <div className="compliance-benefits pt-100 pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-30">
                                <div className="compliance-card">
                                    <h3 className="mb-30">Compliance-Ready Platform</h3>
                                    <p className="mb-30">Designed to help organizations meet regulatory, legal, and internal security requirements without operational friction.</p>
                                    <div className="compliance-badges">
                                        <span className="badge">SOC 2</span>
                                        <span className="badge">ISO 27001</span>
                                        <span className="badge">PCI DSS</span>
                                        <span className="badge">HIPAA</span>
                                        <span className="badge">GDPR</span>
                                        <span className="badge">OWASP Top 10</span>
                                    </div>
                                    <div className="mt-30">
                                        <h5>Key Features:</h5>
                                        <ul>
                                            <li>Built-in security controls</li>
                                            <li>Continuous monitoring & auditability</li>
                                            <li>Policy-based governance</li>
                                            <li>Automated reporting</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="benefits-card">
                                    <h3 className="mb-30">Enterprise Benefits</h3>
                                    <div className="benefits-list">
                                        <div className="benefit-item">
                                            <i className="fas fa-chart-line"></i>
                                            <div>
                                                <h5>Reduced Risk</h5>
                                                <p>Minimize data breaches and account takeovers</p>
                                            </div>
                                        </div>
                                        <div className="benefit-item">
                                            <i className="fas fa-eye"></i>
                                            <div>
                                                <h5>Improved Visibility</h5>
                                                <p>Complete insight into API usage and exposure</p>
                                            </div>
                                        </div>
                                        <div className="benefit-item">
                                            <i className="fas fa-bolt"></i>
                                            <div>
                                                <h5>Faster Detection</h5>
                                                <p>Quick identification of zero-day and logic-based attacks</p>
                                            </div>
                                        </div>
                                        <div className="benefit-item">
                                            <i className="fas fa-shield-alt"></i>
                                            <div>
                                                <h5>Stronger Compliance</h5>
                                                <p>Enhanced posture for regulatory requirements</p>
                                            </div>
                                        </div>
                                        <div className="benefit-item">
                                            <i className="fas fa-users"></i>
                                            <div>
                                                <h5>Better Collaboration</h5>
                                                <p>Improved teamwork between security and development teams</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="how-it-works pt-80 pb-80 bg-dark text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center mb-50">
                                <h2>How It Works</h2>
                                <p className="lead">Seamless integration and real-time protection for your API ecosystem</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="step-card">
                                    <div className="step-number">01</div>
                                    <h4>Integration</h4>
                                    <p>Integrates with API gateways, service meshes, or operates out-of-band by analyzing traffic copies</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="step-card">
                                    <div className="step-number">02</div>
                                    <h4>Monitoring</h4>
                                    <p>Monitors API calls in real time, comparing behavior against known specifications and learned baselines</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="step-card">
                                    <div className="step-number">03</div>
                                    <h4>Analysis</h4>
                                    <p>Detects anomalies, policy violations, and malicious behavior using advanced behavioral analysis</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-30">
                                <div className="step-card">
                                    <div className="step-number">04</div>
                                    <h4>Action</h4>
                                    <p>Takes immediate action—blocking requests, alerting teams, or triggering automated responses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}


                {/* Embedded CSS Styles */}
                <style >{`
                /* API Security Page Styles */
                .capability-card {
                    background: white;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    height: 100%;
                }
                
                .capability-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                
                .capability-card .icon-box {
                    width: 70px;
                    height: 70px;
                    background: linear-gradient(135deg, #5E51F8, #4BDDEC);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 25px;
                }
                
                .capability-card .icon-box i {
                    font-size: 28px;
                    color: white;
                }
                
                .capability-card h4 {
                    font-size: 20px;
                    margin-bottom: 15px;
                    color: #333;
                }
                
                .feature-list {
                    list-style: none;
                    padding: 0;
                    margin-top: 20px;
                }
                
                .feature-list li {
                    padding: 8px 0;
                    padding-left: 25px;
                    position: relative;
                    color: #666;
                }
                
                .feature-list li:before {
                    content: "✓";
                    position: absolute;
                    left: 0;
                    color: #5E51F8;
                    font-weight: bold;
                }
                
                .stats-box {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 25px;
                    padding: 30px;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
                }
                
                .stat-item {
                    text-align: center;
                    padding: 20px;
                    background: #f8f9fa;
                    border-radius: 12px;
                    transition: transform 0.3s ease;
                }
                
                .stat-item:hover {
                    transform: translateY(-5px);
                }
                
                .stat-item h3 {
                    font-size: 36px;
                    margin-bottom: 10px;
                    background: linear-gradient(135deg, #5E51F8, #4BDDEC);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .features-list {
                    margin-top: 30px;
                }
                
                .feature-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                }
                
                .feature-item i {
                    margin-right: 15px;
                    font-size: 20px;
                }
                
                .feature-card {
                    // background: white;
                    padding: 40px;
                    border-radius: 16px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    height: 100%;
                }
                
                .feature-card .icon-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 25px;
                }
                
                .feature-card .icon-header i {
                    font-size: 40px;
                    margin-right: 20px;
                }
                
                .benefits-list {
                    list-style: none;
                    padding: 0;
                    margin-top: 25px;
                }
                
                .benefits-list li {
                    padding: 12px 0;
                    padding-left: 35px;
                    position: relative;
                    border-bottom: 1px solid #eee;
                }
                
                .benefits-list li:before {
                    content: "→";
                    position: absolute;
                    left: 0;
                    color: #5E51F8;
                    font-weight: bold;
                    font-size: 18px;
                }
                
                .compliance-card, .benefits-card {
                    // background: white;
                    padding: 40px;
                    border-radius: 16px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    height: 100%;
                }
                
                .compliance-badges {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-bottom: 30px;
                }
                
                .badge {
                    padding: 8px 16px;
                    background: #f0f4ff;
                    color: #5E51F8;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 600;
                }
                
                .benefit-item {
                    display: flex;
                    align-items: center;
                    padding: 20px;
                    background: #f8f9fa;
                    border-radius: 12px;
                    margin-bottom: 15px;
                    transition: transform 0.3s ease;
                }
                
                .benefit-item:hover {
                    transform: translateX(10px);
                }
                
                .benefit-item i {
                    font-size: 24px;
                    color: #5E51F8;
                    margin-right: 20px;
                    min-width: 40px;
                }
                    .benefit-item h5, .benefit-item p{
                    color: #333;
                    }
                
                .step-card {
                    text-align: center;
                    padding: 30px;
                    background: rgba(255,255,255,0.05);
                    border-radius: 12px;
                    border: 1px solid rgba(255,255,255,0.1);
                    transition: transform 0.3s ease;
                    height: 100%;
                }
                
                .step-card:hover {
                    transform: translateY(-10px);
                    background: rgba(255,255,255,0.1);
                }
                
                .step-number {
                    font-size: 48px;
                    font-weight: 700;
                    color: rgba(255,255,255,0.1);
                    margin-bottom: 20px;
                }
                
                .cta-section {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                }
                
                .section-title {
                    font-size: 42px;
                    margin-bottom: 20px;
                }
                
                .section-subtitle {
                    font-size: 18px;
                    color: #666;
                    max-width: 600px;
                    margin: 0 auto;
                }
                
                /* Breadcrumb Styles */
                .breadcrumb-area {
                    padding: 80px 0;
                    background: linear-gradient(135deg, #5E51F8 0%, #4BDDEC 100%);
                    color: white;
                }
                
                .page-title {
                    font-size: 48px;
                    margin-bottom: 20px;
                }
                
                .page-list {
                    list-style: none;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                }
                
                .page-list li a {
                    color: rgba(255,255,255,0.8);
                    text-decoration: none;
                }
                
                .page-list li:not(:last-child):after {
                    content: ">";
                    margin-left: 10px;
                    color: rgba(255,255,255,0.8);
                }
                
                /* Responsive */
                @media (max-width: 768px) {
                    .stats-box {
                        grid-template-columns: 1fr;
                    }
                    
                    .feature-card, .compliance-card, .benefits-card {
                        padding: 25px;
                    }
                    
                    .section-title {
                        font-size: 32px;
                    }
                    
                    .page-title {
                        font-size: 36px;
                    }
                    
                    .step-card {
                        margin-bottom: 20px;
                    }
                }
                    .capability-card p, .stats-box p{
                    color: #333 !important;
                    }
            `}</style>

                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Apisecurity;