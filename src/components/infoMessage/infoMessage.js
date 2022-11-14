import './infoMessage.scss';
import savingsSmall from '../../img/i/savings_small.svg';

const InfoMessage = () => {
    return (
        <div className="infoMessage">
            <img src={savingsSmall} alt="icon message" />
            <p className="infoMessage__text">You will be surprised how affordable gutter guards are!</p>
        </div>
    )
}

export default InfoMessage;