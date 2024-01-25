import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import { WebRouter, AdminRouter } from "./router";

function App() {
  return (
    <HashRouter>
      <WebRouter/>
      <AdminRouter/>
    </HashRouter>
  );                                            
}

export default App;
