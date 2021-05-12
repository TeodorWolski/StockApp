import React from 'react';
import { Apple as AppleData } from 'assets/data/companiesData';
import StockPage from 'templates/StockPage';

const Apple = () =>
  AppleData.map(
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
    }) => (
      <StockPage
        title={title}
        content={content}
        id={id}
        founderOne={founderOne}
        founderTwo={founderTwo}
        link={link}
        companyStockName={companyStockName}
        foName={foName}
        ftName={ftName}
        icon={icon}
      />
    ),
  );

export default Apple;
