import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';


const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data;

    if (isFetching) return 'Loading...';
    // console.log(data);

    return (
        <>
            <Title level={2} className='heading'>Global Crypto Statistics</Title>
            <Row>
                <Col span={12}>
                    <Statistic title='Total Cryptocurrencies' value={globalStats.totalCoins} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} />
                </Col>
                <Col span={12}>
                    <Statistic title='24 Hour Volume' value={millify(globalStats.total24hVolume)} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Market' value={millify(globalStats.totalMarkets)} />
                </Col>
            </Row>
        </>
    )
}

export default Homepage
