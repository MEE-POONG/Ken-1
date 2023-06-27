import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Expectation from './expectation';

export default function Test() {
    return (
        <>



            <Head>
                <title>Phuminan A</title>
            </Head>



            <nav className=" outline outline-neutral-300  shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/">
                                <img className='w-10 h-10 hover:bg-blue-500 ' src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg" />
                            </Link>
                        </div>
                        <div className="font-mono flex space-x-5 text-white  text-[20px] max-sm:text-[14px]">
                            <Link href="/portfolio " className='font-mono hover:text-blue-500'>
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
                <div className="grid grid-cols-2  xl:ml-10 xl:mr-10  max-sm:grid-cols-1">
                    <div className="  xl:py-40 xl:ml-[200px]  lg:py-40 lg:ml-10   md:py-40  md:ml-[100px]    max-sm:ml-10     ">
                        <div className="font-mono text-3xl max-sm:text-xl text-slate-300"> 
                        HI THERE
                        </div>

                        <div className="font-mono text-6xl max-sm:text-4xl text-slate-200"> 
                        I'M PHUMINAN ANANTHUK
                        </div>


                        <p className="font-mono text-xl max-sm:text-sm text-slate-300" > Internship of web development from MePrompt Technology CO., LTD. </p>
                        
                        <div className='block xl:space-x-5 lg:space-x-5 md:space-x-5  md:space-y-5 max-sm:space-x-5 mt-5  '>
                        <Link href='/portfolio'>
                        <button className="max-sm:mb-5 bg-blue-500 hover:bg-blue-700 text-white font-mono font-bold py-2 px-4 border border-blue-700 rounded">
                            Portfolio
                        </button>
                        </Link>
                        <Link href='/skills'>
                        <button className="max-sm:mb-5 bg-blue-500 hover:bg-blue-700 text-white font-mono font-bold py-2 px-4 border border-blue-700 rounded">
                            Skills
                        </button>
                        </Link>
                        <Link href='/expectation'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-mono font-bold py-2 px-4 border border-blue-700 rounded">
                            Expectation
                        </button>
                        </Link>
                        </div>
                </div>
                    
                    
                <div className="  items-center flex xl:mr-40 lg:mr-20 md:mr-20  max-sm:mr-0 max-sm:mt-10   " >
                <img className=' w-[500px] rounded-full border-2 'src="./fboro.jpg" />
                </div>
                    
                
                </div>

                
            </div>







        </>

    )
}