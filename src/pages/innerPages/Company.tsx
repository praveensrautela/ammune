import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ThemeDark from "../../components/switcher/ThemeDark";
import DarkClass from "../../components/classes/DarkClass";
import AboutV5 from "../../components/about/AboutV5";





const Platform = () => {
    return (
        <>
            <Helmet>
                <title>About API Security Services Provider-Ammune AI</title>
                <meta name="keywords" content="API security platform, enterprise API protection, API threat detection, API compliance" />
                <meta name="description" content="Ammune.ai protects organizations, applications, and users from API-borne attacks with AI-driven security and innovative, award-winning technology." />
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Company' breadCrumb='Company' />
                <AboutV5 sectionClass="default-padding bg-gray" />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Platform;