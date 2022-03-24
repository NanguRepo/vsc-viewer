import React from 'react'

export default function Hero(props) {
    return (
        <>
            <h1 className="text-5xl md:text-6xl font-bold">{props.title}</h1>
            <h2 className="text-2xl md:text-2xl mt-5 fade-in">{props.subtitle}</h2>
        </>
    );
  }