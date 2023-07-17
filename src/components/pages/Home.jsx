import products from "./../../assets/products.json";
import Product from "./Product.jsx";

const Home = () => {
    const productList = products.map((product) => <Product key={product.id} title={product.name} amount={product.price} description={product.description} />);
    return (
        <div className="home-container">
            <header>
                <h1>Welcome to Mathi Organic Food and cosmetics</h1>
            </header>
            <main>
                <section>
                    <q className="quote">Your skin is an investment, not an expense</q>
                </section>
                <section>
                    <h2>Featured</h2>
                    <div className="product-card">
                        {productList}
                    </div>
                </section>

                <section>
                    <h2>Best seller</h2>
                    <div className="product-card">
                        <h3>Product title</h3>
                        <p>Product description</p>
                        <button>Add to cart</button>
                    </div>
                </section>
            </main>
            <footer style={{marginTop: "auto"}}>
                <p>&copy; 2023 Cosmetics Store. All rights reserved</p>
            </footer>
        </div>
    );
}

export default Home;