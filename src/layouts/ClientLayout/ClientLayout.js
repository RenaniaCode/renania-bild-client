import React from "react";

export  function ClientLayout(props) {
    const { children } = props;

    return (
        <div>
            { children }
        </div>
    );
}