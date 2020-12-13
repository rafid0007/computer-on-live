import {component} from "./components/sidebar/sidebar.data";

export const products = [
    {
        id: 1,
        title: 'amd-ryzen-5-3600-processor',
        status: 1,
        brand: 'AMD',
        model: 'Ryzen 5 3600',
        warranty: 5,
        price: '17,000',
        imageUrl: 'https://source.unsplash.com/600x600/?gadget,electronics'
    }
];


export const categories = [
    {
        title: 'component',
        index: ['component'],
        items: [
            {
                title:'processor',
                index: ['component', 'processor'],
                route: 'component/processor',
                items: [
                    {
                        title: 'amd',
                        index: ['component', 'processor', 'amd'],
                        items: [
                            {
                                id: 1,
                                title: 'amd-ryzen-5-3600-processor',
                                status: 1,
                                brand: 'AMD',
                                model: 'Ryzen 5 3600',
                                warranty: 5,
                                price: '17,000',
                                imageUrl: 'https://source.unsplash.com/600x600/?gadget,electronics'
                            },
                            {
                                id: 2,
                                title: 'amd-ryzen-5-3500X-processor',
                                status: 1,
                                brand: 'AMD',
                                model: 'Ryzen 5 3500X',
                                warranty: 5,
                                price: '12,600',
                                imageUrl: 'https://source.unsplash.com/600x600/?gadget,gaming'
                            },
                            {
                                id: 1,
                                title: 'amd-ryzen-5-3300X-processor',
                                status: 1,
                                brand: 'AMD',
                                model: 'Ryzen 5 3600',
                                warranty: 5,
                                price: '12,000',
                                imageUrl: 'https://source.unsplash.com/600x600/?gadget,electronics'
                            },
                            {
                                id: 1,
                                title: 'amd-ryzen-5-3100-processor',
                                status: 1,
                                brand: 'AMD',
                                model: 'Ryzen 5 3100',
                                warranty: 5,
                                price: '13,000',
                                imageUrl: 'https://source.unsplash.com/600x600/?gadget,electronics'
                            },
                            {
                                id: 1,
                                title: 'amd-ryzen-5-3200-processor',
                                status: 1,
                                brand: 'AMD',
                                model: 'Ryzen 5 3200',
                                warranty: 5,
                                price: '14,000',
                                imageUrl: 'https://source.unsplash.com/600x600/?gadget,electronics'
                            },
                            {
                                id: 1,
                                title: 'amd-ryzen-5-3300-processor',
                                status: 1,
                                brand: 'AMD',
                                model: 'Ryzen 5 3300',
                                warranty: 5,
                                price: '15,000',
                                imageUrl: 'https://source.unsplash.com/600x600/?gadget,electronics'
                            },

                        ]
                    },
                    {
                        title: 'intel',
                        index: ['component', 'processor', 'amd'],
                        items: []
                    }
                ]
            },
            {
                title:'ram',
                index: ["component",'ram'],
                route: 'component/ram',
                items: []
            },
            {
                title:'motherboard',
                index: ["component", 'motherboard'],
                route: 'component/motherboard',
                items: []
            },
            {
                title:'graphics card',
                index: ['component', 'graphics card'],
                route: 'component/graphics-card',
                items: []
            },
            {
                title:'power supply',
                index: ['component', 'power supply'],
                route: 'component/power-supply',
                items: []
            },
        ]
    },
    {
        title: 'laptop',
        index: ['laptop'],
        items: [
            {
                title:'dell',
                route: 'laptop/dell',
            },
            {
                title:'hp',
                route: 'laptop/hp',
            },
            {title:'lenovo',route: 'laptop/lenovo',},
            {title:'asus', route: 'laptop/asus',},
            {title:'acer', route: 'laptop/acer',},
        ]
    },
    {
        title: 'monitor',
        index: ['monitor'],
        items: [
            {title:'lg'},
            {title:'asus'},
            {title:'dell'},
            {title:'hp'},
            {title:'benq'},
            {title:'samsung'},
            {title:'acer'},
        ]
    },
    {
        title: 'Accessories'
    },
    {
        title: 'Camera'
    },
    {
        title: 'IPS'
    }
];