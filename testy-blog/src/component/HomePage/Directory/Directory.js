import React from "react";
import axios from "axios";

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
        {this.state.categoryList.map(item => {
        return <button key={item.id} onClick={() => this.handleClickCategory(item.name)} >{item.name} </button>
        })}
      </div>
    );
  }
}

export default Directory;