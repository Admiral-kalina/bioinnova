import * as React from "react"
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import bgTop from "../../public/media/img/bg-top.png"
import bgTopMobile from "../../public/media/img/bg-top-mobile.png"
import acrew from "../../public/media/svg/acrew.svg"
import miro from "../../public/media/svg/miro.svg"
import loom from "../../public/media/svg/loom.svg"
import icon from "../../public/media/svg/icon.svg"
import airbnb from "../../public/media/svg/airbnb.svg"

import icon1 from "../images/icon/icon1.svg"
import icon2 from "../images/icon/icon2.svg"
import icon3 from "../images/icon/icon3.svg"
import icon4 from "../images/icon/icon4.svg"

import "./index.scss"
import {useEffect, useRef, useState} from "react";



const IndexPage = () => {


  return (
      <main>
        <Header/>
        <div  className={` page main-page`}>
          <article className="presentation">
            <picture className="presentation__bg">
              <source media="(max-width: 600px)" srcSet={bgTopMobile}/>
              <img src={bgTop} alt="background lines"/>

            </picture>
            <div className="container d-block-md">
              <div className="presentation-block">
                <h1 className="main-title">
                  Преисполните <br/>
                  свои знания
                </h1>

                <section className="presentation-block__description">
                  <p>
                    Наши курсы предлагают не только знания, но и ключи к успеху в
                    этой захватывающей отрасли. Пройдите обучение под руководством
                    опытных экспертов, раскройте свой потенциал и создайте будущее
                    здоровья вместе с нами.
                  </p>
                  <nav>
                    {/*<a href="#" className="btn btn-yellow">Записаться</a>*/}

                    {/*<div className="btn btn-transparent">*/}
                    {/*    <a href="#">Наш Календарь</a>*/}
                    {/*    <a href="#"><i className="icon-arrow-right"></i></a>*/}
                    {/*</div>*/}
                  </nav>
                </section>
              </div>

              <section className="advantages">
                <div className="advantages__items">
                  <div className="advantages__item">
                    <img src={icon1} alt="icon1"/>
                    <h3>Мастерство Фармацевтики</h3>
                    <p>
                      Погрузитесь в увлекательный мир разработки лекарственных
                      средств.
                    </p>
                  </div>
                  <div className="advantages__item">
                    <img src={icon2} alt="icon1"/>
                    <h3>Точная Диагностика</h3>
                    <p>
                      Освойте искусство точной диагностики заболеваний с помощью
                      передовых методов и медицинских технологий.
                    </p>
                  </div>
                  <div className="advantages__item">
                    <img src={icon3} alt="icon1"/>
                    <h3>Инновации в Медицине</h3>
                    <p>
                      Перейдите на следующий уровень в медицинской практике с
                      помощью этого курса.
                    </p>
                  </div>
                </div>
                <div className="advantages__btn">
                  {/*<a href="#" className="btn btn-yellow">Записаться</a>*/}
                </div>
              </section>
            </div>
          </article>

          <article className="experience">
            <div className="marquee-block">
              <div className="marquee-container">
                <div className="marquee">
                  ГРУПОВЫЕТРЕНИНГИГРУПОВЫЕТРЕНИНГИГРУПОВЫЕТРЕНИНГИ
                </div>
              </div>
            </div>

            <div className="container d-block-md">
              <section className="experience__wrapper">
                <h2 className="experience__title">Доверьтесь опыту и качеству</h2>
                <div className="experience__description">
                  <p className="experience__text">
                    Мы — фармацевтическая компания, которой доверяют миллионы.
                    Доверьтесь нам и позвольте нам заботиться о вашем
                    благополучии. Вместе мы создаем будущее здоровья и комфорта.
                  </p>
                  <div className="line__wrapper">
                    <div className="line"></div>
                  </div>

                  <div className="achievements-wrapper">
                    <div className="achievements__items">
                      <div className="achievements__items--value">116</div>
                      <p className="achievements__description">
                        Выпущенных препаратов
                      </p>
                    </div>
                    <div className="achievements__items">
                      <div className="achievements__items--value">105</div>
                      <p className="achievements__description">
                        Наших мировых партнеров
                      </p>
                    </div>
                    <div className="achievements__items">
                      <div className="achievements__items--value">12</div>
                      <p>Лет на медицинском рынке</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="experience__btn">
              {/*<a href="#" className="btn btn-yellow">Записаться</a>*/}
            </div>

            <div className="container d-block-md">
              <section className="feedback__wrapper">
                <div className="feedback__wrapper--header">
                  <h2 className="experience__title">
                    Что говорят о нас наши ученики
                  </h2>
                  <p className="experience__text">
                    Наши участники разделяют свой опыт и впечатления от
                    прохождения курсов фармацевтики и медицины. Отзывы участников
                    наших курсов:
                  </p>
                </div>
                <div className="feedback__wrapper--footer">
                  <div className="feedback__items">
                    <div className="feedback__card">
                      <div className="feedback__card--img">
                        <img src={icon4} alt="icon"/>
                      </div>
                      <div className="feedback__card--descr">
                        <p>
                          Невероятное погружение в мир фармацевтики! Курс позволил
                          мне разгадать тайны создания лекарств и научил
                          анализировать составы. Очень информативно!
                        </p>
                        <div className="feedback__card--line"></div>
                        <div className="feedback__card--name">
                          <p>- Анна С.</p>
                        </div>
                      </div>
                    </div>

                    <div className="feedback__card">
                      <div className="feedback__card--img">
                        <img src={icon4} alt="icon"/>
                      </div>
                      <div className="feedback__card--descr">
                        <p>
                          Теперь могу с уверенностью определять заболевания и
                          выбирать наилучшие методы лечения. Благодарю компанию за
                          этот опыт!
                        </p>
                        <div className="feedback__card--line"></div>
                        <div className="feedback__card--name">
                          <p>- Дмитрий П.</p>
                        </div>
                      </div>
                    </div>

                    <div className="feedback__card">
                      <div className="feedback__card--img">
                        <img src={icon4} alt="icon"/>
                      </div>
                      <div className="feedback__card--descr">
                        <p>
                          Курс открыл глаза на последние технологии и тенденции. Я
                          готов к применению передовых методов в своей практике.
                        </p>
                        <div className="feedback__card--line"></div>
                        <div className="feedback__card--name">
                          <p>- Екатерина М.</p>
                        </div>
                      </div>
                    </div>

                    <div className="feedback__card">
                      <div className="feedback__card--img">
                        <img src={icon4} alt="icon"/>
                      </div>
                      <div className="feedback__card--descr">
                        <p>
                          Очень впечатлён содержанием курса. Узнал о процессах
                          разработки лекарств, которые раньше казались мне
                          непонятными.
                        </p>
                        <div className="feedback__card--line"></div>
                        <div className="feedback__card--name">
                          <p>- Алексей К.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </article>

          <article className="training">
            <div className="training__bg">
              <div className="training__bg--top">
                <div className="container d-block-md">
                  <div className="partners">
                    <h2 className="visually-hidden">Наши партнеры</h2>
                    <div className="partners__wrapper">
                      <img
                          className="inline-svg"
                          src={acrew}
                          alt="acrew logo"
                      />
                      <img
                          className="inline-svg"
                          src={miro}
                          alt="miro logo"
                      />
                      <img
                          className="inline-svg"
                          src={loom}
                          alt="loom logo"
                      />
                      <img
                          className="inline-svg"
                          src={icon}
                          alt="icon logo"
                      />
                      <img
                          className="inline-svg"
                          src={airbnb}
                          alt="airbnb logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="training__bg--bottom">
                <div className="container d-block-md">
                  <div className="training__items">
                    <div className="training__items--wrapper">
                      <h2 className="training__title">
                        Обучение от Ведущих Экспертов
                      </h2>

                      <div className="training__subtitle">
                        <p>
                          Откройте двери к успешной карьере в мире медицины и
                          фармацевтики с нашими специализированными курсами.
                          Получите уникальные знания и навыки от опытных
                          профессионалов отрасли.
                        </p>
                      </div>
                      {/*<a href="#" className="btn btn-yellow">Записаться</a>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <Footer/>
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Bioscience Innova</title>
