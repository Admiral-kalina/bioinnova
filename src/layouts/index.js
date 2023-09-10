import React from "react"
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify";
import { Script } from "gatsby"
// i18n
import '../i18n';

// redux
import {Provider} from "react-redux";
import {store} from "../app/store";

// style
import "../../public/css/style.scss"
import {BrowserRouter} from "react-router-dom";



export const Layout = ({children}) => {

    return (
     <>

         <div className="page main-page">
             <Provider store={store}>
                 <BrowserRouter>
                     <ToastContainer  autoClose={2000} />
                     {children}
                 </BrowserRouter>
             </Provider>
             <Script src="../../public/main.js" />
         </div>
     </>
    )
}


export default Layout