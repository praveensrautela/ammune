// config/endpoints.ts
import API_BASE_URL from "./api";

const ENDPOINTS = {
    REGISTER_USER: `${API_BASE_URL}/api/registeruser`,
    PARTNER_USER: `${API_BASE_URL}/api/partnerregister`,
    LOGIN_USER: `${API_BASE_URL}/api/loginuser`,
    PARTNER_LOGIN: `${API_BASE_URL}/api/partnerlogin`,
    BLOG_API: `${API_BASE_URL}/api/get-blogs`,
    BLOG_IMAGE_URL: `${API_BASE_URL}/static`,
    BLOG_DETAILS_API: `${API_BASE_URL}/blogdetails`,
    SUBMIT_CONTACT: `${API_BASE_URL}/api/submitcontact`,
};

export default ENDPOINTS;
