import React from "react"
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify";
import {Script} from "gatsby"
// i18n
import '../i18n';

// redux


// style
import "../../public/css/style.scss"


export const Layout = ({children}) => {

    return (
        <>

            <div className="page main-page">

                <ToastContainer autoClose={2000}/>
                {children}

                <Script src="../../public/main.js"/>
            </div>
        </>
    )
}


export default Layout