import "./styles.css";
import React from "react";
import Header from "./components/Header";
import List from "./components/List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ""
    };
  }
  
  handleInput = (e) => {
    this.setState({
      text: e.target.value
    });
  };
  
  addItem = (e) => {
    e.preventDefault();
    const newItems = [...this.state.items];
    newItems.push({
      text: this.state.text,
      id: Math.random()
    });
    this.setState({
      items: newItems,
      text: ""
    });
  };

  delMe = (id) => { 
    const newItems = [...this.state.items]
    const index = this.state.items.findIndex((el)=> el.id==id)
    newItems.splice(index,1)
    this.setState({
      items: newItems,
    })
  }
  render() {
    return (
      <div id="ToDo_input_div">
        <Header
          text={this.state.text}
          handleInput={this.handleInput}
          addItem={this.addItem}
        />
        <List items={this.state.items}         
         delMe={this.delMe} />
      </div>
    );
  }
}

export default App;
