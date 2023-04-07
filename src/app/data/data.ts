
export interface IDataProduct {
    id: string
    name: string
    content: string
    price: number
    rating: number
    img: string[]
}
export interface IDataCart {
    id: string
    name: string
    content: string
    price: number
    rating: number
    img: string[]
    quantity: number
}
export const dataShop: IDataProduct[] = [
    {
        id: '1',
        name: 'Sam sung galaxy A1',
        content: 'Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.',
        price: 6000000,
        rating: 3,
        img: ['https://cf.shopee.vn/file/080be866c213140fb89480a1191824ac','assets/phone.png', 'https://danviet.mediacdn.vn/upload/2-2019/images/2019-06-25/3-1561430885-width660height440.jpg']
    },
    {
        id: '2',
        name: 'Sam sung galaxy B123',
        content: 'Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.',
        price: 60000000,
        rating: 1,
        img: ['https://cf.shopee.vn/file/080be866c213140fb89480a1191824ac','assets/phone.png', 'https://danviet.mediacdn.vn/upload/2-2019/images/2019-06-25/3-1561430885-width660height440.jpg']
    },
    {
        id: '3',
        name: 'Sam sung galaxy C123',
        content: 'Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.',
        price: 68000000,
        rating: 0,
        img: ['https://cf.shopee.vn/file/080be866c213140fb89480a1191824ac','assets/phone.png', 'https://danviet.mediacdn.vn/upload/2-2019/images/2019-06-25/3-1561430885-width660height440.jpg']
    },
    {
        id: '4',
        name: 'Iphone 14',
        content: 'Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.',
        price: 3000000,
        rating: 3,
        img: ['assets/phone.png', 'https://cf.shopee.vn/file/080be866c213140fb89480a1191824ac', 'https://danviet.mediacdn.vn/upload/2-2019/images/2019-06-25/3-1561430885-width660height440.jpg']
    },
    {
        id: '5',
        name: 'Iphone 15',
        content: 'Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.',
        price: 61000000,
        rating: 5,
        img: ['assets/phone.png', 'https://cf.shopee.vn/file/080be866c213140fb89480a1191824ac', 'https://danviet.mediacdn.vn/upload/2-2019/images/2019-06-25/3-1561430885-width660height440.jpg']
    },
    {
        id: '6',
        name: 'Xiaomi Note11',
        content: 'Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.',
        price: 62000000,
        rating: 1,
        img: ['https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg', 'assets/phone.png', 'https://cf.shopee.vn/file/080be866c213140fb89480a1191824ac', 'https://danviet.mediacdn.vn/upload/2-2019/images/2019-06-25/3-1561430885-width660height440.jpg']
    },
    {
        id: '7',
        name: 'Sam sung CAA A1',
        content: 'Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.',
        price: 36000000,
        rating: 4,
        img: ['https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg', 'assets/phone.png', 'https://danviet.mediacdn.vn/upload/2-2019/images/2019-06-25/3-1561430885-width660height440.jpg']
    },
    {
        id: '8',
        name: 'Sam sung bb1 A1',
        content: 'Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.',
        price: 26000000,
        rating: 2,
        img: ['https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg', 'assets/phone.png', 'https://danviet.mediacdn.vn/upload/2-2019/images/2019-06-25/3-1561430885-width660height440.jpg']
    }
    
]