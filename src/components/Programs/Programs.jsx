import React from 'react';
import Container from "../Container/Container";

import * as styles from "./programs.module.scss"
import arrowUpRight from "../../images/arrowUpRightSm.svg"
import {Link} from "gatsby";
import {ProgramOverview} from "./ProgramOverview";
import {ProgramsList} from "./ProgramsList";

const mockPrograms = [
    {id: 1, keyName: 'program', section: 'Программа', name: 'фармаконадзор', date: '10.11.2023', webinarsCount: 3},
    {id: 2, keyName: 'program', section: 'Программа', name: 'фармаконадзор', date: '10.11.2023', webinarsCount: 3},
    {id: 3, keyName: 'program', section: 'Программа', name: 'фармаконадзор', date: '10.11.2023', webinarsCount: 3},
    {id: 4, keyName: 'program', section: 'Программа', name: 'фармаконадзор', date: '10.11.2023', webinarsCount: 3},
    {id: 5, keyName: 'program', section: 'Программа', name: 'фармаконадзор', date: '10.11.2023', webinarsCount: 3},
    {id: 6, keyName: 'program', section: 'Программа', name: 'фармаконадзор', date: '10.11.2023', webinarsCount: 3},
    {id: 7, keyName: 'program', section: 'Программа', name: 'фармаконадзор', date: '10.11.2023', webinarsCount: 3},
    {id: 8, keyName: 'program', section: 'Программа', name: 'фармаконадзор', date: '10.11.2023', webinarsCount: 3},
]




const Programs = ({context}) => {

    return (
        <div>
            {context.key === 'programElement'
                    ? <ProgramOverview/>
                    : <ProgramsList programs={mockPrograms}/>
            }

        </div>
    );
};

export default Programs;