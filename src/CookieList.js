// import Data
import products from "./products";
// Styling
import styles from "./styles";
const DATA_Products = () => {
    const DATA_Products = products.map((cookie) => (
      <div>
        <img src={cookie.image} alt={cookie.name} style={styles.cookieImage} />
        <p style={styles.text}>{cookie.name}</p>
        <p style={styles.text}>{cookie.price} KD</p>
      </div>
    ));
    return <div>{DATA_Products}</div>;
  };
  
  export default DATA_Products;