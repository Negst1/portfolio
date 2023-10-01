import styles from "./Header.module.css"
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {BsFillPersonFill} from "react-icons/bs"; 

const Header = (props) => {
    const {cartItems} = props;
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__content}>
                    <div className={styles.header__wrapper}>
                        <div className = {styles.header__logo}>
                            <Link to="/">House Perfect</Link>
                        </div>
                        <nav className={styles.header__nav}>
                            <ul className={styles.nav__list}>
                                <span className={styles.cart__iconBackground}>
                                    <Link to="/shopping_cart" className={styles.nav__cart}><li><FaShoppingCart className={styles.cart__icon}/></li>
                                    <div className={styles.cart__count}>
                                        {cartItems.length !== 0 && 
                                        <div className={styles.counter}>
                                            {cartItems.length}
                                        </div>}
                                    </div>
                                    </Link>
                                </span>

                                <span className={styles.cart__iconBackground}>
                                    <Link to="/personal__office"> 
                                        <li><BsFillPersonFill className={styles.personal__item}/></li>
                                    </Link></span>
                            </ul>
                        </nav>
                        
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header  