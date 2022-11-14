import './footer.scss';

import Logo from "../logo/logo";

const Footer = () => {

    const links = [
        {
            link: '/',
            title: 'Terms of Use'
        },
        {
            link: '/',
            title: 'Privacy Policy'
        },
        {
            link: '/',
            title: 'Cookie Policy'
        },
        {
            link: '/',
            title: 'Do Not Sell My Personal Information'
        },
        {
            link: '/',
            title: 'Contact us'
        },
    ]

    const renderLinkList = (arr) => {

        const linkList = arr.map((item, i) => {
            return (
                <li className="footer__item" key={i}>
                    <a href={item.link} className="footer__link">{item.title}</a>
                </li>
            )
        });

        return (
            <ul className="footer__links">
                {linkList}
            </ul>
        )
    }

    const items = renderLinkList(links);

    return (
        <footer className="footer">
            <div className="container">
                <Logo />
                {items}
            </div>
        </footer>
    )
}

export default Footer;