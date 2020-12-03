import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={styles.modalWrapper} onClick={this.props.closeModal}>
        <img className={styles.modalImg} src={this.props.modalData} alt="" />
      </div>
    );
  }
}

export default Modal;
