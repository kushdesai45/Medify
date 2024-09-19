import React from 'react';

let list = [
    {iconName:"Dentistry",iconImg:"/assests/drugstore.svg"},
    {iconName:"Primary Care",iconImg:"/assests/stethoscope.svg"},
    {iconName:"Cardiology",iconImg:"/assests/heart-rate.svg"},
    {iconName:"MRI Resonance",iconImg:"/assests/heart-rate-monitor.svg"},
    {iconName:"Blood Test",iconImg:"/assests/blood-sample.svg"},
    {iconName:"Piscologist",iconImg:"/assests/immune.svg"},
    {iconName:"Laboratory",iconImg:"/assests/drugstore.svg"},
    {iconName:"X-Ray",iconImg:"/assests/x-ray.svg"}
]

export default function Specalization() {

  return (
    <div className='specialContainer'>
        <h2>Find by specialisation</h2>
        <div className='specialList'>
            {
                list.map((item,idx)=>{
                    return(
                    <div className='specialDiv' key={idx}>
                        <img style={{width: '50px',height: '50px'}} src={item.iconImg} alt={item.iconName} />
                        <span style={{color:"#ABB6C7",fontSize:'18px'}}>{item.iconName}</span>
                    </div>
                    )
                })
            }
        </div>
        <button className='specialBtn'>View All</button>
    </div>
  )
}
