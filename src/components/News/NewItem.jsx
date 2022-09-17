import React, { Component } from "react";
import "./NewsItem.css";

export class NewItem extends Component {
  render() {
    return (
      <>
        <section className="news">
          <div className="container">
            <article className="news_item">
              <div className="news__img">
                <img
                  src="https://images.pexels.com/photos/63314/proboscis-monkey-proboscis-borneo-long-proboscis-monkey-63314.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="SEO Solution"
                />
              </div>

              <div className="news__info">
                <h4>SEO Solution Website </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus sequi distinctio ipsum est, maxime autem?
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </article>
          </div>
        </section>
      </>
    );
  }
}

export default NewItem;
