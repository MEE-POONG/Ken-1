import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <body>
      
    
      <Head>
        <title>Phuminan's Page</title>
      </Head>
   

    
      <nav className="bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
            <img className='w-10 h-10 hover:bg-red-500 ' src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg" />
            </Link>
          </div>
          <div className="flex space-x-5 text-white  text-[20px]">
            <Link href="/skills" className='hover:text-red-500'>
              Skills 
            </Link>
            <Link href="/expectation " className='hover:text-red-500'>
              Expectation 
            </Link>
          
          </div>
        </div>
      </div>
    </nav>


   
   
      <div className=' rounded-t-xl bg-black text-center font-sans text-[50px] font-bold text-red-500 mt-10 ml-20 mr-20   '> Portforlio </div>
      

      <div className="grid grid-cols-2 justify-center ml-20 mr-20">
        <div className=' bg-blue-400 rounded-bl-xl '>
          <div className=' flex justify-center items-center'>
            <img className='border-4 border-black mt-10 mb-10 rounded-2xl'src="https://scontent.fnak3-1.fna.fbcdn.net/v/t39.30808-6/335591418_1566633160499640_8499768689655654892_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGVhqex103dwMYAtlsw0DX6NPcwzHG5f3E09zDMcbl_ccNgwexChmjS4RJPz5A6PUbXawYUTwJRFuzNIU3i04oS&_nc_ohc=nHtkz_YHJzQAX92tvac&_nc_ht=scontent.fnak3-1.fna&oh=00_AfASemEO0t7VMS0Zesma3EX4WwENoxQVXWwL2C-HhZ9pCQ&oe=64999430" width={400} /></div>
            
          </div>
          <div className=' bg-rose-200 rounded-br-xl'>
          <div className=' bg-rose-500 basis-1/2 text-center '> 
          <h1 className='text-white m font-bold text-[30px]'>ข้อมูลส่วนตัว</h1>
          </div>
          <ul className='mt-2 ml-5 text-black text-[18px] '>
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



     
      </body>
    </>

  )
}