'use client'

import { TransformComponent, TransformWrapper, useControls } from "react-zoom-pan-pinch"

const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
  
    return (
        <div className="tools">
            <button onClick={() => zoomIn()}>
                <img src="/icon_plus.png" alt="+" />
            </button>
            <button onClick={() => zoomOut()}>
                <img src="/icon_minus.png" alt="-" />
            </button>
            {/* <button onClick={() => resetTransform()}>x</button> */}
        </div>
    );
};

export default function ZoomInOut(props) {
    return (
        
        <TransformWrapper 
            initialScale={1} 
            minScale={1} 
            maxScale={5} 
        >

            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <>
                <Controls />
                <TransformComponent>
                    <img src={props.posterURL} alt="공고 포스터" />
                </TransformComponent>
                </>
            )}
        </TransformWrapper>
    )
};