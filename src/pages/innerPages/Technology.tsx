import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import AboutV1 from "../../components/about/AboutV1";
// import ServicesV1new from "../../components/services/ServicesV1new";
import ProcessWrapper from "../../components/process/ProcessWrapper";
import Diagram from "../../components/brand/Diagram";
import Trafic from "../../components/brand/Trafic";
import AiimageV2 from "../../components/brand/AiimageV2";
import ThemeDark from "../../components/switcher/ThemeDark";
import DarkClass from "../../components/classes/DarkClass";



const Platform = () => {
    return (
        <>
            <Helmet>
                <title>Ammune.ai | API Security</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Technology' breadCrumb='Technology' />
                <AboutV1 />
                <Trafic />
                <ProcessWrapper />

                <AiimageV2 />

                <Diagram />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Platform;