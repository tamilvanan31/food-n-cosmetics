import user from "./../../assets/images/user.jpg"

// eslint-disable-next-line react/prop-types
const Review = ({name, time, review}) => {
    return (
        <div className="review-card">
                <div style={{textAlign: "center"}}>
                    <img src={user} width="40px" height="40px" />
                </div>
                <h3>{name}</h3>
                <p>{time}</p>
                <p>{review}</p>
        </div>
    )
}

export default Review;