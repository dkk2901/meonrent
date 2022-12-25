import React from "react";
import "./Banner.css";
import images from './images/download.png'

const Banner = () => {
  return (
    <div className="background">
    
      <div className="rightbox">
      <h1>WE KNOW <br />
WHAT YOU ARE <br />
SEARCHING FOR!</h1>
<div className="intro">
        <p> <h4>
        MeOnRent Is An Online Library That Offers A Variety Of Membership Options, As The Name Would Imply. <br />
We Have Everything, Whether It Is Fiction, Nonfiction, College Textbooks, Local Materials, Or Magazines. <br />
The Books Will Be In Your Possession In A Day, So You Can Relax, Prepare A Cup Of Tea, And Read Away! <br />
You Can Customise Your Plan Based On Your Reading Preferences. <br />
</h4>
        </p>
        </div>
        <button type="button" class="btn btn-darkle">Shop Now</button>
      </div> 
  
     

    </div>
  );
};

export default Banner;


