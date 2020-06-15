import React, {useContext, useState} from "react";
import {Context} from "./context";

export const Title = props => {
    return (
        <>
            <h1>
                {props.children}
            </h1>
            <style jsx>
                {`
                    h1 {
                       font-style: normal;
                        font-weight: 800;
                        font-size: 54px;
                        line-height: 120%;
                        color: #333333;
                    }
                    @media (max-width: 568px) {
                        h1 {
                        font-style: normal;
                        font-weight: bold;
                        font-size: 32px;
                        line-height: 120%;
                        color: #333333;
                        }
                    }
                `}
            </style>
        </>
    )
};

export const TitleH2 = props => {
    return (
        <>
            <h2>
                {props.children}
            </h2>
            <style jsx>
                {`
                    h2 {
                    font-style: normal;
                    font-weight: bold;
                    font-size: 40px;
                    line-height: 120%;
                    color: #333333;
                    margin-bottom: 20px;
                    }
                    @media (max-width: 568px) {
                    h2 {
                        font-style: normal;
                        font-weight: bold;
                        font-size: 30px;
                        line-height: 120%;
                        color: #333333;
                    }
                    }
                `}
            </style>
        </>
    )
};
export const TitleH3 = props => {
    return (
        <>
            <h3>
                {props.children}
            </h3>
            <style jsx>
                {`
                    h3 {
                  font-style: normal;
                    font-weight: bold;
                    font-size: 40px;
                    line-height: 120%;
                    color: #333333;
                    }
                     @media (max-width: 568px) {
                    h3 {
                       font-style: normal;
                        font-weight: bold;
                        font-size: 26px;
                        line-height: 120%;
                        color: #333333;
                    }
                    }
                `}
            </style>
        </>
    )
};

export const TitleH4 = props => {
    return (
        <>
            <h4>
                {props.children}
            </h4>
            <style jsx>
                {`
                    h4 {
                    font-style: normal;
                    font-weight: bold;
                    font-size: 30px;
                    line-height: 140%;
                    color: #333333;
                    }
                     @media (max-width: 568px) {
                    h4 {
                      font-style: normal;
                        font-weight: bold;
                        font-size: 20px;
                        line-height: 120%;
                        color: #333333;
                    }
                    }
                `}
            </style>
        </>
    )
};
export const LinkTo = props => {
    return (
        <>
            <a href={props.src}>
                {props.children}
            </a>
            <style jsx>
                {`
                    a {
                    font-style: normal;
                    font-weight: bold;
                    color: #333333;
                    line-height: 160%;
                    }
                    a:hover {
                    color: #00A4F7;
                    }
                `}
            </style>
        </>
    )
};

export const NavigationLink = (props) => {
    return (
        <>
            <a href={props.href}>
                {props.children}
            </a>
            <style jsx>
                {`
                  a {
                list-style: none;
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                color: #128ACE;
            }
            a:hover {
                color: #00A4F7;
                cursor: pointer;
            }
                `}
            </style>
        </>
    )
}

export const ScrollToTop = props => {
    const scroll = () => {
        window.scrollTo(0, 0);
    }
    return (
        <>
            <button onClick={scroll}>
                {props.children}
            </button>
            <style jsx>
                {`
                    button {
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 160%;
                    color: #00A4F7;
                    border: 2px solid #00A4F7;
                    box-sizing: border-box;
                    border-radius: 8px;
                    padding: 10px 30px;
                    background: white;
                    }
                `}
            </style>
        </>
    )
};

export const TitleBIG = props => {
    return (
        <>
            <h2>
                {props.children}
            </h2>
            <style jsx>
                {`
                    h2 {
                    font-style: normal;
                    font-weight: bold;
                    font-size: 48px;
                    line-height: 120%;
                    color: #333333;
                    margin-bottom: 40px;
                    }
                `}
            </style>
        </>
    )
};

export const EasyText = props => {
    function createMarkup() {
        return {__html: props.children};
    }

    return (
        <>
            <div className="easy_text" dangerouslySetInnerHTML={createMarkup()}/>
            <style jsx>
                {`
                    div {
                        font-style: normal;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 160%;
                        color: #333333;
                    }
                `}
            </style>
        </>
    )
}
export const ImageGallery = (props) => {
    const {check} = useContext(Context)
    const callPopup = (event) => {
        let src = event.currentTarget.getAttribute('dataimage')
        check(src)
    }
    return (
        <div onClick={callPopup} className="col-6 col-lg-3 mt-3 cursor_image" dataimage={'' + props.src + ''}>
            <img src={props.src} alt=""/>
            <style jsx>
                {`
                    img {
                        width: 100%;
                        height: 170px;
                        object-fit: cover;
                        border-radius: 8px;
                    }
                    .cursor_image {
                    cursor: pointer
                    }
                    @media (max-width: 768px) {
                    img {
                    height: auto;
                    }
                    }
                `}
            </style>
        </div>
    )
}

