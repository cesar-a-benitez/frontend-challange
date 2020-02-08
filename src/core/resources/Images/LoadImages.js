import React from 'react'

export default function LoadImages() {
    const xiaomi_mi9_banner = require('./Slideshow/xiaomi-mi9.jpeg');
    const galaxy_s10_banner = require('./Slideshow/samsung-galaxy-s10.jpeg');
    const apple_banner = require('./Slideshow/Dear-Apple-banner.jpg');
    const galaxy_s9_banner = require('./Slideshow/galaxy-s9-banner.jpg');
    const xiaomi_mi8_banner = require('./Slideshow/xiaomi-mi8-banner.jpg')

    let toReturn = {
        "Banners": [{
                "name": "xiaomi_mi9_banner",
                "image": xiaomi_mi9_banner
            },
            {
                "name": "galaxy_s10_banner",
                "image": galaxy_s10_banner,
            },
            {
                "name": "apple_banner",
                "image": apple_banner
            },
            {
                "name": "galaxy_s9_banner",
                "image": galaxy_s9_banner        
            },
            {
                "name": "xiaomi_mi8_banner",
                "image": xiaomi_mi8_banner
            },]
    }

    return toReturn;
}