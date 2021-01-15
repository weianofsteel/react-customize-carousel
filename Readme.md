## react-customize-carousel


Source code at https://github.com/weianofsteel/react-customize-carousel


# Installation
    
    npm install --save react-customize-carousel

or

    yarn add react-customize-carousel


# Usage

``` 
import React from 'react';
import CustomizeCarousel from 'react-customize-carousel';
import img1 from '../public/img1.jpg';
import img2 from '../public/img2.jpg';
import img3 from '../public/img3.jpg';
import img4 from '../public/img4.jpg';

function Demo(){
    return(
        <React.Fragment>
            <div>
                <CustomizeCarousel
                    imgsrc={[img1, img2, img3, img4]}
                    rotateBy={2}
                    width={'600px'}
                    height={'500px'}
                    navigateButton={true}
                    controlButton={true}
                />
            </div> 
        </React.Fragment>
    )
}

export default Demo;
```

# Props

|       Name      |         Type         |  Default  |                       Description                       |
|-----------------|----------------------|-----------|---------------------------------------------------------|
|  imgsrc         |  [img1, img2, img3]  |  [ ]      | It's an array, put the name of image you imported as    |
|                 |  (array)             |           | element.                                                |
|  rotateBy       |  number              |  3        | How many seconds your carousel rotate.                  |
|  width          |  string              |  '600px'  | Defines width for image in carousel                     |
|  height         |  string              |  '500px'  | Defines height for image in carousel                    |
|  navigateButton |  booling             |  null     | Radio navigate shows up when navigateButton set to true |
|  controlButton  |  booling             |  null     | Control button shows up when controlButton set to true  |