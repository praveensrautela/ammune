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
                <title>Login-Ammune Ai</title>
                <meta name="keywords" content="API security platform, enterprise API protection, API threat detection, API compliance" />
                <meta name="description" content="Sign up at Ammune AI to receive industry updates, research, trends, company news, event info, and exclusive goodies delivered straight to you!" />
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