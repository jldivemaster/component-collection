import React from 'react';

export default class SearchBar extends React.Component {

  state = { term: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term)
  }

  render(){
    return(
      <div>Image Search
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <input type="text" value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value}) }
            />
          </div>
        </form>
      </div>

    )
  }
}
