import React from "react";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavbarToggler from "./UI/NavbarToggler";
import RegisterBtn from "./UI/RegisterBtn";
import video from "./../assets/images/background/preview.mp4";

const Header = () => {
    const {
        data: { promoText },
    } = useSelector((state) => state.data);

    return (
        <>
            <section className="hero-section home full">
                <div className="header-wrap">
                    <header className="header">
                        <nav className="navbar navbar-expand-lg">
                            <Logo type={"mobile"} />
                            <Logo type={"desktop"} />
                            <NavbarToggler />
                            <Navbar />
                        </nav>
                    </header>
                    <div className="wrap">
                        <div className="container">
                            <div className="inner-wrap">
                                <div className="content-column">
                                    <h1 className="title">Построим уютный и теплый дом по цене квартиры за 3 месяца «под ключ»</h1>
                                    <h4 className="subtitle">
                                        Наша команда профессионалов сделает все, чтобы ваш дом стал идеальным местом для жизни. У нас нет
                                        скрытых расходов, а качество и надежность строительства гарантированы. Доверьте нам свои мечты, и мы
                                        сделаем все возможное, чтобы вы смогли насладиться комфортом своего нового дома в самые короткие
                                        сроки
                                    </h4>
                                    <div className="buttons-wrap">
                                        <RegisterBtn classes={["btn-white"]} link="#contacts">
                                            Оставить заявку
                                        </RegisterBtn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <video autoPlay muted loop="loop">
                    <source src={video}></source>
                </video>
            </section>
        </>
    );
};

export default Header;
