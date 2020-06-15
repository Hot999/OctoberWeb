import React from 'react'
import styles from "./header.module.scss"


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
                            <a>
                                Тестовые блоки
                            </a>
                            <a>
                                Галерея
                            </a>
                        </div>
                    </div>
                    <div className={"col-4  " + styles.mobile_header}>
                        <div className={styles.link_to_form + " text-center"}>
                            👋 Форма с приветами
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}