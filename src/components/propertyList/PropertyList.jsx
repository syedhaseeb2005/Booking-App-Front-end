import React from 'react'
import './PropertyList.css'

function PropertyList() {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://img.freepik.com/free-photo/light-garden-luxury-pool-nature_1203-4908.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais" alt="img" className='pListItemImg' />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://img.freepik.com/free-photo/one-king-size-bed-hotel-room_114579-12159.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais" alt="img" className='pListItemImg'/>
            <div className="pListTitles">
                <h1>Appartment</h1>
                <h2>2331 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://img.freepik.com/free-photo/pool_1308-5002.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais" className='pListItemImg' alt="img" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>200 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://img.freepik.com/free-photo/traditional-beautiful-building-moroccan-morocco_1203-5629.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais" className='pListItemImg' alt="img" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>300 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://img.freepik.com/free-photo/indoor-design-luxury-resort_23-2150497256.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais" className='pListItemImg' alt="img" />
            <div className="pListTitles">
                <h1>Cabbins</h1>
                <h2>500 Hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList