import { Helmet } from "react-helmet-async";
import Loginform from "../../components/auth/Loginform";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ThemeDark from "../../components/switcher/ThemeDark";

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Ammune.ai | API Security</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Login' breadCrumb='login' />
                <Loginform sectionClass="default-padding-bottom" />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Login;