import { Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePages/Home1";
import Whyammuneai from "./pages/innerPages/Whyammuneai";
import Platform from "./pages/innerPages/Platform";
import Technology from "./pages/innerPages/Technology";
import Deploymenttypes from "./pages/innerPages/Deploymenttypes";
import Company from "./pages/innerPages/Company";
import Career from "./pages/innerPages/Career";
import Blogs from "./pages/blogPages/Blog3ColumnPage";
import Pressreleas from "./pages/blogPages/PressReleasePage";
import CaseStudies from "./pages/ResourcePages/CaseStudies";
import UserGuide from "./pages/ResourcePages/UserGuide";
import Login from "./pages/AuthPages/Login";
import Register from "./pages/AuthPages/Register";
import Resources from './pages/ResourcePages/Resources';
import ContactUsPage from "./pages/innerPages/ContactUsPage";
import FaqPage from "./pages/innerPages/FaqPage";
import BlogSinglePage from "./pages/blogPages/BlogSinglePage";
import NotFoundPage from "./pages/innerPages/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute";
import Privacypolicy from "./pages/innerPages/Privacypolicy";
import Termsconditions from "./pages/innerPages/Termsconditions";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home1 />}></Route>
                <Route path='/why-ammuneai' element={<Whyammuneai />}></Route>
                <Route path='/platform' element={<Platform />}></Route>
                <Route path='/technology' element={<Technology />}></Route>
                <Route path='/deployment-types' element={<Deploymenttypes />}></Route>
                <Route path='/company' element={<Company />}></Route>
                <Route path='/career' element={<Career />}></Route>

                {/* Protected Routes */}
                <Route
                    path='/case-studies'
                    element={
                        <PrivateRoute>
                            <CaseStudies />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/user-guides'
                    element={
                        <PrivateRoute>
                            <UserGuide />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/resources'
                    element={
                        <PrivateRoute>
                            <Resources />
                        </PrivateRoute>
                    }
                />

                {/* Auth Pages */}
                <Route path='/login' element={<Login />}></Route>
                <Route path='/partner-portal' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/blogs' element={<Blogs />}></Route>
                <Route path='/blog/:slug' element={<BlogSinglePage />}></Route>
                <Route path='/contact-us' element={<ContactUsPage />}></Route>
                <Route path='/faq' element={<FaqPage />}></Route>
                <Route path='/press-releases' element={<Pressreleas />}></Route>
                <Route path='/terms-and-conditions' element={<Termsconditions />}></Route>
                <Route path='/privacy-policy' element={<Privacypolicy />}></Route>

                
                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </>
    );
};

export default Routers;