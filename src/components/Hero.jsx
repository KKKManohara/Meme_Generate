import Hero from '../assets/hero.jpg'
const hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-10">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Create more 
        <span className="bg-gradient-to-r from-[#D42680] to-[#3D3BC9] text-transparent bg-clip-text font-bold">
            {" "}
            MEME
        </span>
        {" "}
        in less time!
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Create and share memes instantly with MemeMaster! Choose from templates or upload your own images.
        Perfect for beginners and pros. Start creating and join the meme revolution!
        <footer className="mt-10 border-t  border-neutral-700"></footer>
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-[#D42680] to-[#3D3BC9] py-3 px-10 mx-3 rounded-md">
                Connect Wallet
            </a>
            <a href="#" className="py-3 px-10 rounded-md border">
                Documentation
            </a>
        </div>
        <div className="flex mt-10 justify-center bg-gradient-to-r from-[#D42680] to-[#3D3BC9]">
          <img className=" w-1.2 mx-2 my-4"
           src={Hero} alt="MEME_Generate" />
        </div>
    </div>
  )
}

export default hero
