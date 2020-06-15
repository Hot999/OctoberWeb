import React, {useContext} from "react";
import style from "./popup.module.css"
import {Context} from "../context"

export const PopupImg = props => {
    const {closeModal} = useContext(Context)
    const src = props.src;
    const divStyle = {
        background: 'no-repeat center/100% url(' + src + ') #00D',
        backgroundSize: "cover"
    };
    return (
        <div className={style.wrapper} style={divStyle}>
            <div className={style.close_modal} onClick={() => closeModal()}><img src="/images/Close.svg" alt=""/></div>
            <img src={src} className={style.img_modal} alt=""/>
        </div>
    )
}