import React from "react";

export  function WebLayout(props) {
    const { children } = props;

    return (
        <div>
            { children }
        </div>
    );
}