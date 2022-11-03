import React, {useState} from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import {Card, Row, Col, Input} from 'antd';
import { useGetCryptosQuery } from '../services/cryptoAPI';

const Currencies = () => {
const { data: cryptosList, isFetching } = useGetCryptosQuery();
const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

console.log(cryptos);

  return (
    <div>Currencies</div>
  )
}

export default Currencies