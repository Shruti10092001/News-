import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageurl,newsurl} = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageurl} alt="...." className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsurl} target="_blank" class="btn btn-sm btn-dark">
            Read More......
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
