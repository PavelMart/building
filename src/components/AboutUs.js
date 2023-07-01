import React from "react";
import { useSelector } from "react-redux";

const AboutUs = () => {
    const {
        data: {
            sections: { aboutUs },
        },
    } = useSelector((state) => state.data);

    return (
        <section id="about" className="about-section section text-center">
            <div className="container">
                <h3 className="section-title text-center">Строительная компания «DOM»</h3>
                <div className="row p-3 justify-content-between">
                    <div className="col-12">
                        <div className="about-us__text">
                            <p>Наша компания оказывает услуги по строительству домов и коттеджей в городе-курорте Сочи.</p>
                            <p>
                                Компания "DOM" - это команда профессионалов своего дела. В нашей компании работают только профессиональные
                                бригады с большим опытом строительства частных домов.
                            </p>
                            <p>
                                Вы легко можете воспользоваться нашей бесплатной консультацией по строительству дома, связавшись с нами по
                                телефону, либо отправив ваш проект на нашу почту для просчета.
                            </p>
                            <p>Кроме того, мы можем приехать на ваш участок для детального разбора Вашего проекта на местности</p>
                            <p>
                                В процессе строительства мы тщательно осуществляем технический контроль, чтобы ваш дом получился идеальным
                                во всех деталях.
                            </p>
                            {/* {aboutUs.text.map((p) => (
                                <p key={p}>{p}</p>
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
