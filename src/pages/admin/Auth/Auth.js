import React, { useState } from 'react';
import { Tab } from "semantic-ui-react";
import { RegisterForm, LoginForm } from "../../../components/Admin/Auth";
import "./Auth.scss";

export function Auth() {
    const [activeIndex, setActiveIndex] = useState(0);
    const openLogin = () => setActiveIndex(0);
    const panes = [
        {
            menuItem: "Iniciar Sesion",
            render: () => (
                <Tab.Pane>
                    <LoginForm/>
                </Tab.Pane>
            ),
        },
        {
            menuItem: "Registrar",
            render: () => (
                <Tab.Pane>
                    <RegisterForm openLogin={openLogin}/>
                </Tab.Pane>
            ),
        },
    ];

    return (
        <div className='auth'>
            <Tab panes={panes} className="auth__forms" activeIndex={activeIndex} onTabChange={(_, data) => setActiveIndex(data.activeIndex)}/>
        </div>
    )
}

