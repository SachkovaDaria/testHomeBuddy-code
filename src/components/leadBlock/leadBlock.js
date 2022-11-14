import React, { useState } from 'react';

import './leadBlock.scss';

import Modal from "../modal/modal";
import InfoMessage from "../infoMessage/infoMessage";


const LeadBlock = () => {

    const [openModel, setOpelModal] = useState(false);
    const [inputValue, setInputValue] = useState(" ");


    const zipFormData = {
        title: "See How Much Gutter Guards Cost In The XX, XXX Area",
        formTitle: "What is your ZIP Code?",
        id: "zip_code",
        submitText: "Get estimate",
        placeHolder: "Enter ZIP Code",
        cantion: "Free, no-obligation estimates."
    }

    let { title, formTitle, id, submitText, placeHolder, cantion } = zipFormData;

    const handleNextStep = (e) => {
        e.preventDefault();
        setOpelModal(true);
    }


    return (
        <section className="leadBlock">
            <div className="leadBlock__wrapper">
                <div className="container">
                    <InfoMessage />
                </div>
                <div className="leadBlock__content">
                    <h2 className="leadBlock__title">{title}</h2>
                    <div className="leadBlock__container">
                        <div action="#" className="leadBlock__form" id='form'>
                            <h3 className="leadBlock__form-title">{formTitle}</h3>
                            <p>
                                <input className="input-text  leadBlock__form-input"
                                    id={id}
                                    placeholder={placeHolder}
                                    inputvalue={inputValue}
                                    onChange={(e) => { setInputValue(e.target.value) }}
                                    name="input">
                                </input>

                                <label htmlFor={id}></label>
                            </p>
                            <p className="caption leadBlock__form-caption">{cantion}</p>
                            <button onClick={handleNextStep} className="btn leadBlock__form-btn">{submitText}</button>
                            <Modal open={openModel}
                                onClose={() => setOpelModal(false)}
                                inputvalue={inputValue}
                                setInputValue={setInputValue} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeadBlock;