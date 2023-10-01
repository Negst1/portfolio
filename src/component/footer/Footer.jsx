import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <div className={styles.footer__buyer}>
                    <div className={styles.footer__buyerTitle}>
                        Покупателям
                    </div>
                    <ul className={styles.footer__listBuyer}>
                        <li className={styles.buyer__item}><Link to="/" className={styles.buyer__link}>Возврат товара</Link></li>
                        <li className={styles.buyer__item}><Link to="/" className={styles.buyer__link}>Вопросы и ответы</Link></li>
                    </ul>
                </div>
                <div>
                    <div className={styles.footer__buyerTitle}>
                        Компания
                    </div>
                    <div className={styles.footer__company}>
                        <ul className="company__list">
                            <li className="company__item"><Link to="/contacts" className={styles.buyer__link}>Контакты</Link></li>
                            <li className="company__item"></li>
                            <li className="company__item"></li>
                        </ul>
                            
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;