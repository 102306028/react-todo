var React = require('react');
import Radium from 'radium';

const styles = {
  thing:{
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: '0 0 0 16px',
    boxSizing: 'border-box'
  }
};

const Things = React.createClass({


  render() {

    return (
      <div style={styles.thing}>
      <span>{this.props.content}</span>
      </div>

    )
  }
});

module.exports = Things;
