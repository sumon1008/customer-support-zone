import React from "react";

const Footer = () => {
  return (
    <div className="mt-5 ">
      <footer class="bg-black text-gray-300">
        <div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h2 class="text-white text-xl font-semibold mb-4">
              CS — Ticket System
            </h2>
            <p class="text-sm leading-relaxed">
              A CS Ticket System (Customer Support Ticket System) is a software
              system used by companies to manage customer requests, complaints,
              or issues in an organized way.
            </p>
          </div>

          <div>
            <h3 class="text-white text-lg font-semibold mb-4">Company</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white text-lg font-semibold mb-4">Services</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Download Apps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white text-lg font-semibold mb-4">Information</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white text-lg font-semibold mb-4">Social Link</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white">
                  @CS-Ticket system
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  @CS-Ticket system
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  @CS-Ticket system
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-700">
          <div class="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-sm text-gray-400 ">
              © 2025 CS — Ticket System. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
