import React from "react";

class List extends React.Component {
  handleClick = data => {
    this.props.onChange(data);
  };

  render() {
    return (
      <div>
        {this.props.data.map(item => {
          return (
            <div key={item.id} onClick={() => this.handleClick(item)}>
              {item.name} <br/> <img src={item.image} alt={item.image}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
