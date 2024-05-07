import ASUS_x515 from './images/ASUS_x515.png'
import HP_15s from './images/HP_15s.png'
import lenovo_ip_1 from './images/lenovo_ip_1.png'

const laptops= [
   {
        id:1,
        model:'X515',
        brand:'ASUS',
        price: 150000.00,
        specification:{
            ram: '8 GB',
            display: '15.6 Inch',
            storage: '512GB SSD storage',
            processor:'Intel® core™ i5 1135G7 processor'           
        },
        imageUrl: ASUS_x515
   }, 
   {
        id:2,
        model:'15s',
        brand:'HP',
        price: 120000.00,
        specification:{
            ram: '4 GB',
            display: '15.6 Inch HD',
            storage: '256GB SSD storage',
            processor:'Intel® Celeron® N4500 processor'           
        },
        imageUrl: HP_15s
    }, 
    {
        id:3,
        model:'IdeaPad 1 AMD',
        brand:'Lenovo',
        price: 90000.00,
        specification:{
            ram: '4 GB',
            display: '15.6 Inch',
            storage: '512GB SSD storage',
            processor:'AMD® Ryzen™ 3 7320U Processor'           
        },
        imageUrl: lenovo_ip_1
     }
]

export default laptops;