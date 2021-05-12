import React from 'react';
import StockPage from 'templates/StockPage';
import { Google as GoogleData } from 'assets/data/companiesData';

const Google = () =>
  GoogleData.map(
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

export default Google;
