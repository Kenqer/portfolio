import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-white w-full static h-10">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between mb-0">
                <span className="text-sm text-gray-500 sm:text-center ">© 2023 <Link to="/" className="hover:underline">Legoin</Link> | All Rights Reserved.
                </span>
                <span className="text-sm text-gray-500 flex items-center gap-3 font-semibold">
                    Powered by
                    <i className="fa-brands fa-react text-3xl text-blue-400"></i>
                    <i><svg className='w-[35px] h-[35px] fill-blue-400' height="24" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"/></svg></i>
                </span>
            </div>
        </footer>

    );
}

export default Footer;