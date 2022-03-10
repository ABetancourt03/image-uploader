import React, { useEffect, useState } from 'react'

const UploadImage = () => {
  const [images, setImages] = useState([])
  const [imageURLs, setImageURLs] = useState([])

  useEffect(() => {
    if (images.length < 1) return
    const newImageUrls = []
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)))
    setImageURLs(newImageUrls)
    console.log(newImageUrls)
  }, [images])

  const onImageChance = e => {
    setImages([...e.target.files])
  }

  return (
    <div className='UploadImage'>
      <input type='file' accept='image/*' onChange={onImageChance} />
      {imageURLs.map(imageSrc => (
        <img key={Date.now()} width={'50%'} src={imageSrc} />
      ))}
    </div>
  )
}

export default UploadImage
