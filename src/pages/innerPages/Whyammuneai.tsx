import { Helmet } from "react-helmet-async";
import AboutV4 from "../../components/about/AboutV4";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import FunFactV1 from "../../components/fact/FunFactV1";
import LayoutV1 from "../../components/layouts/LayoutV1";
// import TeamV3 from "../../components/team/TeamV3";
// import TestimonialV2 from "../../components/testimonial/TestimonialV2";
// import ZoomVideoV1 from "../../components/videos/ZoomVideoV1";
import ThemeDark from "../../components/switcher/ThemeDark";
import DarkClass from "../../components/classes/DarkClass";
import ServicesV6 from "../../components/services/ServicesV6";
import WhyChooseV4 from "../../components/whyChoose/WhyChooseV4";
import ServicesV4 from "../../components/services/ServicesV4";



const Whyammuneai = () => {
    return (
        <>
            <Helmet>
                <title>Ammune.ai | API Security</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Why ammune.ai?' breadCrumb='Why ammune.ai?' />
                <AboutV4 sectionClass='default-padding bg-gray' />
                <ServicesV6 />
                <WhyChooseV4 sectionClass="default-padding bg-gray" />
                <ServicesV4 />
                <FunFactV1 sectionClass='default-padding bg-gray' />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Whyammuneai;