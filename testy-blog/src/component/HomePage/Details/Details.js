import React from "react";

class Details extends React.Component {
  handleList = () => {
    this.props.onChange({}, "list")
  }
  render() {
    const item = this.props.data;
    // console.log(this.props.data);
    return (
      <div>
       {item.name} <br/> {item.category} <br/> {item.ingredients} <br/> {item.recipe} <br/>
        <img src={item.image} alt={item.image}/>
        <button onClick={this.handleList}>Cancel</button>
      </div>
      // return <div>Details</div>;
    );
  }
}

export default Details;
