import React from 'react';
import useMobileDetect from './src/index';
const component = () => {
  const detectMobile = useMobileDetect();
  const isAndroid = detectMobile.isAndroid();
  const isIos = detectMobile.isIos();
  const isDesktop = detectMobile.isDesktop();
  const isMobile = detectMobile.isMobile();
  return (
    <div className="row">
      <div className="col-6">


        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            isMobile()
    <span className={getListClassName(isMobile)}>{isMobile.toString()}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            isDesktop()
    <span className={getListClassName(isDesktop)}>{isDesktop.toString()}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            isIos()
    <span className={getListClassName(isIos)}>{isIos.toString()}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            isAndroid()
    <span className={getListClassName(isAndroid)}>{isAndroid.toString()}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
function getListClassName(boolValue) {
  return `badge badge-${boolValue ? 'success' : 'danger'} badge-pil`
}

export default component;