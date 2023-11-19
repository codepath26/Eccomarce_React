import React from "react";

function Home() {
  return (
    <>
      <div className="bg-secondary-subtle  w-100  mt-5 pt-4">
        <div className="d-flex align-items-center flex-column">
          <h1 className="fs-1">The Generics</h1>
          <div className="text-center">
            <h2 className="fw-lighter mt-3 border border-primary p-3">
              Get You Leteast Album
            </h2>
            <p className="border border-primary rounded-circle text-center d-inline-block p-3 mt-2 ">
              <i className="fa-solid fa-play"></i>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center mb-2">
          <h1>Tours</h1>
        </div>
        <div className="d-flex justify-content-center ">
          <ul className="list-group w-75 mb-5 border rounded border-secondary p-3">
            <li className="border-bottom border-danger mt-2   d-flex justify-content-between ">
              <span>JUL16</span>
              <span >DETROIT, MI</span>
              <span>DTE ENERGY MUSIC THEATRE</span>
              <span className="pb-2">
                <button className="btn btn-sm btn-success ">Buy Tickets</button>
              </span>
            </li>
            <li className="border-bottom border-danger mt-2   d-flex justify-content-between">
              <span>JUL19</span>
              <span>TORONTO,ON</span>
              <span>BUDWEISER STAGE</span>
              <span className="pb-2">
                <button className="btn btn-sm btn-success ">Buy Tickets</button>
              </span>
            </li>
            <li className="border-bottom border-danger mt-2   d-flex justify-content-between">
              <span>JUL 22</span>
              <span>BRISTOW, VA</span>
              <span>JIGGY LUBE LIVE</span>
              <span className="pb-2">
                <button className="btn btn-sm btn-success ">Buy Tickets</button>
              </span>
            </li>
            <li className="border-bottom border-danger mt-2   d-flex justify-content-between">
              <span>JUL 29</span>
              <span>PHOENIX, AZ</span>
              <span>AK-CHIN PAVILION</span>
              <span className="pb-2">
                <button className="btn btn-sm btn-success ">Buy Tickets</button>
              </span>
            </li>
            <li className="border-bottom border-danger mt-2   d-flex justify-content-between">
              <span>AUG 2</span>
              <span>LAS VEGAS, NV</span>
              <span>T-MOBILE ARENA</span>
              <span className="pb-2">
                <button className="btn btn-sm btn-success ">Buy Tickets</button>
              </span>
            </li>
            <li className="border-bottom border-danger mt-2   d-flex justify-content-between">
              <span>AUG 7</span>
              <span>CONCORD, CA</span>
              <span>CONCORD PAVILION</span>
              <span className="pb-2">
                <button className="btn btn-sm btn-success ">Buy Tickets</button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
