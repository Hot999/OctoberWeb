import {Ad, EasyText, ImageGallery, TitleH2} from "./element";
import React from "react";

export const StaticBlocks = (props) => {


    const Title = <TitleH2>{props.title}</TitleH2>;
    const Description = <Ad>{props.description}</Ad>;
    const TextBlock = <EasyText>{props.content}</EasyText>
    const img1 = <ImageGallery src={props.image1}/>
    const img2 = <ImageGallery src={props.image2}/>
    const img3 = <ImageGallery src={props.image3}/>
    const img4 = <ImageGallery src={props.image4}/>
    return (
        <>
            <div className="row mb-4 mt-4">
                <div className="col-lg-9">
                    {Title}
                    {TextBlock}
                </div>
                {props.description &&
                <div className="col-lg-3 col-12">
                    {Description}
                </div>}
            </div>
            <div className="row">
                {props.image1 && img1}
                {props.image1 && img2}
                {props.image1 && img3}
                {props.image1 && img4}
            </div>
        </>
    )
}