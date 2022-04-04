import React from 'react';

import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";

import './SlideBanner.scss'

const SlideBanner = () => {
  const plugins = [ new Pagination({ type: 'bullet' }) ];

  return (
    <div className='slide-banner'>
      <Flicking circular={true} plugins={plugins}>
        <div className="banner-card">
          1
        </div>
        <ViewportSlot>
          <div className="flicking-pagination"></div>
        </ViewportSlot>
      </Flicking>
    </div>
  );
}

export default SlideBanner;