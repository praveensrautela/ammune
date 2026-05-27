import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";

import ThemeDark from "../../components/switcher/ThemeDark";
import DarkClass from "../../components/classes/DarkClass";
import ServicesV2 from "../../components/services/ServicesV2";




const Platform = () => {
    return (
        <>
          <Helmet>
                <title>Application For Protection  API Attack - Ammune Ai</title>
                <meta name="keywords" content="API security platform, enterprise API protection, API threat detection, API compliance" />
                <meta name="description" content="Explore Ammune’s application protection platform for bot, DDoS, and business logic attacks, delivering runtime protection to keep your business safe ." />
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Platform' breadCrumb='Platform' />
                <ServicesV2 />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Platform;