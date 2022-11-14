import './advantages.scss';

import guarantee from '../../img/i/guarantee.svg';
import modernHouse from '../../img/i/modern-house.svg';
import savings from '../../img/i/savings.svg';
import rating from '../../img/i/rating.svg';
import stars from '../../img/i/star2.svg';

const Advantages = () => {
    return (
        <div className="advantages">
            <div className="container">
                <ul className="advantages__list">
                    <li className="advantages__item">
                        <img className="advantages__item-icon" src={guarantee} alt="" />
                        <p className="advantages__item-text">Lifetime warranty with 100% no-clog guarantee</p>
                    </li>
                    <li className="advantages__item">
                        <img className="advantages__item-icon" src={modernHouse} alt="" />
                        <p className="advantages__item-text">Fits most homes</p>
                    </li>
                    <li className="advantages__item">
                        <img className="advantages__item-icon" src={savings} alt="" />
                        <p className="advantages__item-text">Installs over existing gutters saving you thousands</p>
                    </li>
                    <li className="advantages__item">
                        <img className="advantages__item-icon" src={rating} alt="" />
                        <div className="advantages__item-text advantages__item-text--rating">
                            <img src={stars} alt="" />
                            <span>Сustomer rating</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Advantages;