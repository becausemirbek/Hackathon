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
              {item.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
