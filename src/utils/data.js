import {reRender} from '../index'

export const store = {
    state:{
        products: [
            {
                id: 1,
                name_uz: 'Букет 25 роз Нежный микс',
                name_ru: 'Букет 25 роз Нежный микс',
                description_uz: 'Высота: 60 см, Ширина: 35 см',
                description_ru: 'Высота: 60 см, Ширина: 35 см',
                slug: 'adasd-asdasd',   
                price: 13499,
                images: ['./images/products/product_1.png', './images/products/product_2.png', './images/products/product_3.png'],
                oldPrice: 15499,
                attributes: [
                    {
                        id: 1,
                        attributeName_uz: 'Длина ',
                        attributeName_ru: 'Длина ',
                        values:[
                            {
                                value_id: 1,
                                value_uz: '40 см',
                                value_ru: '40 см'
                            },
                            {
                                value_id: 2,
                                value_uz: '50 см',
                                value_ru: '50 см'
                            }
                        ]
                    },
                    {
                        id: 2,
                        attributeName_uz: 'Упаковка ',
                        attributeName_ru: 'Упаковка ',
                        values:[
                            {
                                value_id: 1,
                                value_uz: 'Ленточка',
                                value_ru: 'Ленточка'
                            },
                            {
                                value_id: 2,
                                value_uz: 'Крафт (+290₽)',
                                value_ru: 'Крафт (+290₽)'
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name_uz: 'Букет 25 роз Нежный микс',
                name_ru: 'Букет 25 роз Нежный микс',
                description_uz: 'Высота: 60 см, Ширина: 35 см',
                description_ru: 'Высота: 60 см, Ширина: 35 см',
                slug: 'adasd-asdasd',   
                price: 13499,
                images: ['./images/products/product_5.png', './images/products/product_2.png', './images/products/product_3.png'],
                oldPrice: 15499,
                attributes: [
                    {
                        id: 1,
                        attributeName_uz: 'Длина ',
                        attributeName_ru: 'Длина ',
                        values:[
                            {
                                value_id: 1,
                                value_uz: '40 см',
                                value_ru: '40 см'
                            },
                            {
                                value_id: 2,
                                value_uz: '50 см',
                                value_ru: '50 см'
                            }
                        ]
                    },
                    {
                        id: 2,
                        attributeName_uz: 'Упаковка ',
                        attributeName_ru: 'Упаковка ',
                        values:[
                            {
                                value_id: 1,
                                value_uz: 'Ленточка',
                                value_ru: 'Ленточка'
                            },
                            {
                                value_id: 2,
                                value_uz: 'Крафт (+290₽)',
                                value_ru: 'Крафт (+290₽)'
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                name_uz: 'Букет 25 роз Нежный микс',
                name_ru: 'Букет 25 роз Нежный микс',
                description_uz: 'Высота: 60 см, Ширина: 35 см',
                description_ru: 'Высота: 60 см, Ширина: 35 см',
                slug: 'adasd-asdasd',   
                price: 13499,
                images: ['./images/products/product_6.png', './images/products/product_2.png', './images/products/product_3.png'],
                oldPrice: 15499,
                attributes: [
                    {
                        id: 1,
                        attributeName_uz: 'Длина ',
                        attributeName_ru: 'Длина ',
                        values:[
                            {
                                value_id: 1,
                                value_uz: '40 см',
                                value_ru: '40 см'
                            },
                            {
                                value_id: 2,
                                value_uz: '50 см',
                                value_ru: '50 см'
                            }
                        ]
                    },
                    {
                        id: 2,
                        attributeName_uz: 'Упаковка ',
                        attributeName_ru: 'Упаковка ',
                        values:[
                            {
                                value_id: 1,
                                value_uz: 'Ленточка',
                                value_ru: 'Ленточка'
                            },
                            {
                                value_id: 2,
                                value_uz: 'Крафт (+290₽)',
                                value_ru: 'Крафт (+290₽)'
                            }
                        ]
                    }
                ]
            },
            {
                id: 4,
                name_uz: 'Букет 25 роз Нежный микс',
                name_ru: 'Букет 25 роз Нежный микс',
                description_uz: 'Высота: 60 см, Ширина: 35 см',
                description_ru: 'Высота: 60 см, Ширина: 35 см',
                slug: 'adasd-asdasd',   
                price: 13499,
                images: ['./images/products/product_7.png', './images/products/product_2.png', './images/products/product_3.png'],
                oldPrice: 15499,
                attributes: [
                    {
                        id: 1,
                        attributeName_uz: 'Длина ',
                        attributeName_ru: 'Длина ',
                        values:[
                            {
                                value_id: 1,
                                value_uz: '40 см',
                                value_ru: '40 см'
                            },
                            {
                                value_id: 2,
                                value_uz: '50 см',
                                value_ru: '50 см'
                            }
                        ]
                    },
                    {
                        id: 2,
                        attributeName_uz: 'Упаковка ',
                        attributeName_ru: 'Упаковка ',
                        values:[
                            {
                                value_id: 1,
                                value_uz: 'Ленточка',
                                value_ru: 'Ленточка'
                            },
                            {
                                value_id: 2,
                                value_uz: 'Крафт (+290₽)',
                                value_ru: 'Крафт (+290₽)'
                            }
                        ]
                    }
                ]
            },
        ],
        cartProducts: []
    },

    addCart(id){
        store.state.products.forEach(item => {
            if(item.id === id){
                store.state.cartProducts.push(item)
            }
        })
    
        reRender()
    },

    removeCart(id){
        store.state.cartProducts = store.state.cartProducts.filter(item => item.id !== id);
    
        reRender()
    }
}
