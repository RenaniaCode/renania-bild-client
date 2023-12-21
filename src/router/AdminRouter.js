import React from "react";
import { Routes, Route } from "react-router-dom";
import { map } from "lodash"
import { AdminLayout } from "../layouts";
import { Auth, Users, Account } from "../pages/admin";

const user = null;

export function AdminRouter() {

    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page/>
            </Layout>
        );
    };

    return (
        <Routes>
            {!user ? (
                <Route path="/admin/register" element={<Auth/>}/>
                ) : (
                    <>
                    {["/admin", "/admin/account"].map((path) => (
                        <Route
                            key={path}
                            path={path}
                            element={loadLayout(AdminLayout, Account)}
                        />
                    ))}
                        <Route path="/admin/users" element={loadLayout(AdminLayout, Users)}/>
                    </>
                )}
        </Routes>
    );
};