import React from 'react';
import datas from '../../data/data'
import './home.css'
import Banner from '../../composants/banner/banner'
import Border from '../../composants/border/border'
import Info from '../../composants/info/info'

function Home() {

    console.log(datas)

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
