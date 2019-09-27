import React from 'react'

function transform(offset) {
  const cos = Math.cos(offset);
  const sin = Math.sin(offset);
  return { transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)` };
}

export default class BGTransform extends React.Component {
  state = {
    styleOne: {},
    styleTwo: {}
   };

onMouseMove = (e) => {
  this.setState({
    styleOne: transform(-e.clientX / e.clientY),
    styleTwo: transform(e.clientX / e.clientY)
  })
};

  render() {
    return(
    <div className="bg" onMouseMove={this.onMouseMove}>
        <div className="bg panel" style={this.state.styleOne} />
        <div className="bg panel" style={this.state.styleTwo} />
      </div>
    )}
}
