import React from "react";
import useMobileDetect from "use-mobile-detect-hook";

const Component = () => {
  const detectMobile = useMobileDetect();
  const isAndroid = detectMobile.isAndroid();
  const isIos = detectMobile.isIos();
  const isDesktop = detectMobile.isDesktop();
  const isMobile = detectMobile.isMobile();
  return (
    <>
      <div className="row justify-content-md-center">
        <div className="col-md-6 col-sm-12 col-lg-3 ">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              isMobile()
              <span className={getListClassName(isMobile)}>
                {isMobile.toString()}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              isDesktop()
              <span className={getListClassName(isDesktop)}>
                {isDesktop.toString()}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              isIos()
              <span className={getListClassName(isIos)}>
                {isIos.toString()}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              isAndroid()
              <span className={getListClassName(isAndroid)}>
                {isAndroid.toString()}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="row justify-content-md-center">
        <div className="col-md-9 col-lg-4">
          <div className="alert alert-success" role="alert">
            <code>npm install use-mobile-detect</code>
          </div>
        </div>
      </div>
    </>
  );
};
function getListClassName(boolValue) {
  return `badge badge-${boolValue ? "success" : "danger"} badge-pil`;
}

export default Component;
