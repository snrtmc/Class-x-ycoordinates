import React from 'react';

const OUTPUT_BOX_STYLES = {
  position: 'absolute',
  top: 0,
  right: 0,
  width: 250,
  padding: 20,
  backgroundColor: 'lightyellow',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
  fontSize: '13px',
};

export default class OutputBox extends React.Component {
  
  
  
  render() {
    const {path,x,y,z} = this.props
    
   
    return <div style={OUTPUT_BOX_STYLES}>Output goes here X: {this.props.x + ' '}   
    Y: {this.props.y + ' '} Z: {this.props.z} Path:{this.props.path.map(item => 
            item).join(' ')} </div>;
  }
}
