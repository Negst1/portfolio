import { Link } from "react-router-dom";
import CardContacts from "./CardContacts";
import styles from "./Contacts.module.css"
import { BsTelephoneInboundFill } from "react-icons/bs";
import {BsShop} from "react-icons/bs";

const Contacts = () => {
    const logoContacts = <BsTelephoneInboundFill/>;
    const logoShop = <BsShop/>
    return ( 
    <div className={styles.contacts}>
        <div className={styles.link__block}>
            <Link className={styles.link__home} to="/">
                Главная
            </Link>
        </div>
        <h1 className={styles.contacts__title}>
            Контактная информация
        </h1>
        <div className={styles.cards}>
            <CardContacts logo={logoContacts} textLink="8 912 345-67-89" title="Клиентская поддержка" discription="Мы принимаем звонки круглосуточно без выходных. Звонок бесплатный."/>
            <CardContacts logo={logoShop} textLink="Смотреть адреса" typeLink="/" title="Адреса магазинов" discription="Перед поездкой в магазин уточните его адрес, время работы и схему проезда."/>
        </div>

        <div className={styles.contacts__block}>
            <div className={styles.office__info}>
                <div className={styles.office__infoTitle}>
                    Центральный офис
                </div>
                <div className={styles.office__infoAddress}>
                    Москва, проспект Лихачева, 15
                </div>
                <div className={styles.office__infoAddress}>
                    Для получения пропуска в офис необходимо заранее договориться о встрече с сотрудником House Perfect.
                </div>
                <div className={styles.office__infoTel}>
                    <Link className={styles.link__infoTel}>8 999 666-66-66</Link>
                </div>
                
            </div>
            <div className={styles.company__info}>
            <div className={styles.office__infoTitle}>
                Общество с ограниченной ответственностью «House Perfect»
            </div>
            <div className={styles.company__text}>
                ОГРН 111111111111
            </div>
            <div className={styles.company__text}>
                123456, Московская область,
            </div>
            <div className={styles.company__text}>
                г. Мытищи, Осташковское шоссе, 1
            </div>
            </div>
        </div>
    </div> );
}

export default Contacts;