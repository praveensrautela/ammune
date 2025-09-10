import thumb2 from "/assets/img/thumb/2.jpg";
import arrowIcon from "/assets/img/icon/arrow.png";
import ServiceListData from "../../../src/assets/jsonData/services/ServiceListData.json";
import ServiceList from "../services/ServiceList";
import { Link } from "react-router-dom";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { useState } from "react";

interface DataType {
    sectionClass?: string;
}

const AboutV6 = ({ sectionClass }: DataType) => {
    const containerRef = useScrollAnimation();

    const [activeServiceId, setActiveServiceId] = useState(ServiceListData[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className={`about-style-six-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <div className="thumb-style-four">
                                {/* <img src="" alt="Image Not Found" /> */}
                                <svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 355 376.678" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 355 383" height="383" width="355" data-type="ugc" role="presentation" aria-hidden="true" aria-label="">
                                    <g>
                                        <g filter="url(#6a46ce83-25e3-46c9-b099-555c9a969568_comp-m5njb9v2)">
                                            <path fill="url(#89bf84e3-f247-48a6-a385-c09631832121_comp-m5njb9v2)" d="M230.343 178.177c0 29.559-23.962 53.521-53.521 53.521s-53.521-23.962-53.521-53.521 23.962-53.521 53.521-53.521 53.521 23.962 53.521 53.521"></path>
                                            <path stroke-width="2.71" stroke="#ffffff" d="M228.988 178.177c0 28.81-23.356 52.166-52.166 52.166s-52.166-23.356-52.166-52.166 23.356-52.166 52.166-52.166 52.166 23.356 52.166 52.166z" fill="none"></path>
                                            <path fill="url(#1ef7d9d1-f695-4be6-8f20-f2bdbadcb554_comp-m5njb9v2)" d="M176.822 212.051q-6.966 0-13.148-2.67-6.183-2.671-10.783-7.273-4.602-4.6-7.272-10.782t-2.671-13.149q0-7.022 2.671-13.176t7.272-10.755q4.6-4.602 10.783-7.272t13.148-2.671q7.022 0 13.176 2.671 6.155 2.67 10.755 7.272 4.602 4.6 7.273 10.755t2.67 13.176q0 6.967-2.67 13.149t-7.273 10.782q-4.6 4.602-10.755 7.273-6.154 2.67-13.176 2.67m0-5.424q2.73-3.62 4.595-7.303t3.038-8.05H169.19q1.242 4.506 3.073 8.188t4.559 7.165m-6.905-.981q-2.05-2.941-3.682-6.688a43.7 43.7 0 0 1-2.537-7.684h-12.096q2.825 5.555 7.577 9.333t10.738 5.039m13.81 0q5.986-1.26 10.738-5.039t7.577-9.333h-12.095a56 56 0 0 1-2.709 7.718q-1.632 3.747-3.511 6.654m-34.368-19.72h13.256a45 45 0 0 1-.488-3.899 49 49 0 0 1 0-7.7q.152-1.91.488-3.898h-13.256a28 28 0 0 0-.788 3.778 29 29 0 0 0-.274 3.97 28.6 28.6 0 0 0 1.062 7.749m18.603 0h17.72q.336-1.989.487-3.864t.15-3.885q0-2.008-.15-3.885a45 45 0 0 0-.487-3.863h-17.72a45 45 0 0 0-.486 3.863 48 48 0 0 0-.151 3.885q0 2.01.151 3.885t.486 3.864m23.068 0h13.255q.515-1.818.788-3.778.275-1.962.275-3.971t-.275-3.97a28 28 0 0 0-.788-3.778H191.03a45 45 0 0 1 .487 3.898q.151 1.91.151 3.85t-.151 3.85a45 45 0 0 1-.487 3.899m-1.083-20.846h12.095q-2.858-5.622-7.525-9.333-4.667-3.71-10.79-5.074a44.3 44.3 0 0 1 3.648 6.81 49 49 0 0 1 2.572 7.597m-20.757 0h15.265q-1.242-4.47-3.124-8.239a41.6 41.6 0 0 0-4.509-7.113 41.7 41.7 0 0 0-4.509 7.113q-1.881 3.769-3.123 8.239m-17.588 0h12.096a49 49 0 0 1 2.572-7.597q1.597-3.697 3.647-6.81-6.157 1.365-10.806 5.092-4.65 3.726-7.509 9.315"></path>
                                        </g>
                                        <path fill="#D9D9D9" d="M273.702 178.178c0 53.505-43.375 96.879-96.88 96.879s-96.88-43.374-96.88-96.879 43.375-96.88 96.88-96.88 96.88 43.374 96.88 96.88m-192.862 0c0 53.009 42.972 95.982 95.982 95.982s95.983-42.973 95.983-95.982-42.973-95.983-95.983-95.983-95.982 42.973-95.982 95.983"></path>
                                        <path fill="#D9D9D9" d="M311.641 178.177c0 74.458-60.36 134.819-134.818 134.819s-134.82-60.361-134.82-134.819 60.361-134.819 134.82-134.819c74.458 0 134.818 60.361 134.818 134.819m-268.389 0c0 73.769 59.802 133.57 133.571 133.57 73.768 0 133.57-59.801 133.57-133.57s-59.802-133.57-133.57-133.57c-73.769 0-133.57 59.801-133.57 133.57"></path>
                                        <path fill="#D9D9D9" d="M355 177.5c0 98.031-79.469 177.5-177.5 177.5C79.47 355 0 275.531 0 177.5 0 79.47 79.47 0 177.5 0 275.531 0 355 79.47 355 177.5m-353.356 0c0 97.123 78.733 175.856 175.856 175.856S353.356 274.623 353.356 177.5 274.623 1.644 177.5 1.644 1.644 80.377 1.644 177.5"></path>
                                        <g filter="url(#60bb4426-8f1c-4827-a5c3-1f984e4b5d9b_comp-m5njb9v2)">
                                            <path shape-rendering="crispEdges" fill="#F5F5F5" d="M295.382 177.5v.001c0 13.47-10.92 24.389-24.389 24.389h-.001c-13.47 0-24.389-10.92-24.389-24.389v-.001c0-13.47 10.92-24.389 24.389-24.389h.001c13.47 0 24.389 10.92 24.389 24.389"></path>
                                            <path shape-rendering="crispEdges" stroke-dasharray="2.71 2.71" stroke-width="1.355" stroke="#67A3FF" d="M294.705 177.501c0 13.096-10.616 23.712-23.712 23.712s-23.712-10.616-23.712-23.712 10.616-23.712 23.712-23.712 23.712 10.616 23.712 23.712z" fill="none"></path>
                                            <path fill="#67A3FF" d="M263.54 186.309q-2.809 0-4.792-1.952t-1.983-4.76q0-2.487 1.592-4.422 1.593-1.937 4.063-2.291.65-3.038 3.055-4.969 2.404-1.93 5.517-1.931 3.678 0 6.242 2.566 2.566 2.565 2.566 6.242v.677h.417q2.141.166 3.572 1.723 1.431 1.555 1.431 3.697 0 2.267-1.577 3.843t-3.843 1.577zm0-2.033h16.26q1.422 0 2.405-.982.982-.983.982-2.405 0-1.423-.982-2.405-.983-.982-2.405-.982h-2.033v-2.71q0-2.812-1.981-4.794t-4.794-1.981q-2.811 0-4.793 1.981-1.981 1.982-1.981 4.794h-.678q-1.964 0-3.353 1.388-1.389 1.389-1.389 3.354t1.389 3.354q1.389 1.388 3.353 1.388"></path>
                                        </g>
                                        <g filter="url(#6971f324-a6fb-4a56-a53e-122ebc9c99b9_comp-m5njb9v2)">
                                            <path shape-rendering="crispEdges" fill="#F5F5F5" d="M92.138 105.687v.001c0 13.47-10.92 24.389-24.389 24.389h-.001c-13.47 0-24.389-10.92-24.389-24.389v-.001c0-13.47 10.92-24.389 24.389-24.389h.001c13.47 0 24.389 10.92 24.389 24.389"></path>
                                            <path shape-rendering="crispEdges" stroke-dasharray="2.71 2.71" stroke-width="1.355" stroke="#FFA767" d="M91.46 105.687c0 13.096-10.616 23.712-23.712 23.712s-23.712-10.616-23.712-23.712 10.616-23.712 23.712-23.712S91.46 92.591 91.46 105.687z" fill="none"></path>
                                            <path fill="#FFA767" d="M61.39 119.914a2.37 2.37 0 0 1-1.737-.711 2.37 2.37 0 0 1-.712-1.739V93.909q0-1.026.712-1.738a2.36 2.36 0 0 1 1.738-.711h12.715q1.027 0 1.739.711.71.712.71 1.738v23.555q0 1.027-.71 1.739a2.37 2.37 0 0 1-1.739.711zm-.416-6.41v3.96q0 .157.13.287t.287.13h12.715q.157 0 .287-.13a.4.4 0 0 0 .13-.287v-3.96zm6.775 3.387q.497 0 .848-.35.35-.351.35-.848 0-.498-.35-.848a1.16 1.16 0 0 0-.848-.351q-.498 0-.849.351-.35.35-.35.848 0 .497.35.848.351.35.849.35m-6.775-5.42h13.55V97.218h-13.55zm0-16.285h13.55v-1.277q0-.156-.13-.286a.4.4 0 0 0-.288-.13H61.391q-.157 0-.287.13a.4.4 0 0 0-.13.286z"></path>
                                        </g>
                                        <g filter="url(#5909e252-e4ba-4a77-8940-f094c8a9ed79_comp-m5njb9v2)">
                                            <path shape-rendering="crispEdges" fill="#F5F5F5" d="M199.18 352.289c0 13.47-10.92 24.389-24.389 24.389h-.001c-13.47 0-24.389-10.92-24.389-24.389v-.001c0-13.47 10.92-24.389 24.389-24.389h.001c13.47 0 24.389 10.92 24.389 24.389"></path>
                                            <path shape-rendering="crispEdges" stroke-dasharray="2.71 2.71" stroke-width="1.355" stroke="#B298FF" d="M198.502 352.29c0 13.096-10.616 23.712-23.712 23.712s-23.712-10.616-23.712-23.712 10.616-23.712 23.712-23.712 23.712 10.616 23.712 23.712z" fill="none"></path>
                                            <path fill="#B298FF" d="M172.758 361.774v-2.71h-8.39a2.36 2.36 0 0 1-1.738-.711 2.36 2.36 0 0 1-.712-1.738v-13.393q0-1.027.712-1.738a2.36 2.36 0 0 1 1.738-.712h20.845a2.36 2.36 0 0 1 1.738.712q.711.71.711 1.738v13.393q0 1.027-.711 1.738a2.36 2.36 0 0 1-1.738.711h-8.39v2.71h1.693q.433 0 .725.292a1 1 0 0 1 .292.724q0 .433-.292.725a1 1 0 0 1-.725.292h-7.452a1 1 0 0 1-.724-.292.98.98 0 0 1-.292-.725q0-.432.292-.724a.98.98 0 0 1 .724-.292zm-8.39-4.742h20.845q.156 0 .287-.13a.4.4 0 0 0 .13-.287v-13.393q0-.157-.13-.287a.4.4 0 0 0-.287-.13h-20.845q-.157 0-.287.13a.4.4 0 0 0-.13.287v13.393q0 .156.13.287t.287.13"></path>
                                        </g>
                                        <defs fill="none">
                                            <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="120.592" width="120.592" y="123.301" x="116.526" id="6a46ce83-25e3-46c9-b099-555c9a969568_comp-m5njb9v2">
                                                <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
                                                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                                                <feMorphology result="effect1_dropShadow_26_108" in="SourceAlpha" radius="2.71"></feMorphology>
                                                <feOffset dy="2.71"></feOffset>
                                                <feGaussianBlur stdDeviation="2.71"></feGaussianBlur>
                                                <feComposite operator="out" in2="hardAlpha"></feComposite>
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                                                <feBlend result="effect1_dropShadow_26_108" in2="BackgroundImageFix"></feBlend>
                                                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                                                <feMorphology result="effect2_dropShadow_26_108" in="SourceAlpha" radius="1.355"></feMorphology>
                                                <feOffset dy="5.42"></feOffset>
                                                <feGaussianBlur stdDeviation="4.065"></feGaussianBlur>
                                                <feComposite operator="out" in2="hardAlpha"></feComposite>
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                                                <feBlend result="effect2_dropShadow_26_108" in2="effect1_dropShadow_26_108"></feBlend>
                                                <feBlend result="shape" in2="effect2_dropShadow_26_108" in="SourceGraphic"></feBlend>
                                            </filter>
                                            <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="59.618" width="59.618" y="147.691" x="241.183" id="60bb4426-8f1c-4827-a5c3-1f984e4b5d9b_comp-m5njb9v2">
                                                <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
                                                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                                                <feOffset></feOffset>
                                                <feGaussianBlur stdDeviation="2.71"></feGaussianBlur>
                                                <feComposite operator="out" in2="hardAlpha"></feComposite>
                                                <feColorMatrix values="0 0 0 0 0.403922 0 0 0 0 0.639216 0 0 0 0 1 0 0 0 0.75 0"></feColorMatrix>
                                                <feBlend result="effect1_dropShadow_26_108" in2="BackgroundImageFix"></feBlend>
                                                <feBlend result="shape" in2="effect1_dropShadow_26_108" in="SourceGraphic"></feBlend>
                                            </filter>
                                            <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="59.618" width="59.618" y="75.878" x="37.939" id="6971f324-a6fb-4a56-a53e-122ebc9c99b9_comp-m5njb9v2">
                                                <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
                                                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                                                <feOffset></feOffset>
                                                <feGaussianBlur stdDeviation="2.71"></feGaussianBlur>
                                                <feComposite operator="out" in2="hardAlpha"></feComposite>
                                                <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.654902 0 0 0 0 0.403922 0 0 0 0.75 0"></feColorMatrix>
                                                <feBlend result="effect1_dropShadow_26_108" in2="BackgroundImageFix"></feBlend>
                                                <feBlend result="shape" in2="effect1_dropShadow_26_108" in="SourceGraphic"></feBlend>
                                            </filter>
                                            <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="59.618" width="59.618" y="322.481" x="144.981" id="5909e252-e4ba-4a77-8940-f094c8a9ed79_comp-m5njb9v2">
                                                <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
                                                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                                                <feOffset></feOffset>
                                                <feGaussianBlur stdDeviation="2.71"></feGaussianBlur>
                                                <feComposite operator="out" in2="hardAlpha"></feComposite>
                                                <feColorMatrix values="0 0 0 0 0.556863 0 0 0 0 0.403922 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                                                <feBlend result="effect1_dropShadow_26_108" in2="BackgroundImageFix"></feBlend>
                                                <feBlend result="shape" in2="effect1_dropShadow_26_108" in="SourceGraphic"></feBlend>
                                            </filter>
                                            <radialGradient gradientTransform="rotate(90 -.678 177.5)scale(53.521)" gradientUnits="userSpaceOnUse" r="1" cy="0" cx="0" id="89bf84e3-f247-48a6-a385-c09631832121_comp-m5njb9v2">
                                                <stop stop-color="#ffffff"></stop>
                                                <stop stop-color="#F3F3F3" offset="1"></stop>
                                            </radialGradient>
                                            <radialGradient gradientTransform="rotate(90 -.678 177.5)scale(33.874)" gradientUnits="userSpaceOnUse" r="1" cy="0" cx="0" id="1ef7d9d1-f695-4be6-8f20-f2bdbadcb554_comp-m5njb9v2">
                                                <stop stop-color="#4BDDEC"></stop>
                                                <stop stop-color="#5E51F8" offset="1"></stop>
                                            </radialGradient>
                                        </defs>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 col-lg-7">
                            <div className="about-style-six-info text-scroll-animation" ref={containerRef}>
                                <div className="info">
                                    <div className="d-flex">
                                        <Link to="/about-us"><img src={arrowIcon} alt="Image Not Found" /></Link>
                                        <h2 className="title text">Why ammune.ai?</h2>
                                    </div>
                                    <p className="text">
                                        API abuses are the most-frequent attack vector resulting in data breaches for enterprise applications. Enterprises of all sizes trust Ammune™ by ammune.ai to keep their APIs safe
                                    </p>
                                </div>
                                <ul className="service-list">
                                    {ServiceListData.map(service =>
                                        <li
                                            key={service.id}
                                            onMouseEnter={() => handleMouseEnter(service.id)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <Link to="/why-ammuneai" className={`${activeServiceId === service.id ? 'active' : ''}`}>
                                                <ServiceList service={service} />
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV6;