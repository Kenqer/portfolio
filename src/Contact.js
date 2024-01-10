const Contact = () => {
    return ( 
        <header>
            <div className="w-full h-full flex flex-col gap-2 justify-center pt-[25vh] px-[10%] z-[1] text-5xl md:text-7xl ">
                <h1 className="font-bold font-serif">Coming Soon...</h1>
                <div className="flex text-2xl md:text-4xl gap-4">
                    <a className="hover:opacity-50 hover:scale-110 duration-300" href="https://www.instagram.com/ken.qer/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a className="hover:opacity-50 hover:scale-110 duration-300" href="https://github.com/Kenqer" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
                    <a className="hover:opacity-50 hover:scale-110 duration-300" href="https://www.youtube.com/channel/UCXG6GuBh1oHQaYM6TQ7-NRw" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a>
                    <a className="hover:opacity-50 hover:scale-110 duration-300" href="https://twitter.com/itisnotken" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
                </div>
            </div>
        </header>
     );
}
 
export default Contact;