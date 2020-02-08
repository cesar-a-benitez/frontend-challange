export default function LoadImages() {
    // Slides / Cards
    const xiaomi_mi9_banner = require('./Slideshow/xiaomi-mi9.png');
    const galaxy_s10_banner = require('./Slideshow/samsung-galaxy-s10.jpeg');
    const apple_banner      = require('./Slideshow/Dear-Apple-banner.jpg');
    const galaxy_s9_banner  = require('./Slideshow/galaxy-s9-banner.jpg');
    const xiaomi_mi8_banner = require('./Slideshow/xiaomi-mi8-banner.jpg');

    // Categories / Phones
    const outlet        = require('./Selectors/outlet.jpg');
    const tv_audio_home = require('./Selectors/tv_audio_home.jpg');
    const diversos      = require('./Selectors/diversos.jpg');
    const apple         = require('./Selectors/apple.jpeg');
    const gosat         = require('./Selectors/gosat.jpg');
    const huawei        = require('./Selectors/huawei.jpg');
    const iphone11      = require('./Selectors/iphone-11.jpg');
    const lenovo        = require('./Selectors/lenovo.jpg');
    const motorola      = require('./Selectors/motorola.jpg');
    const samsung       = require('./Selectors/samsung.jpg');
    const xiaomi        = require('./Selectors/xiaomi.jpg')

    // Export images for render
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
            },
            {
                "name": "iphone11",
                "image": iphone11
            },
            {
                "name": "xiaomi",
                "image": xiaomi
            },
            {
                "name": "samsung",
                "image": samsung
            },
            {
                "name": "motorola",
                "image": motorola
            },
            {
                "name": "lenovo",
                "image": lenovo
            },
            {
                "name": "huawei",
                "image": huawei
            },
            {
                "name": "outlet",
                "image": outlet
            },
            {
                "name": "tv_audio_home",
                "image": tv_audio_home
            },
            {
                "name": "diversos",
                "image": diversos
            },
            {
                "name": "apple",
                "image": apple
            },
            {
                "name": "gosat",
                "image": gosat
            },
        ]
    }

    return toReturn;
}