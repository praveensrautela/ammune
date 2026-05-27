import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ThemeDark from "../../components/switcher/ThemeDark";
import DarkClass from "../../components/classes/DarkClass";
import Career from "../../components/about/AboutV7";

const Platform = () => {
    return (
        <>
            <Helmet>
                <title>Careers API Security Jobs-Ammune AI</title>
                <meta name="keywords" content="API security platform, enterprise API protection, API threat detection, API compliance" />
                <meta name="description" content="Join Ammune AI to get  top job opportunities in API security. Explore career  page to grow your career, and work with industry experts worldwide." />
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Career' breadCrumb='Career' />
                <Career sectionClass="default-padding bg-gray" />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Platform;