export const Image = (props) => {
    return (
        <div className="col-6 col-lg-3 mt-3">
            <img src={props.src} alt=""/>
            <style jsx>
                {`
                    img {
                        width: calc( 100% / 200 );
                        height: 170px;
                        object-fit: cover;
                        border-radius: 8px;
                    }
                `}
            </style>
        </div>
    )
}

export const Ad = props => {
    return (
        <>
            <div className="sticky">
                {props.children}
            </div>
            <style jsx>
                {`
                div {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 160%;
                    color: #ADADAD;
                }
                .sticky {
                      position: sticky;
                      top: 77px;
                      min-height: 2em;
                }
                `}
            </style>
        </>
    )
}
export const LargeText = props => {
    return (
        <>
            <div className="large_text">{props.children}</div>
            <style jsx>
                {`
                .large_text {
                    font-style: normal;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 140%;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #333333;
                }`}
            </style>
        </>
    )
}

export const CopyLinkWrapper = props => {
    const url = props.children;
    const [copyLink, setCopy] = useState(false);
    const [message, setMessage] = useState(false);
    const linkHandler = () => {
        setCopy(true);
        navigator.clipboard.writeText(url);
        setMessage(true);
        setTimeout(() => {
            setMessage(false);
            setCopy(false);
        }, 800)
    }
    return (
        <div className="wrapper_copy_link">
            <div className={"link" + " " + (copyLink ? "active" : "normal")} onClick={linkHandler}>
                <span>{props.children} <span className={!copyLink ? "link_image" : "link_image_normal"}><svg width="25"
                                                                                                             height="25"
                                                                                                             viewBox="0 0 25 25"
                                                                                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.1855 25H5.85938C3.70541 25 1.95312 23.2477 1.95312 21.0938V7.86133C1.95312 5.70736 3.70541 3.95508 5.85938 3.95508H15.1855C17.3395 3.95508 19.0918 5.70736 19.0918 7.86133V21.0938C19.0918 23.2477 17.3395 25 15.1855 25ZM5.85938 5.9082C4.78249 5.9082 3.90625 6.78444 3.90625 7.86133V21.0938C3.90625 22.1706 4.78249 23.0469 5.85938 23.0469H15.1855C16.2624 23.0469 17.1387 22.1706 17.1387 21.0938V7.86133C17.1387 6.78444 16.2624 5.9082 15.1855 5.9082H5.85938ZM22.998 18.6523V3.90625C22.998 1.75228 21.2458 0 19.0918 0H8.25195C7.71255 0 7.27539 0.437164 7.27539 0.976562C7.27539 1.51596 7.71255 1.95312 8.25195 1.95312H19.0918C20.1687 1.95312 21.0449 2.82936 21.0449 3.90625V18.6523C21.0449 19.1917 21.4821 19.6289 22.0215 19.6289C22.5609 19.6289 22.998 19.1917 22.998 18.6523Z"
                                                fill={!copyLink ? "#33333" : "white"}/>
                                            </svg>
                                        </span></span>

            </div>
            {message ? <div className="ml-3 copy_link_message">Ссылка скопирована</div> : null}
            <style>
                {` 
                .wrapper_copy_link {
                    padding-bottom: 10px;
                    padding-top: 10px;
                }
                .copy_link_message {
                    position: absolute;
                    left: 5px;
                    bottom: 3px;
                }
                .link_image_normal {
                    background: #00A4F7;
                     display: block;
                        position: absolute;
                        right: 0px;
                        top: 8px;
                        z-index: 100;
                        height: auto;
                        width: 30px;
                }
                .link {
                    overflow: hidden;
                    margin: 15px 0;
                    width: 100%;
                    cursor: pointer;
                    position: relative;
                    display: flex;
                }
                .link_image {
                       display: block;
                        position: absolute;
                        right: 0px;
                        top: 8px;
                        z-index: 100;
                        height: auto;
                        width: 30px;
                        background: #FFF2C3;
                }
                    .normal {
                        background: #FFF2C3;
                        border-radius: 8px;
                        padding: 10px 15px;
                        margin-right: 30px;
                    }
                    .active {
                      background: #00A4F7;
                      padding: 10px 15px;
                       border-radius: 8px;  
                       margin-right: 30px;
                    }
                    .active span {
                        color: white
                    }
                    span {
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 160%;
                    text-decoration-line: underline;
                    color: #333333;
                    }
                    @media (max-width: 768px) {
                        .link {
                        overflow: hidden;
                        margin: 15px 0;
                        width: 100%;
                        cursor: pointer;
                        position: relative;
                        display: flex;
                        }
                        .wrapper_copy_link {
                            display: block
                        }
                        .copy_link_message {
                            font-size: 13px
                        }
                    }
                `}
            </style>
        </div>
    )
};

