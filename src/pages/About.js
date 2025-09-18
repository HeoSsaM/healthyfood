import React from 'react';
import aboutMovie from '../assets/about-bg.mp4'

const About = () => {
  return (
    <div className='about-wrap'>
      <div className="about-mov">
        <video src={aboutMovie} autoPlay loop muted></video>
      </div>
      <section className="contents">
        <div className="slogan-area">
          <em>당신의 식탁에 가벼운 건강을 담다</em>
          <p>mealLight는 바쁜 일상 속에서도 건강한 습관을 만들 수 있도록, 맞춤형 식단을 제안합니다.</p>
        </div>
        <div className="story-1">
          <h2>🌱 브랜드 스토리</h2>
          <div className="text-area">
            <p className="text">우리는 이렇게 시작했습니다.</p>
            <p className='text'><strong>“누구나 쉽게, 가볍게, 그러나 진심으로 건강을 챙길 수는 없을까?”</strong></p>
          </div>
          <div className="text-area">
            <p className="text">바쁜 일상 속에서 건강한 식단을 꾸준히 관리하는 건 생각보다 어렵습니다.</p>
            <p className="text">계획을 세우고, 칼로리를 계산하고, 매일 식사를 기록하는 일은 금세 부담이 되곤 하죠.</p>
            <p className='text'>하지만 <strong>식단은 곧 우리의 건강, 그리고 삶의 질을 결정하는 중요한 습관</strong>입니다.</p>
          </div>
        </div>
        <div className="story-2">
          <h2>🚀 우리의 비전</h2>
          <div className="text-area">
            <p className='text'><strong>““작은 한 끼가 큰 변화를 만든다.”</strong></p>
          </div>
          <div className="text-area">
            <p className="text">mealLight는 단순히 식단을 기록하고 분석하는 앱이 아닙니다.</p>
            <p className='text'><strong>건강한 삶의 방향을 제시</strong>하고, 사용자가 <strong>자신의 식생활을 주체적으로 선택할 수 있도록 돕는 가이드</strong>입니다.</p>
          </div>

          <p className="summary">
            우리는 단지 식단을 관리하는 것이 아니라, <br />
            <strong>매일의 작은 선택이 더 나은 삶으로 이어질 수 있다는 믿음</strong>을 전하고 싶습니다.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About