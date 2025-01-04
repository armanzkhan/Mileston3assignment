import Image from "next/image"
import Link from "next/link"
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Home(){
    return(
        <>
        <main className="w-full min-h-screen flex-none lg:flex items-center top-0 bg-custom3 bg-opacity-50 overflow-x-hidden">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center pt-20 lg:pt-0">
                <div className="w-[100%] lg:w-[50%] lg:px-16 mt-10 lg:mt-20">
                    <h1 className="text-center lg:text-left text-4xl sm:text-5xl lg:text-7xl font-extrabold text-black">Ideas That Inspire</h1>
                    <p className="text-xl text-center lg:text-left py-5 lg:text-2xl lg:py-12 text-custom2 font-medium"> It is a space where innovation meets imagination, empowering you to think boldly and see the world in new ways.</p>
                    <Link href="/blog" className="flex justify-center lg:justify-start">
                    <button className=" hover:text-amber-600 hover:bg-opacity-80 bg-custom2 text-black mb-10 py-4 px-4 rounded-md border border-black flex items-center gap-4 font-medium">Explore Blogs <FaAngleDoubleRight /></button></Link>
                    
                </div>
                <div className="w-[100%] lg:w-[50%]  lg:mt-20 flex justify-center">
                    <Image className="px-3" src={"/images/homi.png"} alt="home banner" width={600} height={600}/>
                </div>
            </div>
           
        </main>
        </>
    )
}