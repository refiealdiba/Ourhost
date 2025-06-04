import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import RouterList from "./routes/RouterList";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={RouterList} />
    </StrictMode>
);
