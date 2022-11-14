import './formStep1.scss';
import yes from '../../img/i/yes.svg';
import no from '../../img/i/no.svg';


const FormStep1 = ({ formData, setFormData }) => {

    return (
        <div className="formStep1">

            <input className="real-radio" name="formStep1" type="radio" value="1" id="yes"
                onChange={(e) => {setFormData({ ...formData, property: e.target.value });
                }}/>
            <label className="label-radio" htmlFor="yes" >
                <img src={yes} alt="icon lock" />
                <span>Yes</span>
            </label>

            <input className="real-radio" name="formStep1" type="radio" value="0" id="no"
                onChange={(e) => {setFormData({ ...formData, property: e.target.value });
                }} />
            <label className="label-radio" htmlFor="no" >
                <img src={no} alt="icon lock" />
                <span>No</span>
            </label>
            
        </div>
    )
}

export default FormStep1;