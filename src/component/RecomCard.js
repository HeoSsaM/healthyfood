import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecomCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={()=>navigate(`/meals/${item.id}`)}>
        <figure><img src={item.image} alt={item.title} /></figure>
        <div className="recom-text">
            <h3>{item.title}</h3>
            <div className="info">
                <span className="calorie">{item.calorie}kcal</span>
                <span className="tag">
                    {item.tags.join("#")} 
                </span>
            </div>
            <p className="text">{item.desc}</p>            
        </div>
    </div>
  )
}

export default RecomCard