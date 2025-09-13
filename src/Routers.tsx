import { Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePages/Home1";
import Whyammuneai from "./pages/innerPages/Whyammuneai";
import Platform from "./pages/innerPages/Platform";
import Technology from "./pages/innerPages/Technology";
import Deploymenttypes from "./pages/innerPages/Deploymenttypes";
import Company from "./pages/innerPages/Company";
import Career from "./pages/innerPages/Career";
import CaseStudies from "./pages/blogPages/CaseStudies";


import ContactUsPage from "./pages/innerPages/ContactUsPage";
import FaqPage from "./pages/innerPages/FaqPage";




import BlogSinglePage from "./pages/blogPages/BlogSinglePage";



import NotFoundPage from "./pages/innerPages/NotFoundPage";


const Routers = () => {
    return (
        <>
            <Routes>

                <Route path='/' element={<Home1 />}></Route>
                <Route path='/why-ammune.ai' element={<Whyammuneai />}></Route>
                <Route path='/platform' element={<Platform />}></Route>
                <Route path='/technology' element={<Technology />}></Route>
                <Route path='/deployment-types' element={<Deploymenttypes />}></Route>
                <Route path='/company' element={<Company />}></Route>
                <Route path='/career' element={<Career />}></Route>
                <Route path='/case-studies' element={<CaseStudies />}></Route>

                <Route path='/blog-single/:id' element={<BlogSinglePage />}></Route>
                


                <Route path='/contact-us' element={<ContactUsPage />}></Route>
                <Route path='/faq' element={<FaqPage />}></Route>

                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </>
    );
};

export default Routers;