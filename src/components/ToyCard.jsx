import React, { Component } from 'react';

class ToyCard extends Component {


  //create the function to increment the likes
  incrementLikes = () => {
    this.props.likeHandler(this.props.toy)
  }

  //create the local function to donate a toy via props
  donateToy = () => {
    this.props.donateHandler(this.props.toy.id)
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={this.incrementLikes}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.donateToy}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
