import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const MealsDetail = () => {
  const { id } = useParams(); //URL에서id 추출
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/db.json`)
      .then(r => r.json()) //json 형식으로 데이터 변환
      .then((data) => {
        const found = data.meals.find((m) => m.id === parseInt(id));
        setItem(found)
      })
      .catch(console.error);
  }, [id]); //id가 바뀔 때마다 실행

  if (!item) return <p>데이터 불러오는 중..</p>

  return (
    <section>
      <div className="card-list">
        <div className="card">
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
      </div>
    </section>

  )
}

export default MealsDetail