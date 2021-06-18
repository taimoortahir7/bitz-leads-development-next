import React from "react";

const Footer = () => {
  return (
    <div className="px-8 lg:px-16 py-8 flex flex-col items-center justify-center lg:grid  lg:grid-cols-4">
      <MobileFooter />
      <div className="flex flex-row-reverse lg:flex-col items-center lg:items-start justify-center lg:justify-start">
        <img
          src="/images/logo.png"
          alt="logo"
          className="object-center object-contain w-10 lg:w-auto"
        />

        <div className="text-xs lg:text-sm font-normal block lg:hidden pr-4 lg:pr-0">
          <div className="text-xs lg:text-sm lg:text-base font-normal">
            BlitzLeads 6918 Corporate Drive Houston TX 77036
          </div>
          &copy;{new Date().getFullYear()} BlitzLeads&reg; All rights reserved.
        </div>
      </div>
      <DesktopFooter />
    </div>
  );
};
const MobileFooter = () => (
  <>
    <div className="flex flex-row visible lg:hidden mb-8">
      <img
        src="/images/booster.png"
        className="w-40 object-cover object-center"
      />
      <div className="flex flex-col pl-8 space-y-4">
        <div className="text-sm lg:text-base font-normal">Press</div>
        <div className="text-sm lg:text-base font-normal ">Blog</div>
        <div className="text-sm lg:text-base font-normal ">Investors</div>
        <div className="text-sm lg:text-base font-normal ">Privacy Policy</div>
        <div className="text-sm lg:text-base font-normal ">
          Terms &amp; conditions
        </div>
        <div className="text-sm lg:text-base font-normal ">
          help@blitzleads.ai
        </div>
        <div className="sm:text-sm lg:text-base font-normal  flex space-x-4">
          <img src="/images/icons/facebook.png" alt="facebook" />
          <img src="/images/icons/insta.png" alt="instagram" />
          <img src="/images/icons/twitter.png" alt="twitter" />
        </div>
      </div>
    </div>
  </>
);
const DesktopFooter = () => (
  <>
    <div className="lg:flex flex-col items-start justify-start hidden">
      <div className="text-sm lg:text-base font-semibold mt-4">Press</div>
      <div className="text-sm lg:text-base font-semibold mt-4">Blog</div>
      <div className="text-sm lg:text-base font-semibold mt-4">Investors</div>
    </div>
    <div className="lg:flex flex-col items-start justify-start hidden">
      <div className="text-sm lg:text-base font-semibold mt-4">
        Privacy Policy
      </div>
      <div className="text-sm lg:text-base font-semibold mt-4">
        Terms &amp; conditions
      </div>
      <div className="sm:text-sm lg:text-base font-semibold mt-4 flex space-x-8">
        <img src="/images/icons/facebook.png" alt="facebook" />
        <img src="/images/icons/insta.png" alt="instagram" />
        <img src="/images/icons/twitter.png" alt="twitter" />
      </div>
    </div>
    <div className="lg:flex flex-col items-start justify-start hidden">
      <div className="text-sm lg:text-base font-semibold mt-4">
        help@blitzleads.ai
      </div>
      <div className="text-sm lg:text-base font-normal mt-4">
        BlitzLeads
        <br />
        6918 Corporate Drive
        <br />
        Houston TX 77036
      </div>
    </div>
  </>
);
export default Footer;