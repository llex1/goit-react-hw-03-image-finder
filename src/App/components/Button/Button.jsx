import React, { Component } from "react";
import styles from './Button.module.css';

class Button extends Component {
  state = {};

  searchMore = (event) => {
    return this.props.searchMore(event, true);
  };
  render() {
    return <button onClick={this.searchMore} className={styles.searchMore}>хочу більше фото!</button>;
  }
}

export default Button;
