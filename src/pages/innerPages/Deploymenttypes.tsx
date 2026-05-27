import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ThemeDark from "../../components/switcher/ThemeDark";
import DarkClass from "../../components/classes/DarkClass";
import AboutV3 from "../../components/about/AboutV3";





const Platform = () => {
    return (
        <>
             <Helmet>
                <title>API Security Deployment Type For  Protection-Ammune Ai</title>
                <meta name="keywords" content="API security platform, enterprise API protection, API threat detection, API compliance" />
                <meta name="description" content="Explore API security deployment types for robust protection with Ammune AI, ensuring secure, scalable, and efficient defense against evolving API threats." />
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Deployment Types' breadCrumb='Deployment Types' />
               <AboutV3 sectionClass='bg-gray ' />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Platform;