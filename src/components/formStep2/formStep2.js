import './formStep2.scss';

const FormStep2 = ({ formData, setFormData }) => {

    return (
        <div className="formStep2">
            <p className="formStep2__lastChoice">Your choice: <span>{formData.property === "1" ? " Yes" : " No"}</span></p>
            <input className="input-text" type="text"
                value={formData.name}
                onChange={(e) => { setFormData({ ...formData, name: e.target.value }); }}
                placeholder="Full name" />
            <input className="input-text" type="text"
                value={formData.email}
                onChange={(e) => { setFormData({ ...formData, email: e.target.value }); }}
                placeholder="Email address" />
        </div>
    )
}

export default FormStep2;