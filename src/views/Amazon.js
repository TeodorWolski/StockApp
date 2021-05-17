import React from 'react';
import { Amazon as AmazonData } from 'assets/data/companiesData';
import StockPage from 'templates/StockPage';

const Amazon = () =>
  AmazonData.map(
    ({
      title,
      content,
      id,
      founderOne,
      founderTwo,
      link,
      icon,
      foName,
      ftName,
      companyStockName,
      isVisible,
    }) => (
      <StockPage
        title={title}
        content={content}
        key={id}
        founderOne={founderOne}
        founderTwo={founderTwo}
        link={link}
        companyStockName={companyStockName}
        foName={foName}
        ftName={ftName}
        icon={icon}
        isVisible={isVisible}
      />
    ),
  );

export default Amazon;
