import React from "react";
import { Navigation, Pagination } from "swiper";

import feature_1 from "../assets/images/features/feature_1.svg";
import feature_2 from "../assets/images/features/feature_2.svg";
import feature_3 from "../assets/images/features/feature_3.svg";
import feature_4 from "../assets/images/features/feature_4.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Features = () => {
    const features = {
        title: "Наши преимущества",
        featuresList: [
            {
                title: "Работа по договору",
                imageSrc: feature_1,
                text: "Наша компания строго соблюдает все условия и сроки, установленные в договоре. Мы ценим доверие наших клиентов и гарантируем прозрачность и честность в каждой сделке. Работая с нами, вы можете быть уверены в качестве наших услуг",
            },
            {
                title: "Фиксированная оплата на всех этапах",
                imageSrc: feature_2,
                text: "Мы понимаем важность точного планирования бюджета для наших клиентов, поэтому предлагаем четкие и прозрачные цены без скрытых расходов. Независимо от того, с чего начинается ваш проект, вы можете быть уверены, что оплата останется фиксированной на всем пути к достижению ваших целей",
            },
            {
                title: "Без предоплат",
                imageSrc: feature_3,
                text: "Мы уверены в качестве нашей работы и готовы начать проект без каких-либо финансовых обязательств со стороны клиента. Вместе мы создадим результат, который будет полностью соответствовать вашим ожиданиям и потребностям",
            },
            {
                title: "Гарантийное обслуживание",
                imageSrc: feature_4,
                text: "Если вам потребуется ремонт или обслуживание после завершения работ, наши профессионалы будут всегда готовы помочь вам. Мы ценим наших клиентов и стремимся к их полному удовлетворению на протяжении всего процесса строительства и после его завершения",
            },
        ],
    };

    return (
        <section id="features" className="features-list-section section">
            <div className="container">
                <h3 className="section-title text-center ">{features.title}</h3>
                <div className="features-list">
                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={100}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        loop={true}
                    >
                        {features.featuresList.map((feature, i) => (
                            <SwiperSlide key={feature.title}>
                                <div className="features-list-col" key={feature.title}>
                                    <div href="/features/tournament-management" className="features-list-item">
                                        <div className="icon-wrap">
                                            <img src={feature.imageSrc} alt="Fast – Easy – Secure Payments" />
                                        </div>
                                        <h5 className="feature-title">{feature.title}</h5>
                                        <p>{feature.text}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Features;
