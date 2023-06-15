import React, { useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = ({ reset, handlerCheckRecaptcha }) => {

    // Recaptcha
    const reRef = useRef<ReCAPTCHA>(null);

    // Check recaptcha
    const onChange = (value: string | null) => {
        value && handlerCheckRecaptcha(value);
    };

    useEffect(() => {
        if (reRef.current && reset) {
            reRef.current.reset();
        }
    }, [reset]);

    return (
        <div className='flex justify-center items-center'>
            <ReCAPTCHA
                sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
                ref={reRef}
                onChange={onChange}
                theme="dark"
            >
            </ReCAPTCHA>
        </div>
    )
}

export default Recaptcha;