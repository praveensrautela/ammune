import { toast } from "react-toastify";
import ENDPOINTS from "../../config/endpoints";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const PartnerLogin = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleForm: FormEventHandler = async (event) => {
        event.preventDefault();
        setErrors({}); // reset errors

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const payload: Record<string, string> = {};
        formData.forEach((value, key) => {
            payload[key] = value.toString();
        });

        // --- Frontend validation ---
        const newErrors: { [key: string]: string } = {};
        if (!payload.email) newErrors.email = "Email is required";
        if (!payload.password) newErrors.password = "Password is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await fetch(ENDPOINTS.PARTNER_LOGIN, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                toast.success(result.message || "Login successful!");
                localStorage.setItem("authToken", result.token);
                navigate("/partnerportal");
            } else {
                toast.error(result.message || "Login failed!");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <>
            <form className="contact-form contact-form" onSubmit={handleForm}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Email ID"
                                type="email"
                                required
                                autoComplete="off"
                            />
                            {errors.email && (
                                <span className="alert-error">{errors.email}</span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group comments">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter Your Password"
                                required
                            />
                            {errors.password && (
                                <span className="alert-error">{errors.password}</span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit">
                            Login
                        </button>
                    </div>
                </div>

                {/* Alert Message */}
                <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg" />
                </div>
            </form>
        </>
    );
};

export default PartnerLogin;
