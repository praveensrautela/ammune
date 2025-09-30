// config/endpoints.ts
import API_BASE_URL from "./api";

const ENDPOINTS = {
    REGISTER_USER: `${API_BASE_URL}/api/registeruser`,
    LOGIN_USER: `${API_BASE_URL}/api/loginuser`,
    BLOG_API: `${API_BASE_URL}/api/get-blogs`,
    BLOG_IMAGE_URL: `http://localhost/ammuneai/static`,
    BLOG_DETAILS_API: `${API_BASE_URL}/blogdetails`,

};

export default ENDPOINTS;
