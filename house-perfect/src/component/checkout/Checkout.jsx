import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import styles from "./Checkout.module.css"

const Checkout = (props) => {
    const {cartItems} = props;
    const totalPrice = cartItems.reduce((a,c) => a + c.price * c.qty,0);
    return (
        <div className={styles.checkout}>
        <h1 className={styles.placingAnOrder}>Оформление заказа</h1>
        <div className={styles.form__content}>
            <form className={styles.recipient}>
                <div className={styles.form__title}>Получатель</div>
                <div className={styles.form__discription}>Данные нужны для курьера и сообщений об изменениях статуса вашего заказа</div>
                <div>
                    <span className={styles.data__user}><TextField  type="name" placeholder="Фамилия" label="Фамилия"></TextField></span>
                    <span className={styles.data__user}><TextField type="name" placeholder="Имя" label="Имя"></TextField></span>
                </div>
                    <div className={styles.input__tel}><TextField  type="tel" placeholder="Телефон" label="Телефон"></TextField></div>
                <div className={styles.input__email}>
                    <TextField type="email" placeholder="Электронная почта" label="Электронная почта"></TextField>
                </div>
                <div>
                    <input className={styles.form__checkbox} type="checkbox" ></input>
                    <span>Я хочу получать рекламные сообщения и новости о товарах и услугах</span>
                </div>
            </form>

            <div className={styles.order}>
                <div className={styles.order__content}>
                    <div className={styles.pay__yourOrder}>Ваш заказ</div>
                    <div className={styles.products__block}>
                        <div className={styles.pay__products}>Товары {" "} ({cartItems.length})</div>
                        <div className={styles.pay__totalPrice}>{totalPrice}</div>
                    </div>
                    <div className={styles.pay__delivery}>Доставка </div>
                    <div className={styles.totalBlock}>
                        <div className={styles.pay__totalText}>Итого</div>
                        <div className={styles.pay__totalPriceSale}>{totalPrice}</div>
                    </div>
                    <button className={styles.pay__button} >Оформить заказ</button>
                    <div className={styles.pay__discription}>Нажимая кнопку, я даю согласие на обработку персональных данных, в соответствии с Политикой, и соглашаюсь с Правилами</div>
                </div>
            </div>
        </div>
        <div className={styles.delivery__address}>
            <div className={styles.delivery__content}>
                <div className={styles.form__title}>Адрес доставки</div>
                <div>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Пункт назначения</InputLabel>
                
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Пункт назначения"
                    >
                        <MenuItem value={10}>Ростов-на-Дону</MenuItem>
                        <MenuItem value={20}>Москва</MenuItem>
                        <MenuItem value={30}>Санкт-Петербург</MenuItem>
                    </Select>
                    <div className={styles.form__select}>
                        <TextField className={styles.data__user} type="text" label="Комментарий к доставке"></TextField>
                    </div> 
                    </FormControl>
                </div>
                
            </div>
            {/**/}
        </div>

        <div className={styles.form__title}>
        
        </div>
        <div className={styles.pay}>
            
        </div>
        </div>
    );
}

export default Checkout
;