import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { theme } from 'theme/MainTheme';

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

const StockCard = () => (
  <StyledWrapper>
    <Line
      type="bar"
      height={400}
      options={{
        maintainAspectRatio: false,
      }}
      data={{
        labels: 'volume',
        datasets: [
          {
            label: 'GOOGLE STOCK',
            data: [2141923, 211745],
            fill: false,
            borderColor: 'hsl(3, 90%, 61%)',
            tension: 0.1,
          },
        ],
      }}
      width={600}
    />
  </StyledWrapper>
);

export default StockCard;
