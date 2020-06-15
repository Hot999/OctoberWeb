import "bootstrap/dist/css/bootstrap.min.css"
import Head from "next/head";
import React from "react";
import "../styles/main-style.scss";
import Header from "../components/header/header";
import {Footer} from "../components/footer/footer";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
                      rel="stylesheet"/>
            </Head>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp