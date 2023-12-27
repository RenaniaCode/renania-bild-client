import React from "react";
import { Routes, Route } from "react-router-dom";
import { ClientLayout } from "../layouts";
import { Galleries, Home } from "../pages/web";
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
            <Route path="/" element={loadLayout(WebLayout, Home)}/>
            <Route path="/Galleries/Retrato" element={loadLayout(WebLayout, Galleries)}/>
        </Routes>
    )
}