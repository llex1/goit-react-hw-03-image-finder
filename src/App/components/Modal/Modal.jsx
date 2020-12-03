import React, {Component} from 'react';
import styles from './Modal.module.css'

class Modal extends Component {
  state = { }

  render() { 
    return ( 
      <div className={styles.modalWrapper} onClick={this.props.closeModal}>
        <img
          className={styles.modalImg}
          src={this.props.modalData}
          alt=''
        />
      </div> 
    );
  }
}
 
export default Modal;