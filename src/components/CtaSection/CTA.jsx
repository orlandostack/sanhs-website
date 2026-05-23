import * as S from "./CTA.styled";
import CTAImage from "../../assets/cta-image.png";

import React from "react";

const CTA = () => {
    return (
        <S.CallToAction>
            <div className="cta-text">
                <h3>Let’s Talk — We’re Here to Help</h3>
                <p>
                    Have questions about enrollment, academic programs, or school
                    activities? Reach out to us anytime—our team is ready to guide you
                    every step of the way.
                </p>
                <button>Message Us</button>
            </div>
            <div className="cta-image">
                <img src={CTAImage} alt="Call to Action Image" />
            </div>
        </S.CallToAction>
    );
};

export default CTA;