import React from 'react';
import { useNavigate } from 'react-router-dom';

let listTypes = [
  {
    id: 0,
    Title: "Movies",
    cardColor: 'rgb(255, 161, 114)',
  },
  {
    id: 1,
    Title: "Series",
    cardColor: "rgb(163, 255, 179)",
  },
  {
    id: 2,
    Title: "Latest Releases",
    cardColor: "rgb(198, 224, 255)",
  }
]

export function Home() {

  const navigate = useNavigate();

  const getList = (id) => navigate('/list?' + id)

  return (
    <div className='home'>
      <div><button className="trending">Trending</button></div>
      <div>{
        listTypes.map(item =>
          <div className='card'
            key={item.id}
            style={{ background: item.cardColor }}
            onClick={() => getList(item.id)}
          >
            {item.Title}
          </div>)
      }</div>
    </div>
  )
}
