import React from 'react';
import { useParams } from 'react-router-dom';
import Home from '../../../Home';
import Footer from './Footer';

const StartQuiz = (props) => {
    let { category,name} = useParams();

    return (
        <div style={{backgroundColor:"#ffb14c"}} >
            <div className='h-30 text-center'>
            
            </div>
           
           <Home></Home>
           <Footer></Footer>
        </div>
    );
}

export default StartQuiz;
