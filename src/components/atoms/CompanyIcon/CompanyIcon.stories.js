import React from 'react';
import GoogleIcon from 'assets/icons/google.svg';
import CompanyIcon from './CompanyIcon';

export default {
  title: 'atoms/CompanyIcon',
  component: CompanyIcon,
};

export const Primary = () => <CompanyIcon icon={GoogleIcon} />;
