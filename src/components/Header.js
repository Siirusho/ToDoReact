import React from "react";

class Header extends React.Component {
  render() {
    const { text, handleInput, addItem } = this.props;

    return (
      <header>
        <h1>
          <span>ToDo</span>List
        </h1>
        <form onSubmit={addItem}>
          <input
            id="inputField"
            type="text"
            placeholder="What do you what to do?"
            value={text}
            onChange={handleInput}
          ></input>
          <button id="addToDo" type="submit">
            +
          </button>
          <div></div>
        </form>
      </header>
    );
  }
}

export default Header;
