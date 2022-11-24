import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routers } from "./Routes/Routers";

function App() {
    return (
        <div className='container mx-auto px-4'>
            <Toaster></Toaster>
            <RouterProvider router={routers}></RouterProvider>
        </div>
    );
}

export default App;
