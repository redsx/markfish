import React, { 
    useEffect, useRef, useState,
    ReactNode,  MutableRefObject, Dispatch, SetStateAction, CSSProperties
} from 'react';
import throttle from 'lodash/throttle';

import './style.less';

function useTensile(
    resizeLine: MutableRefObject<HTMLDivElement | null>,
    setNavWidth: Dispatch<SetStateAction<number>>,
    witdthConf: {
        maxWidth?: number,
        minWidth?: number,
    }
) {
    const {
        maxWidth = window.innerWidth * 0.8,
        minWidth = 0,
    } = witdthConf;
    console.log('resizeLine: ', resizeLine);
    useEffect(() => {
        console.log('effect resizeLine: ', resizeLine);
        const { current } = resizeLine;
        const resize = throttle(function (e: MouseEvent) {
            console.log('e.clinet x: ', e.clientX);
            if (e.clientX > minWidth && e.clientX < maxWidth) {
                setNavWidth(e.clientX);
            }
        }, 100);
        const mouseDown = () => {
            const resizeUp = function () {
                document.removeEventListener("mousemove", resize);
                document.removeEventListener("mouseup", resizeUp);
            }

            document.addEventListener("mousemove", resize);
            document.addEventListener("mouseup", resizeUp)
        }
        current.addEventListener('mousedown', mouseDown);
        return () => current.removeEventListener('mousedown', mouseDown);
    }, []);
}


function App(props: {
    children: ReactNode;
    defaultWidth: number;
    className?: string;
    maxWidth?: number,
    minWidth?: number,
}) {
    const { className, children, defaultWidth, maxWidth, minWidth } = props;
    const resizeLine = useRef<HTMLDivElement>(null);

    const [asideWidth, setAsideWidth ] = useState(defaultWidth);
    useTensile(resizeLine, setAsideWidth, { maxWidth, minWidth });

    const asideStyle: CSSProperties = {
        width: asideWidth,
    };

    return (
        <aside className={`tensile-div ${className ? className : ''}`} style={asideStyle}>
            <div ref={resizeLine} className="tensile-div-line" />
            {children}
        </aside>
    );
}

export default App;
