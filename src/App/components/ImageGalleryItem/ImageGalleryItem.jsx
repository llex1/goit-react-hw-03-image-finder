import React, {Fragment} from "react";
import styles from "./ImageGalleryItem.module.css";

function ImageGalleryItem({galleryArray}) {
  const dataOut = galleryArray.map((el) => {
    return (
      <li className={styles.ImageGalleryItem} key={el.id+Math.ceil(Math.random()*1000)}>
        <img
          src={el.webformatURL}
          alt={el.tags}
          data-large={el.largeImageURL}
          className={styles.ImageGalleryItemImage}
        />
      </li>
    );
  });

  return (
    <Fragment>
      { dataOut }
    </Fragment>
  )
}
export default ImageGalleryItem;
