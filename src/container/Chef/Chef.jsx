import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">
        What We Believe In
      </h1>

      <div className="app__chef-content">
      <div className="app__chef-content_quote">
        <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, efficitur quis.</p>
      </div>
        <p className="p__opensans">In eget mauris nec nisl gravida efficitur. Pellentesque quis arcu ut nisi consequat hendrerit vel nec leo. Nunc vitae suscipit justo. Integer enim libero, euismod sit amet hendrerit ut, tempus sit amet velit</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Lou</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
