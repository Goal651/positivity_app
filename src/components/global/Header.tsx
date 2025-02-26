import { Link } from "react-router-dom"
export default function Header({ pageNumber }: { pageNumber: number }) {

    return (
        <div className="flex bg-white text-black p-5 justify-between px-20 text-xl  items-center">
            <div>
                <img
                    src="/logo.png"
                    alt=""
                    className="w-full h-full "
                />
            </div>
            <div className="flex gap-x-20 *:hover:cursor-pointer">
                <Link className={`${pageNumber === 1 && ('font-bold')} link link-hover`} to={'/'}>Home</Link>
                <Link className={`${pageNumber === 2 && ('font-bold')} link link-hover`} to={'/aboutUs'}>About us</Link>
                <Link className={`${pageNumber === 3 && ('font-bold')} link link-hover`} to={'/services'}>Services</Link>
                <Link className={`${pageNumber === 4 && ('font-bold')} link link-hover`} to={'/projects'}>Projects</Link>
                <Link className={`${pageNumber === 5 && ('font-bold')} link link-hover`} to={'/'}>Contact</Link>
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