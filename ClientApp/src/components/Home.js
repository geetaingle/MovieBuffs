import React, { Component } from 'react';

let listTypes = [
  {
    id: 0,
    Title: "Movies",
    cardColor: "red",
  },
  {
    id: 1,
    Title: "Series",
    cardColor: "green",
  },
  {
    id: 2,
    Title: "Latest Releases",
    cardColor: "blue",
  }
]

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <div><>Trending</></div>
        <div>{
          listTypes.map(item => <div key={item.id}>
            <button style={{ background: item.cardColor }}>{item.Title}</button>
          </div>)
        }</div>
      </div>
    );
  }
}
