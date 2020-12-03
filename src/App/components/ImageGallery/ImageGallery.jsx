import React from "react";
import styles from './ImageGallery.module.css';

function ImageGallery({children, modalOpen}) {
  return <ul className={styles.ImageGallery} onClick={modalOpen}>{children}</ul>;
}

export default ImageGallery;
