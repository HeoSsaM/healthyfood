import React, { useEffect, useState } from 'react'
//import RecomCard from '../component/MealCard';
import MealCard from '../component/MealCard';

const Meals = () => {
  const [all, setAll] = useState([]); //전체 데이터상태
  const [showAll, setShowAll] = useState(false);//더보기 버튼 클릭 상태에 따라 true/false

  useEffect(()=>{
    fetch('/db.json')
      .then(r=>r.json()) //json 형식으로 데이터 변환
      .then(data => setAll(data.meals || [])) //json에서 meals 배열만 꺼내서 상태에 저장
      .catch(console.error);
  }, []); //페이지가 처음 로드될 때 한번만 실행

  const visible = showAll ? all : all.slice(0, 10);
  const restCount = Math.max(all.length - 10, 0); //전체 데이터갯수 - 10을 뺀 나머지를 보여주고 나머지가 음수일 경우에는 0으로 처리

  return (
    <section className="contents">
      <div className="title-area">
        <h2>건강한 식단관리</h2>
        <small>총 {all.length}개 항목 중  처음 10개를 보여줍니다.</small>
      </div>

      <div className="card-list">
        {visible.map((item) => (
          <MealCard key={item.id} item={item} />
        ))}
      </div>

      {
        !showAll && restCount > 0 && (
          <div className='btn-area'>
            <button onClick={()=>setShowAll(true)} className='btn primary'>
              더보기(+{restCount})
            </button>
          </div>
        )
      }
    </section>
  )
}

export default Meals