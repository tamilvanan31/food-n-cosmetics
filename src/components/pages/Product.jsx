// eslint-disable-next-line react/prop-types
const Product = ({title, description, amount}) => {
    const dollarSign = "\u0024";
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{dollarSign}{amount}</p>
            <button>Add to cart</button>
        </div>
    )
}

export default Product;