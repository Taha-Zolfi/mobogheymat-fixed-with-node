import React from 'react';
import { motion } from 'framer-motion';
import './fpage.css';
import logo from '../../assets/logo.png';

const Fpage = () => {
  return (
    <div className='fpage'> 
      <motion.img 
        src={logo} 
        alt="Logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      <div className='texts'>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          قیمت روز موبایل
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
        >
          نکته : تمامی قیمت ها از <a href="https://torob.com">سایت ترب</a> کراول شده و صرفا این سایت پروژه ای برای رزومه است . <a href="https://taha-zolfi.github.io/site">ارتباط با برنامه نویس</a>
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
        >
          اگر قیمت ها برای شما نمایش داده نشد قندشکن خودتونو خاموش کنید و رفرش کنید
        </motion.p>
      </div>
    </div> 
  );
}

export default Fpage;

