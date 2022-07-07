import React from "react";

function GlobalIcon({width, height, fill, children, ...props}){
    return(
        <svg
            width={width}
            height={height}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {children}
        </svg>
    )
}

export default GlobalIcon