import React from "react"
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify";
import {Script} from "gatsby"
import {BrowserRouter} from "react-router-dom";
// i18n


// redux
import {Provider} from "react-redux";
import {store} from "../app/store";


// style
import "../../public/css/style.scss"



export const Layout = ({children}) => {
    if (typeof window !== "object"){
        return
    }else {
        return (
            <>

                    <Provider store={store}>
                        <BrowserRouter>
                            <ToastContainer  autoClose={2000} />
                            {children}
                        </BrowserRouter>
                    </Provider>
                    <Script src="../../public/main.js" />

            </>
        )
    }
}


export default Layout