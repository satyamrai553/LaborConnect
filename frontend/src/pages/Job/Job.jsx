import React from 'react'
import {
  JobNavigation,
  JobListing,} from '../../components/Jobs/index.js'
 
  
  function JobPage() {
    return (
      <div className="flex">
        <JobNavigation />
        <JobListing />
      </div>
    );
  }
  
  export default JobPage;
  