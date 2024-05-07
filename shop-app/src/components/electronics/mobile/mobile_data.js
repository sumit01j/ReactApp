import xiaomi_14Ultra from './images/xiaomi_14Ultra.png'
import OnePlus from './images/OnePlus.png'
import realme_12Pro from './images/realme_12Pro.png'

const mobiles= [
   {
        id:1,
        model:'14 ultra',
        brand:'Xiaomi',
        price: 99999.00,
        specification:{
            ram: '16 GB',
            storage: '512 GB',
            camera:{
                primary: '50+50+50+50 MP',
                front: '32 MP'
            }
        },
        imageUrl: xiaomi_14Ultra
   }, 
   {
        id:2,
        model:'12 R',
        brand:'One Plus',
        price: 39999.00,
        specification:{
            ram: '8 GB',
            storage: '512 GB',
            camera:{
                primary: '50 + 8 + 2 MP',
                front: '16 MP'
            }
        },
        imageUrl: OnePlus
    }, 
    {
         id:3,
         model:'12 Pro',
         brand:'realme',
         price: 29999.00,
         specification:{
             ram: '12 GB',
             storage: '256 GB',
             camera:{
                 primary: '50 + 8 + 2 MP',
                 front: '16 MP'
             }
         },
         imageUrl: realme_12Pro
     }
]

export default mobiles;