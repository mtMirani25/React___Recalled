import React, { Component } from "react";
import NewItem from "./NewItem";

export class News extends Component {
  render() {
    return (
      <>
        <h2 className="my-4 text-center ">Our Popular Courses</h2>
        <div className="container1 news__container">
          <NewItem />
          <NewItem />
          <NewItem />
        </div>
      </>
    );
  }
}

export default News;
