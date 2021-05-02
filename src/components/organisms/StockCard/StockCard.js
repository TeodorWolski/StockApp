import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { theme } from 'theme/MainTheme';
import Plot from 'react-plotly.js';

const StyledWrapper = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const StockCard = () => {
  const [stockPrices, setStockPrices] = useState();
  const [stockDates, setStockDates] = useState();
  const companyStock = 'AAPL';

  const Stock = () => {
    const API_KEY = 'ZSCJY2VMQFOL1LAU';
    const API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${companyStock}&outputsize=full&apikey=${API_KEY}`;
    const stockPriceInfo = [];
    const stockDateInfo = [];

    fetch(API_CALL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Object.keys(data['Time Series (Daily)']).forEach((key) => {
          stockDateInfo.push(key);
          stockPriceInfo.push(data['Time Series (Daily)'][key]['1. open']);
        });

        setStockPrices(stockPriceInfo);
        setStockDates(stockDateInfo);
      });
  };

  useEffect(() => {
    Stock();
  }, []);

  return (
    <StyledWrapper>
      <Plot
        data={[
          {
            x: stockDates,
            y: stockPrices,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'hsl(338, 100%, 42%)' },
          },
        ]}
        layout={{
          width: 700,
          height: 500,
          title: `${companyStock}`,
          plot_bgcolor: '#060817',
          paper_bgcolor: '#060817',
        }}
      />
    </StyledWrapper>
  );
};

export default StockCard;
