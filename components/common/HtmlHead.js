import React, { Component } from 'react';
import Head from 'next/head'


function Headers() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#74B8B9" />
                <meta name="description" content="Advogada situada em porto alegre" />
                <title>Advogada Daiana Staudt</title>
            </Head>
        </div>
    )
}

export default Headers;