import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'


export default function Skills(){
    return(
        <>
        <Head>
        <title>Skills</title>
      </Head>

        <nav className=" outline outline-neutral-300 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
            <img className='w-10 h-10 hover:bg-blue-500' src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg" />
            </Link>
          </div>
          <div className="flex space-x-5 text-white  text-[20px] max-sm:text-[14px]">
          <Link href="/portfolio " className=' font-mono hover:text-blue-500'>
                                Portfolio
                            </Link>
            <Link href="/skills" className='neonred font-mono text-blue-500 hover:text-white' >
              Skills 
            </Link>
            <Link href="/expectation " className='font-mono hover:text-blue-500'>
              Expectation 
            </Link>
          
          </div>
        </div>
      </div>
    </nav>

    


            <div className="flex justify-center items-center  ">
                <div className='shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] h-[720px] w-[900px] rounded-lg p-5 bg-rose-200 outline outline-white mb-10'>
                    <ul className='text-black text-[20px] space-y-4 font-mono'>
                        <p className=' font-mono neonred outline outline-white text-center font-bold text-[20px]  text-white bg-rose-500 rounded-3xl mb-2'>Skills</p>
                        <li>English </li>
                        <div className=" border border-black w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-4">
                            <div className="bg-green-600  w-[35%]  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 35%</div>
                        </div>
                        <li>C language </li>
                        <div className="border border-black w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-4">
                            <div className="bg-green-600  w-3/4 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 75%</div>
                        </div>
                        <li>C++ language</li>
                        <div className="border border-black w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-4">
                            <div className="bg-green-600  w-2/4 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 50%</div>
                        </div>
                        <li>Python</li>
                        <div className="border border-black w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-4">
                            <div className="bg-green-600  w-[50%] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 50%</div>
                        </div>
                        <li>JAVA </li>
                        <div className="border border-black w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-4">
                            <div className="bg-green-600  w-[20%]  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 20%</div>
                        </div>
                        <li>HTML</li>
                        <div className="border border-black w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-4">
                            <div className="bg-green-600  w-[50%] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 50%</div>
                        </div>
                        <li>MySQL</li>
                        <div className="border border-black w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-4">
                            <div className="bg-green-600  w-2/4 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 50%</div>
                        </div>
                        <li>Arduino</li>
                        <div className="border border-black w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-4">
                            <div className="bg-green-600  w-[25%]  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"> 25%</div>
                        </div>
                    </ul>

                
                
                    
                    
                
                </div>
            </div>


        
        </>
    )
}