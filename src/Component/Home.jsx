import { icons } from "lucide-react"

export default function Home() {
    const chooses=[
        {title:"Full-spectrum digital expertise",icons:"🌐"},
        {title:"AI & machine learning-powered solutions",icons:"🤖"},
        {title:" A perfect blend of creativity and strategy",icons:"🎨"},
        {title:"Scalable results for businesses of any size",icons:"🚀"},
        {title:"Continuous support to stay ahead of the curve",icons:"🛠️"}
    ]
  return (
    <div className='py-25 px-4 md:px-12'>
          <div className="relative flex flex-col items-center justify-center text-white px-4 min-h-screen overflow-hidden">
             <img  aria-hidden="true" src="/Home.png" alt="Home Background" className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl -z-10"/>
             <h1 className="text-2xl md:text-4xl font-bold text-center py-10 mb-4 md:mr-60">
                Redefining Digital. Elevating Brands.
            </h1>
            <p className="text-lg md:text-xl text-center max-w-2xl mb-8  md:mr-70">
                  At Rezukah, we don’t just follow trends — we set them. We’re pioneers in crafting transformative digital journeys that blend creativity, data, and cutting-edge technology. From AI-powered marketing campaigns and intelligent web development to immersive user experiences and scalable eCommerce solutions, we help businesses not only stand out — but lead. Every solution we create is built to inspire engagement, drive growth, and deliver real results in an ever-evolving digital world.
            </p>
         <div className="flex flex-wrap justify-center gap-4 md:mr-70">
            <button aria-label="Get Started with Rezukah" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white text-sm font-semibold transition duration-300"> Get Started </button>
            <button aria-label="Explore Rezukah Services" className="bg-transparent border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full text-white text-sm font-semibold transition duration-300"> Explore Our Services</button></div>
        </div>
        <div className='py-10 px-4 md:px-12'>
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Why Choose Rezukah?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" >
                {
                    chooses.map((choose,index)=>(

                        <div key={index} className="flex flex-col items-center space-x-4 bg-gray-50 p-4 rounded-2xl shadow hover:shadow-md transition duration-300" >
                        <div className="text-7xl text-center">{choose.icons}</div>
                        <div>
                        <h3 className="text-lg font-semibold text-gray-800 mt-12">{choose.title}</h3>
                        </div>
                        </div>

                    ))
                }
            </div>
        </div>
    </div>

      
      
    
  )
}
