import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {

  // constructor not needed due to the powerdrain this function is
  componentWillMount(){ // should be done in constructor but the tests must have their due
    this.setState({
      tweets: this.props.newTweets
    })
  }
  // only render if the newTwets is greater then 0
  shouldComponentUpdate(nextProps, nextState){
    return (!!nextProps.newTweets.length)
  }
  // add the new tweets to the front of the existing tweets
  componentWillReceiveProps(nextProps){
    this.setState({
      tweets: [...nextProps.newTweets, ...this.state.tweets]
    });
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;