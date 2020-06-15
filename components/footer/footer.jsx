import React from "react";
import style from "./footer.module.css";
import {LinkTo, NavigationLink, ScrollToTop, TitleH4} from "../element";


export const Footer = () => {
    return (
        <div className={style.footer_wrapper + " " + "pad-66"}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-12 mt-3">
                        <div>
                            <TitleH4>Санкт-Петербург</TitleH4>
                        </div>
                        <div>
                            Большой Проспект П. С., 18, офис 22
                        </div>
                    </div>

                    <div className="col-lg-4 col-12 mt-3">
                        <div>
                            <TitleH4><LinkTo src="mailto:mail@octoberweb.ru">mail@octoberweb.ru</LinkTo></TitleH4>
                        </div>
                        <div>
                            Большой Проспект П. С., 18, офис 22
                        </div>
                    </div>

                    <div className="col-lg-4 col-12 text-lg-right text-left mt-3">
                        <ScrollToTop>Написать нам</ScrollToTop>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-4 col-12">
                            <div className="d-flex justify-content-between flex-lg-nowrap flex-wrap">
                                <NavigationLink href="#text-block">Текстовые блоки</NavigationLink>
                                <NavigationLink href="#gallery">Галерея</NavigationLink>
                                <NavigationLink href="#form">Форма</NavigationLink>
                            </div>
                    </div>
                    <div className="col-lg-8 col-12">
                        <div className="text-lg-right text-left">
                            © 2009-2020 OctoberWeb
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.hr_bb} />
        </div>
    )
}