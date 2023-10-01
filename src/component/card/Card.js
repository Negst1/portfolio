import { Fragment } from "react";
import cards from "./../../data/Cards";
import styles from "./Card.module.css"

const Card = (props) => {
    const {addToCart} = props;
    return (
        <div className={styles.card}>
        {cards.map((card) => {
            return(
                <Fragment key={card.id}>
                    <div className= {styles.card__content}>
                        <div>
                            <img className={styles.card__img} src={"./img/" + card.img} alt="ooops" />
                        </div>
                        <div className={styles.card__text}>
                            <div className={styles.card__title}>
                                {card.title}
                            </div>
                            <div className={styles.card__discription} >
                                {card.discription}
                            </div>
                            <div className={styles.card__price} >
                                {card.price + "₽"}
                            </div>
                            
                        </div>
                        <button className={styles.card__button} onClick={() => addToCart(card)}>
                                +
                        </button>
                    </div>
                </Fragment>
                )
            })}
        </div>
    );
}

export default Card;