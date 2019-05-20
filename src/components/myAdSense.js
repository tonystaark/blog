import React from 'react';
import AdSense from 'react-adsense';

const MyAdSense = () => (
  <AdSense.Google
    client='ca-pub-7235408523384570'
    slot='5705531085'
    style={{ display: 'block' }}
    format='auto'
    responsive='true'
  />
);

export default MyAdSense;
