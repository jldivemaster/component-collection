import React from 'react';

export default class ImageCard extends React.Component {
  constructor(props){
    super(props)
    this.state = { spans: 0 };

    // =====Use React Refs to access DOM elements
    this.imageRef = React.createRef();
  }

// ======Setting parent div height based on child pic attribute using EL
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans })
  }


  render() {
    console.log(this.imageRef.current)
    const { description, urls } = this.props.image;
    return(
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description}
        src={urls.regular}
        />

      </div>
    )
  }
}
