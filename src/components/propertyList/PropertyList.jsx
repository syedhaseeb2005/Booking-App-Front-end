import React from 'react'
import './PropertyList.css'
import useFetch from '../../Hooks/useFetch.js';

function PropertyList() {
    const {data , loading , error} = useFetch('http://localhost:8000/api/hotels/countByType')
    // console.log(data);
    const images = [
        "https://img.freepik.com/free-photo/light-garden-luxury-pool-nature_1203-4908.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais",
        "https://img.freepik.com/free-photo/pool_1308-5002.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais",
        "https://img.freepik.com/free-photo/pool_1308-5002.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais",
        "https://img.freepik.com/free-photo/traditional-beautiful-building-moroccan-morocco_1203-5629.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais",
        "https://img.freepik.com/free-photo/indoor-design-luxury-resort_23-2150497256.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais" 
    ]
    return (
    <div className='pList'>
       {loading ? 'Loading' 
        :
       <> {data && images.map((img , i) =>(
            <div className="pListItem" key={i}>
                <img src={img} alt="img" className='pListItemImg' />
                <div className="pListTitles">
                    <h1>{data[i]?.type}</h1>
                    <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
            </div>
        ))}
        </>}
    </div>
  )
}

export default PropertyList