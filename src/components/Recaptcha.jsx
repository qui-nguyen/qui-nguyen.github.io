import { useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = ({ reset, handlerCheckRecaptcha }) => {

    // Recaptcha
    const reRef = useRef(null);

    // Check recaptcha
    const onChange = (value) => {
        handlerCheckRecaptcha(value);
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