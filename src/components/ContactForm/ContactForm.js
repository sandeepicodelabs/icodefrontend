import React, { useState } from "react";
import axios from "axios";
import userImg from "../../assets/images/user.png"
import Emailicon from "../../assets/images/email.png";
import messageimg from "../../assets/images/message.png";
import InputBox from "../input";
import ButtonBox from "../button";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "../../pages/style.scss"


const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
};

const ContactForm = () => {
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (name.trim() === "") {
            newErrors.name = "Name is required";
        }
        if (!validateEmail(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Submit the form data
            console.log("Form submitted:", {
                name,
                email,
                phoneNumber,
                message,
            });

            // Clear the form
            setName("");
            setEmail("");
            setPhoneNumber("");
            setMessage("");
            setErrors({});
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="contact-right">
                <div className="contact-form">
                    <div className="input-wrap">
                        <InputBox
                            type="text"
                            name="name"
                            placeholder={"Full Name"}
                            value={name}
                            img={userImg}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>

                    <div className="input-wrap">
                        <InputBox
                            type="text"
                            className="contact-inputs"
                            value={email}
                            name="email"
                            img={Emailicon}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                    <div className="input-wrap">

                        <PhoneInput
                            placeholder="Enter phone number"
                            countryCode="+91"
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                            name="phoneNumber"
                        />
                    </div>
                    <div className="input-wrap">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <span className="input-icon">
                            <img src={messageimg} alt="St Logo" name="message" />
                        </span>
                    </div>
                    <div className="send-button">
                        <ButtonBox type="submit" buttonname="Send message" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
