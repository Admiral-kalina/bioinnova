const path = require("path");
const axios = require("axios");

const get = endpoint => axios.get(`http://localhost:1337/api/${endpoint}`);

getData = async (endpoint) => {
    const state = await get(`${endpoint}`);
    return state.data.data;
}


const homeNavs = [
    {
        id: 1,
        path: 'webinars',
        isActive: false,
    }
    ,
    {
        id: 2,
        path: 'programs',
        isActive: false,
    }
    ,
    {
        id: 3,
        path: 'schedule',
        isActive: false,
    }
    ,
    {
        id: 4,
        path: 'about-us',
        isActive: false,
    }
]

const mockPrograms = [
    {id:1, keyName:'program', section:'Программа',name:'фармаконадзор',start:'10.11.2023',webinarsCount:3},
    {id:2, keyName:'program', section:'Программа',name:'фармаконадзор',start:'10.11.2023',webinarsCount:3},
    {id:3, keyName:'program', section:'Программа',name:'фармаконадзор',start:'10.11.2023',webinarsCount:3},
    {id:4, keyName:'program', section:'Программа',name:'фармаконадзор',start:'10.11.2023',webinarsCount:3},
    {id:5, keyName:'program', section:'Программа',name:'фармаконадзор',start:'10.11.2023',webinarsCount:3},
    {id:6, keyName:'program', section:'Программа',name:'фармаконадзор',start:'10.11.2023',webinarsCount:3},
    {id:7, keyName:'program', section:'Программа',name:'фармаконадзор',start:'10.11.2023',webinarsCount:3},
    {id:8, keyName:'program', section:'Программа',name:'фармаконадзор',start:'10.11.2023',webinarsCount:3},
]

const mockWebinars = [
    {id: 1, keyName: 'webinar', section: 'Вебинар', name: 'Аспекты Фармаконадзора', start: '10.11.2023', teacher:'рей Шимко, эксперт GMP/GDP',exactTime:'11:00 - 11:30',format:'1 день; 1,5 часа', oneParticipant:'500', fiveParticipants:'3000', tenParticipants:'8000', duration: 30},
    {id: 2, keyName: 'webinar', section: 'Вебинар', name: 'Аспекты Фармаконадзора', start: '10.11.2023', teacher:'рей Шимко, эксперт GMP/GDP',exactTime:'11:00 - 11:30',format:'1 день; 1,5 часа', oneParticipant:'500', fiveParticipants:'3000', tenParticipants:'8000', duration: 30},
    {id: 3, keyName: 'webinar', section: 'Вебинар', name: 'Аспекты Фармаконадзора', start: '10.11.2023', teacher:'рей Шимко, эксперт GMP/GDP',exactTime:'11:00 - 11:30',format:'1 день; 1,5 часа', oneParticipant:'500', fiveParticipants:'3000', tenParticipants:'8000', duration: 30},
    {id: 4, keyName: 'webinar', section: 'Вебинар', name: 'Аспекты Фармаконадзора', start: '10.11.2023', teacher:'рей Шимко, эксперт GMP/GDP',exactTime:'11:00 - 11:30',format:'1 день; 1,5 часа', oneParticipant:'500', fiveParticipants:'3000', tenParticipants:'8000', duration: 30},
    {id: 5, keyName: 'webinar', section: 'Вебинар', name: 'Аспекты Фармаконадзора', start: '10.11.2023', teacher:'рей Шимко, эксперт GMP/GDP',exactTime:'11:00 - 11:30',format:'1 день; 1,5 часа', oneParticipant:'500', fiveParticipants:'3000', tenParticipants:'8000', duration: 30},
    {id: 6, keyName: 'webinar', section: 'Вебинар', name: 'Аспекты Фармаконадзора', start: '10.11.2023', teacher:'рей Шимко, эксперт GMP/GDP',exactTime:'11:00 - 11:30',format:'1 день; 1,5 часа', oneParticipant:'500', fiveParticipants:'3000', tenParticipants:'8000', duration: 30},
    {id: 7, keyName: 'webinar', section: 'Вебинар', name: 'Аспекты Фармаконадзора', start: '10.11.2023', teacher:'рей Шимко, эксперт GMP/GDP',exactTime:'11:00 - 11:30',format:'1 день; 1,5 часа', oneParticipant:'500', fiveParticipants:'3000', tenParticipants:'8000', duration: 30},
    {id: 8, keyName: 'webinar', section: 'Вебинар', name: 'Аспекты Фармаконадзора', start: '10.11.2023', teacher:'рей Шимко, эксперт GMP/GDP',exactTime:'11:00 - 11:30',format:'1 день; 1,5 часа', oneParticipant:'500', fiveParticipants:'3000', tenParticipants:'8000', duration: 30},
]

exports.createPages = async ({actions: {createPage}}) => {

    const programs = await getData('courses?populate=*')
    const webinars = await getData('webbinarrs?populate=*')

    console.log('PR1',programs)

     console.log('PR2',webinars)

    createPage({
        path: `/home`,
        matchPath: "/home/:id",
        component: require.resolve('./src/pages/home/index.js'),
        context: {a: 'some context'}
    });

    homeNavs.map(nav => {
        createPage({
            path: `/home/${nav.path}`,
            component: require.resolve('./src/pages/home/index.js'),
            context: {nav}
        });
    });

    programs.map(program => {
        createPage({
            path: `home/programs/program`,
            component: require.resolve('./src/pages/home/index.js'),
            context: {key:'programHomeElement',program}
        });
    })

    programs.map(program => {
        createPage({
            path: `home/programs/program${program.id}`,
            component: require.resolve('./src/pages/programs/index.js'),
            context: {key:'programElement',program}
        });
    })

    programs.map(program => {
        createPage({
            path: `home/programs/program/webinar/`,
            component: require.resolve('./src/pages/home/index.js'),
            context: {key:'programElement',program}
        });
    })

    programs.map(program => {
        createPage({
            path: `home/webinars/webinar`,
            component: require.resolve('./src/pages/home/index.js'),
            context: {key:'programElement',program}
        });
    })


    programs.map(program => {
        createPage({
            path: `services/programs/program${program.id}`,
            component: require.resolve('./src/pages/programs/index.js'),
            context: {key:'programElement',program}
        });
    })


    createPage({
        path: `services/programs/`,
        component: require.resolve('./src/pages/programs'),
        context: {key:'program'}
    });



    createPage({
        path: `services/webinars-and-lectures/`,
        component: require.resolve('./src/pages/webinars'),
        context: {key:'webinar'}
    });

    mockWebinars.map(webinar => {
        createPage({
            path: `services/webinars-and-lectures/${webinar.keyName+webinar.id}`,
            component: require.resolve('./src/pages/webinars'),
            context: {key:'webinarElement',webinar}
        });
    })

}

