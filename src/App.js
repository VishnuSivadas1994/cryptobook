import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';

import './App.css';



const App = () => {
  return (
    <BrowserRouter basename="/cryptobook">

    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/'>
                <Homepage />
              </Route>
              <Route exact path='/exchanges'>
                <Exchanges />
              </Route>
              <Route exact path='/cryptocurrencies'>
                <Cryptocurrencies />
              </Route>
              <Route exact path='/crypto/:coinId'>
                <CryptoDetails />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
            </Switch>

          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'black', textAlign: 'center' }}>
            CryptoBook by Vishnu Sivadas<br />
          2021
        </Typography.Title>
          <Space>
            <a className='footlink' href="https://www.linkedin.com/in/sivadasv/" target='_blank'>LinkedIn</a>
            <a className='footlink' href="https://github.com/VishnuSivadas1994" target='_blank'>GitHub</a>

          </Space>
        </div>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
