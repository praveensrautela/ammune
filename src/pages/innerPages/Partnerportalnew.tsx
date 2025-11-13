import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";

import ThemeDark from "../../components/switcher/ThemeDark";
import DarkClass from "../../components/classes/DarkClass";




const Platform = () => {
    return (
        <>
            <Helmet>
                <title>Ammune.ai | API Security</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Partner Portal' breadCrumb='Partner Portal' />
                <div className="defaultbtn text-center">
                    <a href="assets/resources/8ef949_b35fbbfaf1f147ea86c44834fb9f9419.pdf" download={true}>Download</a>
                </div>

                <iframe src="assets/resources/8ef949_b35fbbfaf1f147ea86c44834fb9f9419.pdf" width={'100%'} height={'650px'} ></iframe>

                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Platform;