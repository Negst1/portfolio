
import { useState } from "react";
import styles from "./Cart.module.css"
import { Link } from "react-router-dom";
import { PiWarningCircleBold } from "react-icons/pi";

const Cart = (props) => {
    const {removeCart,cartItems,addToCart} = props;
    const totalPrice = cartItems.reduce((a,c) => a + c.price * c.qty,0);

    return (
        <div>
            {cartItems.length !== 0 && <div><div>Корзина</div>
            <div className={styles.length__cart}>{cartItems.length}{' '}товара</div></div>}
            
            <div className={styles.cart__block}>
                <div className={styles.left}>
                    {cartItems.map((item)=> (
                        <div className={styles.cart__content}>
                            <div key={item.id} className={styles.card__cart}>
                                <img src={"./img/" + item.img} width={150} height={150} className={styles.cart__img}></img>
                                <div className={styles.discription__product}>
                                    <div className={styles.name__product}>{item.title}</div>
                                </div>
                                <div className={styles.card__price}>
                                    <div>{item.qty * item.price}₽</div>
                                    {item.qty > 1 && <div>{item.price}₽{" "}/{" "}шт</div>}
                                    <div className={styles.cart__buttons}>
                                        <button className={styles.cart__button} onClick={() => removeCart(item)}>–</button>
                                        <div>
                                            {item.qty}
                                        </div>
                                        <button className={styles.cart__button} onClick={() => addToCart(item)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}   
                </div>
                {cartItems.length > 0 ?
                <div className={styles.cart__pay} >
                    <div className={styles.pay__text}>
                        <div className={styles.pay__productCount}>
                            <div>Товары{" "} ({cartItems.length})</div>
                            <div>{totalPrice}{" "} ₽</div>
                        </div>
                        <div className={styles.pay__totalPrice}>
                            <div>Итого</div>
                            <div className={styles.totalProce__counter}>{totalPrice}{" "}₽</div>
                        </div>

                        <div className={styles.btn__block}>
                            
                                <Link to="/checkout" className={styles.pay__button}>Оформить заказ</Link>
                            
                        </div>
                        <div className={styles.pay__discription}>
                            Дата и стоимость доставки или самовывоза определяется при оформлении заказа
                        </div>
                    </div>
                </div> :
                <div className={styles.cart__empty}>

                    <div className={styles.cart__emptyContent}>
                        <div className={styles.cart__emptyIcon}><PiWarningCircleBold /></div>
                        <div className={styles.cart__emptyText}>
                            <div className={styles.inCartEmpty}>
                                В корзине пусто
                            </div>
                            <div className={styles.cart__emptyDiscription}>
                                Перейдите в каталог, чтобы добавить нужные товары
                            </div>
                        </div>

                        <div className={styles.cart__emptyBtn}>
                            <Link to="/" className={styles.emptyBtn__text}>
                                Перейти в каталог
                            </Link>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default Cart;