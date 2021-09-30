import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';


import icon from '../images/crypto.png';

const Navbar = () => {
    const [activeMenu, setactiveMenu] = useState(true);
    const [screenSize, setscrenSize] = useState(null);


    useEffect(() => {
        const handleResize = () => setscrenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        if (screenSize < 768) {
            setactiveMenu(false);
        } else {
            setactiveMenu(true);
        }
    }, [screenSize])

    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to="/">CryptoBook</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={() => setactiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
            </div>
            {
                activeMenu && (
                    <Menu theme='dark'>
                        <Menu.Item icon={<HomeOutlined />}>
                            <Link style={{ color: '#EEF5B2', textAlign: 'center' }} to='/'>Home</Link>
                        </Menu.Item>
                        <Menu.Item icon={<FundOutlined />}>
                            <Link style={{ color: '#EEF5B2', textAlign: 'center' }} to='/cryptocurrencies'>Cryptocurrencies</Link>
                        </Menu.Item>
                        <Menu.Item icon={<MoneyCollectOutlined />}>
                            <Link style={{ color: '#EEF5B2', textAlign: 'center' }} to='/exchanges'>Exchanges</Link>
                        </Menu.Item>
                        <Menu.Item icon={<BulbOutlined />}>
                            <Link style={{ color: '#EEF5B2', textAlign: 'center' }} to='/news'>News</Link>
                        </Menu.Item>
                    </Menu>
                )
            }

        </div>
    )
}

export default Navbar
