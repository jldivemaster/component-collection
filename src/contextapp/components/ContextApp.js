import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class ContextApp extends React.Component {
  state = { language: 'english',
            color: 'blue' }

  onLanguageChange = (language, color) => {
    this.setState({ language, color })
  };

  render() {
    return(
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english', 'blue')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch', 'red')} />
        </div>
        <ColorContext.Provider value={this.state.color} >
          <LanguageContext.Provider value={this.state.language} >
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  };
}

export default ContextApp;
