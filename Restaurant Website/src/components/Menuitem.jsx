import React from "react";

function MenuItem(props) {
    return (
        <>
            <div className="px-4 lg:max-w-96 container flex flex-col flex-wrap text-amber-200" id="menubox">
                <div>
                    <span className="crimson-text-semibold-italic">{props.name}</span>
                </div>
                <div>
                    <p className="crimson-text-regular">{props.desc}</p>
                </div>
            </div>
        </>
    )
}

export default MenuItem;