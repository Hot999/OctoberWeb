import Head from 'next/head'
import React, {useState} from "react";
import {
    Ad,
    CopyLinkWrapper,
    EasyText, LargeText,
    Title, TitleH2,
} from "../components/element";
import {StaticBlocks} from "../components/static-block-card";
import {Gallery} from "../components/gallery-wrapper";
import {Context} from "../components/context"
import {PopupImg} from "../components/popup/popup";
import {FormHi} from "../components/form/form";


export default function Home(props) {
    const [openedModal, setModal] = useState(false);
    const [srcToModal, setSRC] = useState(null);



    const check = (src) => {
        setModal(true)
        setSRC(src)
    }
    const closeModal = () => {
        setModal(false)
    }

    const data = props.mainPage;
    console.log(data)
    const StaticBlock = data && data.static_blocks.map(el => (
        <StaticBlocks key={el.id} content={el.content} title={el.title} description={el.description}
                      image1={el.image1} image2={el.image2} image3={el.image3} image4={el.image4}
        />
    ));


    return (
        <Context.Provider value={{
            check, closeModal
        }}>
            <div className="main-page">
                <Head>
                    <title>{data && data.title} | {data && data.slug}</title>
                </Head>
                <div className="container-fluid pad-66">
                    <div className="row">
                        <div className="col-12">
                            <Title>{data && data.title}</Title>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 col-12">
                            <EasyText>{data && data.content}</EasyText>
                        </div>
                        <div className="col-lg-3 col-12">
                            <Ad>
                                Этот блок с описанием тоже нужно сверстать. Специально использовали разные стили и
                                текстовые
                                блоки, даже если они порой неуместны ;)
                            </Ad>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <LargeText>текстовые блоки и изображения для галереи</LargeText>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <CopyLinkWrapper>https://test.octweb.ru/api/pages/index/</CopyLinkWrapper>
                        </div>
                        <div className="col-lg-6 col-12 align-self-lg-end">
                            <div className="d-flex">
                                Будет круто, если по клику на желтый блок, соответствующая ссылка сразу скопируется в
                                буфер обмена и пользователь получит какое-то максимально естественное уведомление что у
                                него теперь в буфере эта ссылка.
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container-fluid pad-66 mt-5" id="text-block">
                    {StaticBlock}
                </div>

                <div className="container-fluid pad-66 mt-5" id="gallery">
                    <div className="row">
                        <div className="col-lg-9 col-12">
                            <TitleH2>Галерея с изображениями</TitleH2>
                            <EasyText>Все просто. Выводится столько фотографий сколько влезит на экран. Те что не влезли
                                рассчитываются и выводится их количество над последней фотографией. По клику на эту
                                подпись
                                так же открывается увеличенное версия того изображения, над которым выводится
                                подпись.</EasyText>
                        </div>
                    </div>

                    <div className="mt-4 mb-5">
                        {data && <Gallery imgage={data.gallery}/>}
                    </div>
                    <div className="row">
                        <div className="col-lg-9 col-12">
                            Для того, чтобы на странице мы выводили изображение фактического нужного размера, а не
                            просто
                            уменьшали заведомо большее изображения, есть такая возможность:
                        </div>
                        <div className="col-lg-10 col-12">
                            <CopyLinkWrapper>https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center</CopyLinkWrapper>
                        </div>
                        <div className="col-lg-10 col-12">
                            В параметре geometry можно задать размеры для изображения, а в crop выбрать тип кадрирования
                            (center, top, bottom) или вообще его не указывать и тогда изображение пропорционально будет
                            «вписано» в указнные размеры.
                        </div>
                    </div>

                </div>

                <div className="container-fluid pad-66 form_container" id="form">
                    <div className="image_man"><img src="/images/bigman.svg" alt=""/></div>
                    <div className="col-lg-12 col-12 wrapper_form_margin">
                        <FormHi/>
                    </div>
                    <div className="hr"/>
                </div>


            </div>

            {openedModal ? <PopupImg src={srcToModal}/> : null}

        </Context.Provider>
    )
}

export async function getStaticProps(context) {
    const res = await fetch("https://test.octweb.ru/api/pages/index/");
    const data = await res.json();
    return {
        props: {
            mainPage: data
        },
    }
}