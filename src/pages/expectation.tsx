import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import React, { Component } from "react";
import Slider from "react-slick";
import { FaBeer } from 'react-icons/fa';
import { FcAcceptDatabase } from "react-icons/fc";

export default function Expectation() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
        
      };

    return (
        <>
    <Head>
        <title>Expectation</title>
      </Head>
            <nav className="bg-red outline outline-neutral-300  shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/">
                                <img className='w-10 h-10 hover:bg-blue-500' src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg" />
                            </Link>
                        </div>
                        <div className="flex space-x-5 text-white  text-[20px] max-sm:text-[14px]">
                            <Link href="/portfolio " className='font-mono hover:text-blue-500'>
                                Portfolio
                            </Link>
                            <Link href="/skills" className='font-mono hover:text-blue-500'>
                                Skills
                            </Link>
                            <Link href="/expectation " className='neonred font-mono text-blue-500 hover:text-white'>
                                Expectation
                            </Link>

                        </div>
                    </div>
                </div>
            </nav>

            
            
            



    

            <div className="flex justify-center items-center">
  <div className="h-[300px] w-[900px] max-sm:h-[420px] md:w-[700px] md:h-[250px] lg:h-[280px] max-sm:w-[350px] lg:w-[900px] rounded-lg p-5 bg-rose-200 outline outline-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mb-10">
    <div className="flex justify-center items-center  bg-sky-500 rounded-3xl outline outline-white">
      <p className="neonred text-center font-mono font-bold text-[20px] text-white ">Expectation</p>
      <FcAcceptDatabase size={30} />
    </div>
    <div className='text-black text-[30px] mx-2 mt-2 max-sm:text-[20px] md:text-[20px] lg:text-[25px]  '>
                    สิ่งที่คาดหวังจากการฝึกประสบการณ์
                    <br/>หวังว่าจะได้ค้นพบว่าตัวเองเหมาะกับสายงานเว็บโปรแกรมมิ่งหรือไม่
                    <br/>หวังว่าจะได้ความสามารถการเขียนเว็บเพิ่มขึ้น
                    <br/>ได้รับประสบการณ์ทำงานด้านบริษัทเพื่อใช้ในการต่อยอดในอนาคตและหวังว่าจะได้มิตรภาพที่ดีจากทุกคนในบริษัท
                        
                    </div>
  </div>
</div>






            <div className='mx-20 max-sm:mx-2  '>
        <h2 className='text-center mb-5 text-white '> Gallery </h2>
        <Slider {...settings}>
          <div className=''>
          <img className='max-sm:w-[100px] max-sm:h-[100px]  md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] border-4 border-black  rounded-2xl    w-[400px] h-[400px]'src="./fboro.jpg"  />
          </div>
          <div>
          <img className='max-sm:w-[100px] max-sm:h-[100px] md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] border-4 border-black rounded-2xl w-[400px] h-[400px]'src="https://images.theconversation.com/files/512871/original/file-20230301-26-ryosag.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"  />
          </div>
          <div>
          <img className='max-sm:w-[100px] max-sm:h-[100px] md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] border-4 border-black rounded-2xl w-[400px] h-[400px]'src="https://m.media-amazon.com/images/I/71PWqH6J4DL.jpg"  />
          </div>
          <div>
          <img className='max-sm:w-[100px] max-sm:h-[100px] md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] border-4 border-black rounded-2xl w-[400px] h-[400px]'src="https://paulbelford.com/assets/media/designs/uploads/articles/1920/front3_y2HDm6j.jpg"  />
          </div>
          <div>
          <img className='max-sm:w-[100px] max-sm:h-[100px] md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] border-4 border-black rounded-2xl w-[400px] h-[400px]'src="https://upload.wikimedia.org/wikipedia/en/7/74/Pink_Floyd-Animals-Frontal.jpg"  />
          </div>
          <div>
          <img className='max-sm:w-[100px] max-sm:h-[100px] md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] border-4 border-black  rounded-2xl w-[400px] h-[400px]' src="https://musicaficionado.blog/wp-content/uploads/2019/11/The-Wall-front-cover.jpg"  />
          </div>
        </Slider>
      </div>





        </>
    )
}