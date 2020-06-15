import React, {useState} from "react";
import {PopupImg} from "../components/popup/popup";

const PopupHook = () => {
    const [activePopup, setPopupActive] = useState(false);

    if (activePopup) {
        return <PopupImg />
    }
    return activePopup
}

