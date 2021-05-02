import React from 'react';
import StockCard from 'components/organisms/StockCard/StockCard';
import InfoCard from 'components/molecules/InfoCard/InfoCard';
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
      <>
        <InfoCard
          title={title}
          content={content}
          key={id}
          founderOne={founderOne}
          founderTwo={founderTwo}
          link={link}
          icon={icon}
          foName={foName}
          ftName={ftName}
        />
        <StockCard companyStockName={companyStockName} />
      </>
    ),
  );

export default Google;
