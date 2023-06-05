// import { HiX } from "react-icons/hi";
import styles from "../styles";
import { close } from '../assets';
import { modalMessages } from "../constants";

const Modal = ({ isVisible, success, messageName, closeModal }) => {
    if (isVisible === false || isVisible === null) return null;

    return (
        <div className={`${styles.paddingX} fixed inset-0   z-20 flex justify-center items-center`}>
            <div className={`
                ${success ? ' border-green-500 bg-[#658b73]' : 'border-rose-500 bg-[#f39fb0]'}
                p-[20px] max-w-[500px] rounded-2xl shadow-card border-2`
            }>
                {/* <img src="/icon-message-sent.svg" alt="icon message sent" style={{ height: "7rem", width: "auto" }} /> */}
                <div className="text-center">
                    {success ? (
                        <>
                            {modalMessages
                                .filter(message => message.name === messageName)
                                .map((message, index) => (
                                    <>
                                        <h4 className="font-bold text-green-500" key={`title-${index}`}>{message.title}</h4><br />
                                        {message.messages.map((m, j) => <p key={`message-${j}`}>{m}</p>)}
                                    </>
                                ))}
                        </>
                    ) : (
                        <>
                            <div onClick={closeModal} className="cursor-pointer flex justify-end">
                                <img src={close} alt={close} />
                            </div>

                            {modalMessages
                                .filter(message => message.name === messageName)
                                .map((message, index) => (
                                    <>
                                        <h4 className="text-[20px] font-bold text-rose-500" key={`title-${index}`}>{message.title}</h4><br />
                                        {message.messages.map((m, j) => {
                                            if (j === 1 && message.name === 'error') {
                                                return (
                                                    <p key={`message-${j}`}>
                                                        Je vous remercie de me contacter directement par courriel (<span className="font-bold text-rose-500">nguyenhtalice@gmail.com</span>). Je vous répondrai dans les plus brefs délais.
                                                    </p>
                                                );
                                            }
                                            return <p key={`message-${j}`}>{m}</p>;
                                        })}
                                    </>
                                ))}
                        </>
                    )}
                </div>


            </div>
        </div>
    )
}

export default Modal;