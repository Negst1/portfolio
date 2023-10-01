import { Link } from "react-router-dom";
import styles from "./CardContacts.module.css";


const CardContacts = (props) => {
    const {logo,title,discription, typeLink,textLink} = props;
    return (  
        <div className={styles.card}>
            <div className={styles.card__content}>
                <div className={styles.logo}>{logo}</div>
                <div className={styles.content__title}>
                    {title}
                </div>
                <div className={styles.content__discription}>
                    {discription}
                </div>
                    <Link className={styles.card__link} to={typeLink}>{textLink}</Link>
                </div>
        </div>
    );
}
 
export default CardContacts;