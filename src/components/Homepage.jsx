import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';


const { Title } = Typography;

const Homepage = () => {
    return (
        <>
            <Title level={2} className='heading'>Global Crypto Statistics</Title>
            <Row>
                <Col span={12}>
                    <Statistic title='Total Cryptocurrencies' value='10' />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Exchanges' value='10' />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Market Cap' value='10' />
                </Col>
                <Col span={12}>
                    <Statistic title='24 Hour Volume' value='10' />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Market' value='10' />
                </Col>
            </Row>
        </>
    )
}

export default Homepage
