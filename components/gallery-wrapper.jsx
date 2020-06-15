import React, {useState, useEffect, useContext} from 'react';
import {Context} from "./context";

export const Gallery = (props) => {
    const divRef = React.createRef();

    const {check} = useContext(Context)

    useEffect(() => {
        let refer = divRef.current && divRef.current.offsetWidth;
        if (refer < 1024) {
            setDefaultImage(3)
        }
        if (refer < 768) {
            setDefaultImage(2)
        }
        if (refer < 568) {
            setDefaultImage(1)
        }
    })
    const [defaultImage, setDefaultImage] = useState(5);


    const img = props.imgage;
    const width = 1440 / defaultImage;
    const ResultImages = img.filter((el, index) => {
        if (index <= defaultImage) {
            return el
        }
    })
    const moorePhoto = img.length - ResultImages.length;
    const callPopup = (event) => {
        let src = event.currentTarget.getAttribute('dataimage')
        check(src)
    }
    const ResultImage = ResultImages.map(el => {
        return (
            <div onClick={callPopup} className="create_text_block" dataimage={'' + el.image + ''} style={{width: width + "px"}} key={el.id}>
                <img  className="style_gallery_img" src={el.image} alt=""/>
                <div className="style_gallery_text">Еще {moorePhoto} фото</div>
            </div>
        )
    })

    return (
        <>
            <div ref={divRef} className="d-flex styles_gallery">
                {ResultImage}
            </div>

        </>
    )
}