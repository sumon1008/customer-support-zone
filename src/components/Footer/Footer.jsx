import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5'>
            <footer className="footer grid md:grid-cols-5  bg-neutral text-[#A1A1AA]  p-10 ">
  <div>
    <h6 className=" text-xl text-white">CS Ticket System</h6>
   <p >A CS Ticket System (Customer Support Ticket System) is a software system used by companies to manage customer requests, complaints, or issues in an organized way.</p>
  </div>
  <div>
    <h6 className="text-white">Company</h6>
    <a className="text-gray">About us</a>
    <a className="link link-hover text-[#A1A1AA]">Our Mission</a>
    <a className="link link-hover">Jobs</a>
   
  </div>

  <div>
    <h6 className=" text-white">Service</h6>
    <a className="link link-hover">Product and service</a>
    <a className="link link-hover">Customer service</a>
    <a className="link link-hover">Download App</a>
  </div>
  <div>
    <h6 className=" text-white">Information</h6>
    <a className="link link-hover">Terms and condition</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Join us</a>
  </div>

    <div>
    <h6 className=" text-white">Social link</h6>
    <a className="link link-hover">@CS-Ticket system</a>
    <a className="link link-hover">@CS-Ticket system</a>
    <a className="link link-hover">@CS-Ticket system</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;