import MainNav from "./MainNav"
import Slider from "./Slider"
const Main = () => {
    return (
        <div className="flex flex-col w-[65vw]  h-full mr-4 mt-28">
            <div className="flex justify-end w-full item-center my-1">
            <button className="p-[3px] px-6 text-center text-[16px] bg-[#6F98A3] ">Watchlist</button>
            </div>
            <MainNav/>
            <div className="flex flex-col pt-10">
                <h2 className="text-lg font-semibold text-white leading-tight">FEATURED & RECOMMENDED</h2>
                <div>
                    <Slider/>
                </div>
            </div>
            <div className="flex flex-col mt-20">
                <img src="/towerdefence.png" alt="Steam Game" className="w-full h-40 object-cover"/>
            </div>
        </div>
    )
}

export default Main