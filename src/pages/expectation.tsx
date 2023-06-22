import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

export default function Expectation() {
    return (
        <>

            <nav className="bg-blue-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/">
                                <img className='w-10 h-10 hover:bg-red-500' src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg" />
                            </Link>
                        </div>
                        <div className="flex space-x-5 text-white  text-[20px]">
                            <Link href="/skills" className='hover:text-red-500'>
                                Skills
                            </Link>
                            <Link href="/expectation " className='text-red-500 hover:text-white'>
                                Expectation
                            </Link>

                        </div>
                    </div>
                </div>
            </nav>

            <button className="bg-red-500 shadow-lg shadow-red-500/50 h-[50px] w-[100px] ">Subscribe</button>
        
            <h1 className="text-4xl font-bold text-white">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-2xl">
    Neon Text
  </span>
</h1>




            <div className="flex justify-center items-center ">
                <div className=' h-[300px] w-[900px] rounded-lg p-5 bg-rose-400 outline  shadow-2xl shadow-rose-400/50 mb-10 '>
                    <p className='outline outline-black text-center font-sans font-bold text-[20px]  text-white bg-sky-500 rounded-3xl mb-2'>Expectation</p>

                    <div className='break-words text-white text-[30px] mx-1   '>
                        สิ่งที่คาดหวังจากการฝึกประสบการณ์ 
                        <br/>หวังว่าจะได้ค้นพบว่าตัวเองเหมาะกับสายงานเว็บโปรแกรมมิ่งหรือไม่
                        <br/>หวังว่าจะได้ความสามารถการเขียนเว็บเพิ่มขึ้น
                        <br/>ได้รับประสบการณ์ทำงานด้านบริษัทเพื่อใช้ในการต่อยอดในอนาคตและหวังว่าจะได้มิตรภาพที่ดีจากทุกคนในบริษัท
                        <br/>
                    </div>
                </div>
            </div>







        </>
    )
}