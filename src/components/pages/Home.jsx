import products from "./../../assets/products.json";
import reviews from "./../../assets/reviews.json"
import Product from "./Product.jsx";
import Review from "./Review.jsx";


const Home = () => {
    const productList = products.map((product) => <Product key={product.id} title={product.name} amount={product.price} description={product.description} />);
    const reviewList = reviews.reviews.map((review) => <Review key={review.id} name={review.name} time={review.time} review={review.review} />);
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
                    <h2>Google Reviews</h2>
                    <div className="review-cards">
                        {reviewList}
                    </div>
                </section>

                <section>
                    <h2>Best seller</h2>
                    <div className="product-card">
                        {productList}
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