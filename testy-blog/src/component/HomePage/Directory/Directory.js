import React from "react";
import axios from "axios";
import './Directory.css';
import breakfast from './breakfast.png';
import cakes from './cakes.png';
import soups from './soups.png';
import pizza from './pizza.png';

class Directory extends React.Component {
  state = {
    categoryList: []
  }

  componentDidMount() {
    this.fetchCategories()
  }

  fetchCategories = async () => {
    const response = await axios.get('http://localhost:8000/category');

    this.setState({
      categoryList: response.data
    })
  }

  handleClickCategory = category => {
    this.props.onChange(category)
  }

  render() {
    return (
      <div>
          <div className="category">
            {this.state.categoryList.map(item => {
            return <button key={item.id} onClick={() => this.handleClickCategory(item.name)} >{item.name} </button>
            })}
            <img src={breakfast}></img>
            <img src={cakes}></img>
            <img src={soups}></img>
            <img src={pizza}></img>
          </div>
      </div>
    );
  }
}

export default Directory;