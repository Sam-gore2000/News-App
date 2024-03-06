import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6,
  };

  static propTypes = {
    country: PropTypes.string,
  };
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  constructor(props) {
    super(props);
    this.state = {
      articles: [], 
      loading: true,
      page: 1,
      totalResult: 0, 
    };
    document.title=`NwesJony- ${this.capitalizeFirstLetter(this.props.category)}`;
  }

    async update(pageNo){
      
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4e709126e9d45b1b15f42156b688a8d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        totalResult: parsedData.totalResults
      });
      
     
  }

  async componentDidMount() {
    
    
    this.update(this.state.page);
  }

  handlePrev = async () => {
   
   this.setState({page:this.state.page -1}) ;
    this.update();
  };

  handleNext = async () => {
    
   this.setState({page:this.state.page +1}) ;
    
    this.update();
  };

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
  
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4e709126e9d45b1b15f42156b688a8d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),  // Corrected here
      totalResult: parsedData.totalResults
    });
  };
  

  render() {
    return (
      <div className='container my-3'>
        <h2 style={{marginTop:'100px'}}>NewsJony-Top News On - {this.props.category}</h2>
        <InfiniteScroll
  dataLength={this.state.articles.length}  // Corrected typo here
  next={this.fetchMoreData}
  hasMore={this.state.articles.length !== this.state.totalResult}
  loader={<div className="loader" key={0}>Loading ...</div>}
>
  <div className='container'>
        <div className='row'>
          {this.state.articles &&
            this.state.articles.map((Element) => {
              return (
                <div className='col-md-4' key={Element.url}>
                  <NewsItem  author={Element.author} newsDate={Element.publishedAt.slice(0,10)}
                    title={Element.title ? Element.title.slice(0, 50) : ''}
                    description={Element.description ? Element.description.slice(0, 88) : ''}
                    imageUrl={Element.urlToImage}
                    newsUrl={Element.url}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className='container'>
          <button
            disabled={this.state.page <= 1} type='button'className='btn btn-dark ' style={{ float: 'left' }} onClick={this.handlePrev} > &larr; Previous</button>
          <button
            type='button'disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} className='btn btn-dark' style={{ float: 'right' }}onClick={this.handleNext}>
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
