import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routers } from "./Routes/Routers";
import { Player } from "@lottiefiles/react-lottie-player";
function App() {
    return (
        <div className=' container m-0 p-0  md:mx-auto md:px-4'>
            <Toaster></Toaster>

            <RouterProvider router={routers}></RouterProvider>
        </div>
    );
}

export default App;
