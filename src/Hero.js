import React from 'react'
import { Routes, Route, Link ,useParams} from 'react-router-dom';
import { Typography } from "@material-tailwind/react";
import { Card, Button } from 'flowbite-react';
import Modal from './Modal';


function Hero() {
  const { category,name} = useParams();
  return (
    
    <div style={{backgroundColor:"#ffb14c"}} className="overflow-hidden ">
    <div className="flex justify-center  max-h-screen ">
      <div className="max-w-sm m-2">
        <Card imgSrc="https://source.unsplash.com/random/200x200">
          <div className=" grid grid-cols-1 grid-rows-2  place-items-center h-sm ">
            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <Modal></Modal>
          </div>
        </Card>
      </div>
      </div>

    </div>
  )
}

export default Hero
