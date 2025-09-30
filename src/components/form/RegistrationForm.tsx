import { toast } from "react-toastify";
import ENDPOINTS from "../../config/endpoints";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // Password validation regex
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    const handleForm: FormEventHandler = async (event) => {
        event.preventDefault();
        setErrors({}); // reset errors

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const payload: Record<string, string> = {};
        formData.forEach((value, key) => {
            payload[key] = value.toString();
        });

        // --- Frontend Validation ---
        const newErrors: { [key: string]: string } = {};

        if (!payload.name) newErrors.name = "Name is required";
        if (!payload.email) newErrors.email = "Email is required";
        if (!payload.phone) newErrors.phone = "Phone is required";
        if (!payload.password) {
            newErrors.password = "Password is required";
        } else if (!passwordRegex.test(payload.password)) {
            newErrors.password =
                "Password must be min 6 chars, include 1 capital letter & 1 number";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await fetch(ENDPOINTS.REGISTER_USER, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(result.message);
                localStorage.setItem("authToken", result.token);
                navigate("/resources");
            } else {
                toast.error(result.message || "Registration failed!");
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
                                id="name"
                                name="name"
                                placeholder="Name"
                                type="text"
                                required
                                autoComplete="off"
                            />
                            {errors.name && <span className="alert-error">{errors.name}</span>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Email*"
                                type="email"
                                required
                                autoComplete="off"
                            />
                            {errors.email && (
                                <span className="alert-error">{errors.email}</span>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input
                                className="form-control no-arrows"
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                                type="number"
                                required
                                autoComplete="off"
                            />
                            {errors.phone && (
                                <span className="alert-error">{errors.phone}</span>
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
                            <i className="fa fa-paper-plane" /> Get in Touch
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

export default RegistrationForm;
