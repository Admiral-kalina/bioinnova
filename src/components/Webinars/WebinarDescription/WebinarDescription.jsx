import React, {useEffect, useState} from 'react';
import axios from "axios";

import {remark} from 'remark'
import html from 'remark-html'

// styles
import * as styles from "./webinarDesctiption.module.scss";



const WebinarDescription = ({type}) => {
    const mockDataProgram = "1. Понятие и принципы проведения аудита поставщика:\n- регуляторные требования и ожидания;\n- риски, ограничения;\n- виды аудитов поставщика.\n2. Подготовка и проведение:\n- источники информации для аудита;\n- условия и проведение (сфера применения; материально-техническое обеспечение; обмен коммуникациями и документами).\n3. Составление отчета аудита:\n- регуляторные требования и ожидания;\n- структура, содержание и объем отчета;\n- наиболее распространенные ошибки и рекомендации по их предотвращению.\n4. Накопленный опыт и выводы.\n\n\n\n\n\n"
    const mockDataDescription = "Вебинар раскрывает следующие пункты:\n\n- Определение фармаконадзора и его роль в медицине и общественном здоровье.\n- Обзор структуры органов и учреждений, отвечающих за фармаконадзор.\n- Роли и обязанности регуляторных органов в области медицинских препаратов и медицинских изделий.\n"
    const [markDown, setMarkdown] = useState(null);

    const markdownToHtml = async (markdown) => {
        const result = await remark().use(html).process(markdown)
        return result.toString()
    }

    useEffect(async () => {
        if(type === 'program'){
           setMarkdown(await markdownToHtml(mockDataProgram))
        }else {
            setMarkdown(await markdownToHtml(mockDataDescription))
        }

    }, [])
    return (
        <div className={styles.root}>
            <div
                className={type === 'program' ? styles.program: styles.description}
                dangerouslySetInnerHTML={{__html: markDown}}/>
        </div>
    );
};

export default WebinarDescription;