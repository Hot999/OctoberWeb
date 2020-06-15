import React from 'react'
import styles from "./header.module.scss"
import {NavigationLink} from "../element";


export default function Header(props) {

    return (
        <div className={styles.header_wrapper}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <img src="/images/Logo.svg" alt=""/>
                    </div>
                    <div className={"col-6  " + styles.mobile_header}>
                        <div className={styles.ul}>
                            <NavigationLink href="#text-block">Текстовые блоки</NavigationLink>
                            <NavigationLink href="#gallery">Галерея</NavigationLink>
                        </div>
                    </div>
                    <div className={"col-4  " + styles.mobile_header}>
                        <div className={styles.link_to_form + " text-center"}>
                            <NavigationLink href="#form">👋 Форма с приветами</NavigationLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}