import React, { Component } from 'react'

class SkillSet extends Component {

  constructor(props) {
    super()
  }

  render() {

    const listArray = this.props.list;
    const listItems = listArray.map((listItem) =>
      <li key={listItem}>{listItem}</li>
    );

    return(
      <div className={"col " + this.props.slug}>
        <h4><span>{this.props.slug}</span></h4>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }

}

export default SkillSet
