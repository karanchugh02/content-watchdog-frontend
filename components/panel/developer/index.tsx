import React from 'react';
import ApiInformation from './api-information';
import Apikey from './api-key';

function DeveloperMain() {
  return (
    <div className="h-[87%] z-0 flex flex-col overflow-y-scroll">
      <Apikey />
      <ApiInformation />
    </div>
  );
}

export default DeveloperMain;
