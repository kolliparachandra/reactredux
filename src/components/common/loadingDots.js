import React from 'react';
import {PropTypes} from 'prop-types';
class LoadingDots extends React.Component{
  constructor(){
    super();
    this.state = {frame:1, isMounted: false};
  }

  componentDidMount(){
    this.interval = setInterval(()=>{
    if(this.state.isMounted){
      this.setState({frame:this.state.frame + 1,isMounted:true});
    }
    },this.props.interval);
  }

  componentWillUnMount(){
    this.setState({isMounted:false});
    clearInterval(this.interval);
  }
  render(){
    let dots = this.state.frame % (this.props.dots + 1);
    let text = '';
    while(dots > 0){
      text += '.';
      dots--;
    }
    return <span>{text}&nbsp;</span>;
  }
}
LoadingDots.defaultProps={
  interval:300,dots:3
}

LoadingDots.propTypes ={
  interval:PropTypes.number,
  dots:PropTypes.number
};
export default LoadingDots;
