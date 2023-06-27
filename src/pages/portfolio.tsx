import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Expectation from './expectation';

export default function Portfolio() {
    return (
        <>



            <Head>
                <title>Portfolio</title>
            </Head>



            <nav className=" outline outline-neutral-300  shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/">
                                <img className='w-10 h-10 hover:bg-blue-500 ' src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg" />
                            </Link>
                        </div>
                        <div className="flex space-x-5 text-white  text-[20px] max-sm:text-[14px]">
                            <Link href="/portfolio " className=' font-mono neonred hover:text-blue-500'>
                                Portfolio
                            </Link>
                            <Link href="/skills" className='font-mono hover:text-blue-500'>
                                Skills
                            </Link>
                            <Link href="/expectation " className='font-mono hover:text-blue-500'>
                                Expectation
                            </Link>

                        </div>
                    </div>
                </div>
            </nav>

            <div className='mt-10 max-sm:mb-20 md:mb-20 lg:mb-20  '>
    <div className="grid grid-cols-1  ml-10 mr-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
            <div className=' rounded-t-xl max-sm:text-[25px] neonred2  bg-black text-center font-mono text-[50px] font-bold text-red-500   '> 
            Portfolio 
            </div>
            
            <div className="grid grid-cols-2 max-sm:grid-cols-1 ">
  <div className="border bg-rose-200 justify-center items-center flex ">
    <img className=' w-[400] max-sm:w-[200px] md:w-[280px] lg:w-[400px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mt-10 mb-10 rounded-2xl 'src="./fboro.jpg" />
  </div>
  <div className="border bg-rose-200 block ">
  <div className=' bg-rose-500 basis-1/2 text-center  '> 
          <h1 className=' text-white m font-bold text-[30px] max-sm:text-[20px]'>ข้อมูลส่วนตัว</h1>
          </div>
          <ul className='mt-2 ml-5 text-black text-[18px] max-sm:text-[15px] max-md:text-[25px] '>
                <li>ชื่อจริง : นายภูมินันท์ อนันตึก</li>
                <li>ชื่อเล่น : เคน</li>
                <li>กรุ๊ปเลือด : B</li>
                <li>เกิดวันที่ : 13 พฤศจิกายน 1998</li>
                <li>สัญชาติ : ไทย</li>
                <li>บ้านเกิด : บุรีรัมย์ </li>
                <li>สีที่ชอบ : แดง</li>
                <li>อาหารที่ชอบ : ฟ๊าสฟู้ด</li>
                <li>กิจกรรมที่ชอบทำ : ดูหนัง ฟังเพลง เล่นเกม เล่นดนตรี</li>
                <li><a href="https://www.facebook.com/PhuminanAnanthuk">
                        Facebook : Phuminan Ananthuk</a></li>
                <li>อีเมล : moowinza@gmail.com</li>
                <li>โทร : 089-825-2646</li>
                <li>ที่อยู่ : บ้านเกาะ , นครราชสีมา , ประเทศไทย </li>
                <li>สาขา :สาขาวิศวกรรมคอมพิวเตอร์ </li>
                <li>สถานศึกษา : มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน</li>
          </ul>

  </div>
</div>

            
    </div>

    </div>







        </>

    )
}