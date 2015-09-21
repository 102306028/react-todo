import React from 'react';
import Radium from 'radium';
const styles = {
  wrap: {
    width: 60
  },
  buttonstyle:{
    backgroundColor: 'transparent',
      color: '#AAA',
      width: '100%',
      border: 1,
      height: '100%',
      outline: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      ':hover': {
        color: '#777'
      }
  }
};

const CheckAllButton = React.createClass({
  render() {
    return (
      <div style={styles.wrap}>
        <button onClick={this.props.toggleCompleteAll} type='button' style={styles.buttonstyle} >
          <span className={'fa ' + (this.props.isCollapsed ? 'fa-chevron-up' : 'fa-chevron-down')}></span>
        </button>
      </div>

    )
  }
});

module.exports = Radium(CheckAllButton);
