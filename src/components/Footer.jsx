import { resourcesLinks, platformLinks, communityLinks } from "../constants"
import Logo from '../assets/logo.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Dicord from '../assets/discord.png'

const Footer = () => {
  return (
   <footer className="mt-20 border-t py-10 border-neutral-700">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ml-14">
        <div>
            <h3 className="text-md font-semibold mb-4 ">Resources</h3>
            <ul className="space-y-2">
                {resourcesLinks.map((link, index) => (
                    <li key={index}>
                        <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="text-md font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
                {platformLinks.map((link, index) => (
                    <li key={index}>
                        <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
                {communityLinks.map((link, index) => (
                    <li key={index}>
                        <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
        <div className="flex items-center flex-shrink-0">
                <img className="h-10 w-10 mr-2" src={Logo} alt="MEME_Generate" />
                <span className='text-xl tracking-tight'>MEME_Generate</span>
            </div>
            <div className="flex items-center flex-shrink-0 mt-5">
                <img className="h-7 w-7 mr-2" src={Facebook} alt="MEME_Generate" />
                <span className='text-xl tracking-tight ml-8'>Face Book</span>
            </div>
            <div className="flex items-center flex-shrink-0 mt-5">
                <img className="h-7 w-7 mr-2" src={Instagram} alt="MEME_Generate" />
                <span className='text-xl tracking-tight ml-8'>Instagram</span>
            </div>
            <div className="flex items-center flex-shrink-0 mt-5">
                <img className="h-7 w-7 mr-2" src={Dicord} alt="MEME_Generate" />
                <span className='text-xl tracking-tight ml-8'>Dicord</span>
            </div>
        </div>
    </div>
   </footer>
  )
}

export default Footer
