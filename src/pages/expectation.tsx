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
          <img className='max-sm:w-[100px] max-sm:h-[100px]  md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] border-4 border-black  rounded-2xl    w-[400px] h-[400px]'src="https://scontent.fnak3-1.fna.fbcdn.net/v/t39.30808-6/335591418_1566633160499640_8499768689655654892_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGVhqex103dwMYAtlsw0DX6NPcwzHG5f3E09zDMcbl_ccNgwexChmjS4RJPz5A6PUbXawYUTwJRFuzNIU3i04oS&_nc_ohc=nHtkz_YHJzQAX92tvac&_nc_ht=scontent.fnak3-1.fna&oh=00_AfASemEO0t7VMS0Zesma3EX4WwENoxQVXWwL2C-HhZ9pCQ&oe=64999430"  />
          </div>
          <div>
          <img className='max-sm:w-[100px] max-sm:h-[100px] md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] border-4 border-black rounded-2xl w-[400px] h-[400px]'src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"  />
          </div>
          <div>
          <img className='max-sm:w-[100px] max-sm:h-[100px] md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] border-4 border-black rounded-2xl w-[400px] h-[400px]'src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863"  />
          </div>
          <div>
          <img className='max-sm:w-[100px] max-sm:h-[100px] md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] border-4 border-black rounded-2xl w-[400px] h-[400px]'src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"  />
          </div>
          <div>
          <img className='max-sm:w-[100px] max-sm:h-[100px] md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] border-4 border-black rounded-2xl w-[400px] h-[400px]'src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"  />
          </div>
          <div>
          <img className='max-sm:w-[100px] max-sm:h-[100px] md:w-[200px] md:h-[200px] lg:h-[300px] lg:w-[300px] border-4 border-black  rounded-2xl w-[400px] h-[400px]' src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg"  />
          </div>
        </Slider>
      </div>





        </>
    )
}