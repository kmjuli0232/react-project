import React from "react";
export const About = ()=>{
    return (
      <div className="container mt-5">
        <div className="card shadow p-4">
          <h2 className="text-center">About Us</h2>

          <p className="text-center">
            We are a web development team creating simple and modern websites.
            Our goal is to deliver clean and user-friendly designs.
          </p>

          <div className="text-center">
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    );
}