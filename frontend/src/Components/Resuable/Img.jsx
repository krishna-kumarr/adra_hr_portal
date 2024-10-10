import React from 'react'

const Img = ({ src, dataFrom, className,width,height }) => {

    return (
        <img src={src} className={className} width={width} height={height}/>
    )
}

export default Img