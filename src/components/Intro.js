import React from 'react';
import { Link } from 'react-router-dom';
import './Intro.css'
import work from './work.png';
import life from './life.png';


const Intro = () => {


    return (

        <div>
            <Link to='/life'><img src={life}></img></Link>
            <Link to='/work'><img src={work}></img></Link>


        </div>



    )
}

export default Intro;