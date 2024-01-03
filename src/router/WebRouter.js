import React from "react";
import { Routes, Route } from "react-router-dom";
import { ClientLayout } from "../layouts";
import { Galleries, Home } from "../pages/web";
import { WebLayout } from "../layouts/Web/WebLayout";
import { AboutMe } from "../components/Web/HomePage";


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
            <Route path="/" element={loadLayout(WebLayout, Home)}/>
            <Route path="/Galleries/Potrait" element={loadLayout(WebLayout, Galleries)}/>
            <Route path="/Galleries/MyVision" element={loadLayout(WebLayout, Galleries)}/>
            <Route path="/Galleries/Events" element={loadLayout(WebLayout, Galleries)}/>
            <Route path="/AboutMe" element={loadLayout(WebLayout, AboutMe)}/>
        </Routes>
    )
}