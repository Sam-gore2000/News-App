import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl,author,newsDate}=this.props;
    return (
      <div>
        <div className=' my-3'>

                    <div className="card " >
                      <img src={!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl}  className="card-img-top" alt="..."  style={{height:'200px',backgroundSize:'100%,100%'}}/>
                       <div className="card-body">
                       
                       <h5 className="card-title">{title}...</h5>
                       <p className="card-text">{description}...</p>
                       <h6  className='color'>{!author?"Unkwon ":author}{newsDate}</h6>
                       
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                    </div>
      </div>
    )
  }
}

export default NewsItem
