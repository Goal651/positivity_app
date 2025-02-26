import { Link } from "react-router-dom"
export default function Header() {

    return (
        <div className="flex bg-white text-black p-5 justify-between px-20 text-xl font-bold items-center">
            <div>
                <img
                    src="/logo.png"
                    alt=""
                    className="w-full h-full "
                />
            </div>
            <div className="flex gap-x-20 *:hover:cursor-pointer">
                <Link to={'/'}>Home</Link>
                <Link to={'/aboutUs'}>About us</Link>
                <Link to={'/services'}>Services</Link>
                <Link to={'/'}>Projects</Link>
                <Link to={'/'}>Contact</Link>
            </div>
            <div>
                <button
                    style={{ backgroundColor: '#C81F00' }}
                    className="btn text-white rounded-4xl border-0 px-10 py-7 text-xl">
                    Get started
                </button>
            </div>
        </div>
    )
}