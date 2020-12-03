import React, { Component } from "react";
import axios from "axios";

//jsx components
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Loader from "react-loader-spinner";

//data
import api from "./data/api";

//styles
import styles from "./App.module.css";

class App extends Component {
  state = {
    value: "",
    page: 1,
    galleryArray: [],
    isModalShow: false,
    modalData: "",
    loader: {
      visible: false,
      type: "Oval",
      color: "#3f51b5",
      height: 50,
      width: 50,
    },
  };

  search = (event, isSearchMore) => {
    event.preventDefault();
    this.setState((state) => {
      return {
        loader: { ...state.loader, visible: true },
      };
    });
    if (!isSearchMore) {
      //щоб з'явився ЗВЕРХУ спіннер при повторному пошуку
      this.setState((state) => {
        return {
          galleryArray: [],
        };
      });
      const value = event.target.searchImage.value;
      axios
        .get(
          `${api.URI}?key=${api.key}&q=${value}&page=${this.state.page}&per_page=12&image_type=photo&orientation=horizontal`
        )
        .then((response) => {
          this.setState((state) => {
            return {
              page: 1,
              value: event.target.searchImage.value,
              galleryArray: [...response.data.hits],
            };
          });
        })
        .then(() => {
          this.setState((state) => {
            return {
              loader: { ...state.loader, visible: false },
            };
          });
        });
    } else {
      axios
        .get(
          `${api.URI}?key=${api.key}&q=${this.state.value}&page=${
            this.state.page + 1
          }&per_page=12&image_type=photo&orientation=horizontal`
        )
        .then((response) => {
          this.setState((state) => {
            return {
              page: ++state.page,
              galleryArray: [...state.galleryArray, ...response.data.hits],
            };
          });
        })
        .then(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        })
        .then(() => {
          this.setState((state) => {
            return {
              loader: { ...state.loader, visible: false },
            };
          });
        });
    }
  };

  modalOpen = (event) => {
    if (event.target.nodeName === "IMG") {
      this.setState((state) => {
        return {
          isModalShow: true,
          modalData: event.target.dataset.large,
        };
      });
    }
  };
  modalClose = () => {
    this.setState((state) => {
      return {
        isModalShow: false,
        modalData: "",
      };
    });
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar search={this.search} />
        <ImageGallery modalOpen={this.modalOpen}>
          {this.state.galleryArray.length ? (
            <ImageGalleryItem galleryArray={this.state.galleryArray} />
          ) : (
            ""
          )}
        </ImageGallery>
        <Loader className={styles.Loader} {...this.state.loader} />
        {this.state.galleryArray.length ? (
          <Button searchMore={this.search} />
        ) : (
          ""
        )}
        {this.state.isModalShow ? (
          <Modal
            modalData={this.state.modalData}
            closeModal={this.modalClose}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
