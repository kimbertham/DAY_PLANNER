import React from 'react'
import { useAppSelector } from '../../state/hooks'
import { defaultImg } from '../../lib/common'

import notifs from './styles/icons/notifs.jpg'
import darkmode from './styles/icons/darkmode.jpg'
// import lightmode from './styles/icons/lightmode.jpg'
import styles from './styles/nav.module.scss'

const Topnav = () => {
  const user = useAppSelector((state) =>state.auth.user)

  return (
    <div className={styles.topnav}>

      <div className={styles.topIcons}>
        <img src={darkmode} alt='profile-img' className={styles.icon}/>

        <img src={notifs} alt='profile-img' className={styles.icon}/>

        <div className={styles.topnavProfile}>
          <p className='capitalize'>{user?.firstName} </p>
          <img src={defaultImg} alt='profile-img'/>
        </div>

      </div>
    </div>
  )
}
export default Topnav