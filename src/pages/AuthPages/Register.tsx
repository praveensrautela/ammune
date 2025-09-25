import { Helmet } from "react-helmet-async";
import RegisterForm from "../../components/auth/RegistrationForm";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ThemeDark from "../../components/switcher/ThemeDark";

const Register = () => {
    return (
        <>
            <Helmet>
                <title>Ammune.ai | API Security</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Register' breadCrumb='register' />
                <RegisterForm sectionClass="default-padding-bottom" />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Register;