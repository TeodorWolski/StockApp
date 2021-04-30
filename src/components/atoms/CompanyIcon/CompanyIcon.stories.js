import React from 'react';
import GoogleIcon from 'assets/icons/google.svg';
import AppleIcon from 'assets/icons/apple.svg';
import FacebookIcon from 'assets/icons/facebook.svg';
import AmazonIcon from 'assets/icons/amazon.svg';
import CompanyIcon from './CompanyIcon';

export default {
  title: 'atoms/CompanyIcon',
  component: CompanyIcon,
};

export const Google = () => <CompanyIcon icon={GoogleIcon} />;
export const Apple = () => <CompanyIcon icon={AppleIcon} />;
export const Facebook = () => <CompanyIcon icon={FacebookIcon} />;
export const Amazon = () => <CompanyIcon icon={AmazonIcon} />;
