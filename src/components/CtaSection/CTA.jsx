import { memo } from "react";
import * as S from "./CTA.styled";
import CTAImage from "../../assets/cta-image.png";

const MESSENGER_LINK = "https://web.facebook.com/messages/t/111547480581135";

const CTA = memo(({ id }) => {
    return (
        <S.CtaSection id={id} aria-labelledby="cta-heading">
            <div className="cta-text">
                <h2 id="cta-heading">Let's Talk — We're Here to Help</h2>
                <p>
                    Have questions about enrollment, academic programs, or school
                    activities? Reach out to us anytime — our team is ready to guide
                    you every step of the way.
                </p>
                <S.CtaLink
                    href={MESSENGER_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Message us on Facebook Messenger (opens in a new tab)"
                >
                    Message Us
                </S.CtaLink>
            </div>

            <div className="cta-image" aria-hidden="true">
                <img
                    src={CTAImage}
                    alt=""
                    width={400}
                    height={360}
                    loading="lazy"
                    decoding="async"
                />
            </div>
        </S.CtaSection>
    );
});

CTA.displayName = "CTA";

export default CTA;