import React, { useState } from 'react';
import img1 from '../../images/bmxpeliazul.jpg'
import img2 from '../../images/cientoochentabmx.jpg'
import img3 from '../../images/pexels-alex-9713020.jpg'
import img4 from '../../images/pexels-cottonbro-5446305.jpg'
import img5 from '../../images/pexels-cottonbro-5465160.jpg'
import img6 from '../../images/pexels-cottonbro-5465247.jpg'
import img7 from '../../images/pexels-santiago-josé-calvo-11820083.jpg'

export const Galery = () => {

  // o b j e c t s

  let data = [
    {
      id: 1,
      imgSrc: img1
    },
    {
      id: 2,
      imgSrc: img2
    },
    {
      id: 3,
      imgSrc: img3
    },
    {
      id: 4,
      imgSrc: img4
    },
    {
      id: 5,
      imgSrc: img5
    },
    {
      id: 6,
      imgSrc: img6
    },
    {
      id: 7,
      imgSrc: img7
    }
  ]


  const [tempimgSrc, setTempimgSrc] = useState('')



  const getImg = (imgSrc) => {
    const model = document.getElementById('model')
    model.style.visibility = "visible";

    const gallery = document.getElementById('gallery')
    gallery.style.visibility="hidden"

    setTempimgSrc(imgSrc)
  }


  const hiddenModal = () => {
    const model = document.getElementById('model')
    model.style.visibility = "hidden";

    const gallery = document.getElementById('gallery')
    gallery.style.visibility="visible"
  }
 
  return (
    <div className='BigCont'>
      <div id='gallery' className='gallery'>
        {data.map((dat, index )=> {
          return(
            <div className='pics' onClick={()=> getImg(dat.imgSrc)} key={index}>
              <img className='biker' src={dat.imgSrc} alt="" />
            </div>
          )
        })}
        <div id='model' className='modal'>
          <img src={tempimgSrc} alt="" />
          <span onClick={hiddenModal} className="material-symbols-outlined">close</span>
        </div>  
      </div>
    </div>
  )
}