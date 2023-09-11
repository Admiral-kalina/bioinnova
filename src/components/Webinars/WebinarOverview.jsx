import React, {useEffect, useState} from "react";
import axios from "axios";
import Container from "../Container/Container";

import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'



export const WebinarOverview = ({context}) => {
    // const [a, setA] = useState('');
    // const get = async () => {
    //     return  await axios.get('http://localhost:1337/api/courses/1')
    // }
    // console.log(context)
    // useEffect(async () => {
    //    const a = await get();
    //     let b
    //         = a.data.data.attributes.format
    //     setA(b)
    // },[])
    return (
        <div>
            <div className="container">
             <Container>
                {/*asdf*/}
                {/* <ReactMarkdown children={a} remarkPlugins={[remarkGfm]} />,*/}
             </Container>
            </div>
        </div>
    )
}