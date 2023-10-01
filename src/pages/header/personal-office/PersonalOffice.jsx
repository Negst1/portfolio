import { FormControl, TextField } from "@mui/material";
import styles from "./PersonalOffice.module.css";
import { Link } from "react-router-dom";

const PersonalOffice = () => {
    return (  
        <div className={styles.office}>
            <div className={styles.office__content}>
                <div className={styles.btn__back}>
                    <Link to ="/">
                        Назад
                    </Link>
                </div>
                <div className={styles.office__title}>

                </div>
                <FormControl fullWidth className={styles.form}>
                    <span className={styles.input__content}>
                        <TextField className={styles.input} type="email" label="Имя пользователя" variant="standard">
                        </TextField>
                    </span>
                    <div className={styles.input__content}>
                        <TextField className={styles.input} type="password" label="Пароль" variant="standard">
                        </TextField>
                    </div>
                </FormControl>
                <div className={styles.signUp__content}>
                    <button className={styles.signUp__btn}>Войти</button>
                </div>
            </div>
        </div>
    );
}
 
export default PersonalOffice;