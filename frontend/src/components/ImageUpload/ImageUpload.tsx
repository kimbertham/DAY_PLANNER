/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'
import styles from './imageUpload.module.scss'

const uploadUrl = 'https://api.cloudinary.com/v1_1/diyxyp4qk/image/upload'
const uploadPreset = 'eceecv3s'


const ImageUpload = () => {
  const [image, setImage] = useState<string>()


  const handleUpload = async (e: any) => {
    const data = new FormData()
    data.append('file', e.target.files[0])
    data.append('upload_preset', uploadPreset)
    const photoRes = await axios.post(uploadUrl, data)
    setImage(photoRes.data.url)
  }

  return (
    <div className={styles.imageUpload}> 
      <label>Image</label>
      <input 
        name='image'
        className='img-input'
        type="file"
        onChange={handleUpload}/>
    </div>

  )
}
export default ImageUpload