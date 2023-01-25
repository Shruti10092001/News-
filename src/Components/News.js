import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 8,
    category: "sports",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    console.log("hello i am a constructor ");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKeya998aaf10050441f995cb7295f3fcb7a&page=1&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsData = await data.json();
    // console.log(parsData);
    this.setState({
      articles: parsData.articles,
      totalResults: parsData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    // console.log(pre);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKeya998aaf10050441f995cb7295f3fcb7a&page=${
      this.state.page - 1
    }&pageSize=${this.props.pagesize}`;
    // {
      this.setState({ loading: true });
    // }
    let data = await fetch(url);
    let parsData = await data.json();
    console.log(parsData);
    this.setState({
      page: this.state.page - 1,
      articles: parsData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pagesize)
      )
    )
    {
      // console.log(next);
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKeya998aaf10050441f995cb7295f3fcb7a&page=${
        this.state.page + 1
      }&pageSize=${this.props.pagesize}`;
      // {
        this.setState({ loading: true });
      // }
      let data = await fetch(url);
      let parsData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsData.articles,
        loading: false,
      })
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center border border-dark">
            Today's Top Headlines
          </h1>
          {this.state.loading && <Spinner />}
          <div className="row my-5">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageurl={element.urlToImage}
                      newsurl={element.url}
                    />
                  </div>
                );
              })}
          </div>
          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              &larr; previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pagesize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
