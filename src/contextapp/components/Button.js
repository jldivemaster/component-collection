import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

// Using Consumer to retrieve data:
class Button extends React.Component {

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
        </LanguageContext.Consumer>
      </button>
    )
  };

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  };
}

export default Button;


// Using context type to retrieve data:
// import React from 'react';
// import LanguageContext from '../contexts/LanguageContext';
//
// class Button extends React.Component {
//   static contextType = LanguageContext;
//
//   render() {
//     const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
//     return (
//       <button className="ui button primary">{text}</button>
//     )
//   };
// }
//
// export default Button;
