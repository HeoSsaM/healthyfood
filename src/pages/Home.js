import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RecomCard from '../component/RecomCard';

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};


const Home = () => {
    const [recs, setRecs] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/db.json`)
            .then((r) => r.json()) //요청한 데이터를 json 형태로 바꿔줘
            .then((data) => {
                //console.log("전체데이터:", data);
                const meals = data.meals || []; //data.meal가 있으면 그 값 그대로 보여주고 없으면 빈 배열로 처리 -> meals 데이터가 항상 배열로 처리되도록 해주는 구문
                console.log("meals 배열:", meals);

                //db.json에서 recommened라는 값이 true인 요소만 모아서 새 배열로 만든다으면 onlyRecommended에 담음.
                const onlyRecommended = meals.filter((m) => m.recommended);
                //console.log("추천만: ", onlyRecommended)

                const firstFour = onlyRecommended.slice(0, 4);
                //console.log('앞4개 :', firstFour)

                setRecs(firstFour);
            })
            .catch((err) => {
                console.log("db.json 로드 실패: ", err)
            })
    }, []); //[]은 처음 실행했을 때 한번만 실행

    return (
        <div className="contents">
            <Carousel
                responsive={responsive}
                swipeable={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                infinite
                className="hero-slide"
            >
                <div>
                    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" alt="연어스테이크" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1625467150224-673f708dd8e8?q=80&w=1169?auto=format&fit=crop&w=800&q=80" alt="토마토파스타" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=800&q=80" alt="아보카도샐러드" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1600850056243-2826d4db4bd8?auto=format&fit=crop&w=800&q=80" alt="과일플래터" />
                </div>
            </Carousel>

            <section>
                <div className="intro-text">
                    <h1>
                        <span> Mealight 미라이트</span>
                        <span>“건강한 식사의 빛을 비추다”</span>
                    </h1>
                    <div className="text-area">
                        <p className='text'> 매일 무엇을 먹느냐는,
                            결국 어떤 삶을 선택하느냐와 같습니다.</p>
                        <p className='text'>🌱 미라이트는 당신의 식탁 위에
                            가볍지만 깊이 있는 영양을,
                            심플하지만 진심이 담긴 요리를 소개합니다.</p>
                        <p className='text'>지금, 당신의 건강한 한 끼를
                            미라이트에서 만나보세요.</p>
                    </div>
                </div>
                <div className="recommendArea">
                    <h2>오늘의 PICK</h2>
                    <div className="card-list">
                        {
                            recs.map((item) => (
                                <RecomCard key={item.id} item={item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home