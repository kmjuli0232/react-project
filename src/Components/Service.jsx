import React from "react";
export const Service = ()=>{
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Services</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card p-3 shadow text-center">
              <h5>Web Design</h5>
              <p>Modern and responsive website designs.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow text-center">
              <h5>Development</h5>
              <p>Fast and scalable web applications.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow text-center">
              <h5>SEO</h5>
              <p>Improve your website ranking on Google.</p>
            </div>
          </div>
        </div>
      </div>
    );
}