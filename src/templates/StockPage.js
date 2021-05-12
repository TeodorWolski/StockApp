import React, { useState } from 'react';
import StockCard from 'components/organisms/StockCard/StockCard';
import InfoCard from 'components/molecules/InfoCard/InfoCard';
import HideCardButton from 'components/molecules/HideButton/HideCardButton';
import PropTypes from 'prop-types';

const StockPage = ({
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
    <HideCardButton icon={icon} />
  </>
);

StockPage.propTypes = {
  companyStockName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  link: PropTypes.string,
  content: PropTypes.string,
  founderOne: PropTypes.string,
  founderTwo: PropTypes.string,
  icon: PropTypes.element,
  foName: PropTypes.string,
  ftName: PropTypes.string,
};

StockPage.defaultProps = {
  title: '',
  link: '',
  content: '',
  founderOne: '',
  founderTwo: '',
  icon: '',
  foName: '',
  ftName: '',
};

export default StockPage;
