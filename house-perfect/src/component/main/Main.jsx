import Cards from "../card/Card";
import styles from "./Main.module.css"

const Main = (props) => {
    const {addToCart} = props
    return (  
        <main>
            <div className = {styles.header__promo}>
                
            </div>
            <Cards addToCart={addToCart}></Cards>
        </main>
    );
}

export default Main;