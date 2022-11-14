import React, { useState, useEffect } from 'react';

import FormStep1 from "../formStep1/formStep1";
import FormStep2 from "../formStep2/formStep2";

import './modal.scss';

import lock from '../../img/i/lock.svg';


const Modal = ({ open, onClose, inputvalue, setInputValue }) => {

    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        zipCode: inputvalue,
        property: "",
        name: "",
        email: "",
    })


    useEffect(() => {
        setFormData({ ...formData, zipCode: inputvalue })
    }, [inputvalue]);

    const formTitle = [
        "Are you homeowner or authrized to make property changes?",
        "Who should I prepare this estimate for?"
    ]

    const stepDisplay = () => {
        if (step === 0) {
            return <FormStep1 formData={formData} setFormData={setFormData} />
        }

        if (step === 1) {
            return <FormStep2 formData={formData} setFormData={setFormData} />
        }
    }

    const caption = () => {
        if (step === 1) {
            return <>
                <p className="caption">
                    <img src={lock} alt="icon lock" />
                    <span>Safe, Secure and Confidential</span>
                </p>
            </>
        }
    }

    const handleButton = (e) => {
        e.preventDefault();
        if (step === formTitle.length - 1) {
            onClose(formData);
            console.log(formData);
            setFormData({
                zipCode: "",
                property: "",
                name: "",
                email: "",
            });
            setInputValue("");
            setStep(0);

        } else {
            setStep((currStep) => currStep + 1);
        }
    }

    if (!open) return null;

    return (
        <div className="modal modal-overlay">
            <div className="container container--btnsmodal">
                <div className="modal__btns">
                    <button onClick={onClose} className="modal__btns--close"></button>
                </div>
            </div>
            <div className="modal-form form">
                <div className="form-progressbar">
                    <div style={{ width: step === 0 ? "50%" : "100%" }} ></div>
                </div>
                <div className="container">
                    <h2 className="form-title">{formTitle[step]}</h2>
                    <div className="form-container">
                        <div className="form-body">{stepDisplay()}</div>
                        <button className="btn btn--form" onClick={handleButton}>
                            {step === formTitle.length - 1 ? "Submit" : "Next"}
                        </button>
                        {caption()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;