import React, { useRef } from "react";
import useScroll from "../hook/useScroll";

const ScrollTracker = () => {
    const { x, y } = useScroll();

    const divRef = useRef<HTMLDivElement>(null);

    const { x: x1, y: y1 } = useScroll(divRef);

    return (
        <div style={{ height: "200vh", padding: "20px" }}>
            <p>
                Vị trí cuộn: X = {x}, Y = {y}
            </p>
            <div
                ref={divRef}
                style={{
                    width: "300px",
                    height: "200px",
                    overflow: "auto",
                    border: "1px solid black",
                }}
            >
                <div
                    style={{
                        width: "500px",
                        height: "500px",
                        background: "#eee",
                    }}
                >
                    Cuộn để xem vị trí
                </div>
            </div>
            <p>
                Vị trí cuộn trong div: X = {x1}, Y = {y1}
            </p>
        </div>
    );
};

export default ScrollTracker;
