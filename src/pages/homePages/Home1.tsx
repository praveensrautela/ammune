import { Helmet } from "react-helmet-async";
import AboutV6 from "../../components/about/AboutV6";
import BannerV8 from "../../components/banner/BannerV8";
// import BlogV2 from "../../components/blog/BlogV2";
// import ClientsV1 from "../../components/clients/ClientsV1";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";
import MultiSection from "../../components/multi/MultiSection";
// import ProjectV1 from "../../components/project/ProjectV1";
import ServicesV1 from "../../components/services/ServicesV1";
import Whatweoffer from "../../components/services/Whatweoffer.tsx";
import ServicesV1new from "../../components/services/ServicesV1new";

// import TeamV1 from "../../components/team/TeamV1";
import TestimonialV3 from "../../components/testimonial/TestimonialV3";
import DarkClass from "../../components/classes/DarkClass";
import ThemeDark from "../../components/switcher/ThemeDark";
import BrandV2 from "../../components/brand/BrandV2";
import AiimageV1 from "../../components/brand/AiimageV1";


const Home1 = () => {
    return (
        <>
            <Helmet>
                <title>Ammune.ai | API Security</title>
            </Helmet>
            <div className="smooth-scroll-container">
                <HeaderV1 />
                <BannerV8 />
                <BrandV2 />
                <ServicesV1new sectionClass='bg-gray default-padding' hasTitle={true} />
                <Whatweoffer sectionClass=' default-padding' hasTitle={true} />
                <ServicesV1 sectionClass='bg-gray default-padding' hasTitle={true} />
                {/* <ServicesV1offer sectionClass=' default-padding' hasTitle={true} /> */}

                <AboutV6 sectionClass="default-padding" />
                {/* <ProjectV1 /> */}
                {/* <TeamV1 sectionClass='bg-gray' hasTitle={true} /> */}
                <TestimonialV3 sectionClass='bg-gray default-padding' />
                {/* <ClientsV1 sectionClass='bg-gray' /> */}
                <AiimageV1 />

                <MultiSection />
                {/* <BlogV2 sectionClass='bg-gray' /> */}


                <FooterV1 />
                <DarkClass />
                <ThemeDark />
            </div>
        </>
    );
};

export default Home1;