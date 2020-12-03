import React, { Component } from "react";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    value: "",
  };
  formControl = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.props.search}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchImage"
            value={this.state.value}
            onChange={this.formControl}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
