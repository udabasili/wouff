import React from "react";

const Review = () =>{
    return (
        <section className="section-review">            
          <div className="review">
                <figure className="review__shape">
                    <img
                        src="https://images.unsplash.com/photo-1517499610481-9bc77847c8b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                        alt="person 1"
                        className="review__image"/>
                    <figcaption className="review__caption">MarySmith</figcaption>
                </figure>
                <div className="review__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Highly Recommended
                    </h3>
                    <p className="review-paragraph">
                        <q>
                        Extremely knowledgeable and helpful with really useful local knowledge.   Very easy to work with and keen to listen to what you want and tailor your holiday accordingly
                        </q>
                    </p>
                </div>
            </div>
            <div className="review">
                <figure className="review__shape">
                    <img
                        src="https://images.unsplash.com/photo-1545506475-1175e38cd8b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                        alt="person 1"
                        className="review__image"/>
                    <figcaption className="review__caption">Hannah Doe</figcaption>
                </figure>
                <div className="review__text">
                    <h3 className="heading-tertiary">
                        Excellent Service
                    </h3>
                    <p className="review-paragraph">
                        <q>
                        A good company and great people to deal with! Extensive knowledge of the locations and the ability to change an itinerary to suit changing circumstances. Our first experience of dealing with a specialist travel company and what a difference it has made to our usual DIY travel planning. 
                        </q>
                    </p>
                </div>
            </div>
  </section>
    )
}

export default Review;
