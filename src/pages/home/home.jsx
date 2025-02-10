import React from 'react';
import datas from '../../data/data'
import './home.css'
import Banner from '../../composants/banner/banner'
import Border from '../../composants/border/border'
import Info from '../../composants/info/info'
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'


function Home() {

    return (
        <>
        <header>
              <div className='header'>
                  <Banner />
              </div>
        </header>
        <main>
            <Border/>
            <Info />
        </main>
        </>
    ) 
};

export default Home;
