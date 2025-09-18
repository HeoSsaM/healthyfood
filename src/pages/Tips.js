import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Tips = () => {
    return (
        <div className='contents'>
            <section>
                <h2>생활 속 건강 팁</h2>
                <Tabs>
                    <TabList>
                        <Tab>🍱 식사</Tab>
                        <Tab>🚵‍♀️ 운동</Tab>
                        <Tab>🍂 휴식</Tab>
                    </TabList>                    
                    <TabPanel>
                        <h3>건강한 식사습관</h3>
                        <p className="text">
                            식습관은 건강의 기본이에요. 하루 세 끼를 어떤 방식으로 먹느냐에 따라 체중, 에너지 수준, 질병 위험까지 달라집니다. <em>단순히 "적게 먹자"가 아니라, 어떻게 먹느냐가 핵심이에요.</em>
                        </p>
                        <h4>🍋 실천 팁</h4>
                        <dl>
                            <div>
                                <dt> 천천히 먹기</dt>
                                <dd> 뇌가 포만감을 느끼기까지 20분이 걸리므로, 최소 20번 이상 꼭꼭 씹으며 삼켜야 과식을 막을 수 있어요.</dd>
                            </div>
                            <div>
                                <dt> 물 먼저 마시기</dt>
                                <dd> 식사 전 물 한 컵은 과식을 줄이고 소화기관을 준비시켜요.</dd>
                            </div>
                            <div>
                                <dt> 채소 절반 채우기</dt>
                                <dd> 접시의 절반을 채소로 구성하면 영양 균형과 포만감을 동시에 잡을 수 있어요.</dd>
                            </div>
                           <div>
                                <dt> 가공식품 줄이기</dt>
                                <dd> 인스턴트나 가공식품 대신 자연 그대로의 식품을 선택하세요.</dd>
                            </div>
                        </dl>
                    </TabPanel>
                    <TabPanel>
                        <h3>하루 30분 운동</h3>
                        <p className="text">
                            운동은 단순히 체중 감량이 아니라, 혈액순환, 뼈와 근육 강화, 스트레스 해소 등 전신 건강과 직결됩니다. <em>규칙적으로 움직이는 습관이 ‘몸의 노화 속도’를 늦춰줘요.</em>
                        </p>
                        <h4>🌱 실천 팁</h4>
                        <dl>
                            <div>
                                <dt> 하루 30분 걷기</dt>
                                <dd> 땀이 살짝 나는 정도로 걷는 것만으로도 심혈관 건강이 향상돼요.</dd>
                            </div>
                            <div>
                                <dt> 스트레칭 습관화:</dt>
                                <dd> 아침 기상 직후와 자기 전 스트레칭은 근육을 풀어주고 혈액순환을 돕습니다.</dd>
                            </div>
                            <div>
                                <dt> 작은 운동 쌓기</dt>
                                <dd> 엘리베이터 대신 계단, 버스 한 정거장 일찍 내려 걷기 같은 소소한 습관이 큰 효과를 줘요.</dd>
                            </div>
                           <div>
                                <dt> 근력 운동 추가하기</dt>
                                <dd> 주 2~3회 맨몸 근력 운동(스쿼트, 푸시업 등)만 해도 기초대사량이 올라갑니다.</dd>
                            </div>
                        </dl>
                    </TabPanel>
                    <TabPanel>
                        <h3>규칙적인 수면</h3>
                        <p className="text">
                            아무리 잘 먹고 운동해도 ‘휴식’이 부족하면 면역력이 떨어지고, 집중력이 흐려집니다. <em>수면과 정신적 휴식은 몸을 회복시키는 필수 조건이에요.</em>
                        </p>
                        <h4>🛋 실천 팁</h4>
                        <dl>
                            <div>
                                <dt> 규칙적인 수면</dt>
                                <dd> 매일 같은 시간에 자고 일어나면 생체 리듬이 안정돼 숙면을 취할 수 있어요.</dd>
                            </div>
                            <div>
                                <dt> 전자기기 OFF</dt>
                                <dd> 자기 전 30분은 휴대폰과 TV를 멀리하고 책이나 음악으로 전환하면 숙면에 도움이 돼요.</dd>
                            </div>
                            <div>
                                <dt> 짧은 명상</dt>
                                <dd> 하루 5분만 호흡에 집중하는 명상은 스트레스 완화와 집중력 향상에 효과적이에요.</dd>
                            </div>
                           <div>
                                <dt> 짧은 낮잠</dt>
                                <dd> 15~20분 낮잠은 피로 회복과 뇌 활성화를 돕지만, 길게 자면 오히려 피곤할 수 있어요.</dd>
                            </div>
                        </dl>
                    </TabPanel>
                </Tabs>
            </section>
        </div>
    )
}

export default Tips