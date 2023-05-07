import React from 'react';
import PhotoTable from './photo-table';
import TextTable from './text-table';
import VideoTable from './video-table';

function AnalysisMain() {
  return (
    <div className="h-[87%] z-0 flex flex-col overflow-y-scroll">
      <PhotoTable />
      <VideoTable />
      <TextTable />
    </div>
  );
}

export default AnalysisMain;
