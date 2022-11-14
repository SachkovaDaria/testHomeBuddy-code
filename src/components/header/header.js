import { Link } from 'react-scroll'

import './header.scss';
import Logo from "../logo/logo";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header-logo">
                        <Logo />
                        <p className="header-logo__text--small">for homeowners</p>
                    </div>
                    <div className="header-link">
                        <Link className="header-link__btn" to="form" spy={true} smooth={true} offset={80} duration={1000} href="#form">Link to form</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;