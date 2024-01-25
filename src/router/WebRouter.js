import React from "react";
import { Routes, Route } from "react-router-dom";
import { Galleries, Home, AboutMe } from "../pages/web";
import { WebLayout } from "../layouts/Web/WebLayout";



export function WebRouter() {

    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page/>
            </Layout>
        );
    };

    return (
        <Routes>
            <Route path="/*" element={loadLayout(WebLayout, Home)}/>
            <Route path="/Galleries/Potrait" element={loadLayout(WebLayout, Galleries)}/>
            <Route path="/Galleries/MyVision" element={loadLayout(WebLayout, Galleries)}/>
            <Route path="/Galleries/Events" element={loadLayout(WebLayout, Galleries)}/>
            <Route path="/AboutMe" element={loadLayout(WebLayout, AboutMe)}/>
        </Routes>
    )
}