
const SideMenu = () => {
    return (
        <div className=" flex flex-col relative w-2/6 md:w-1/6  pt-8 pl-6 item-center  mt-28">
            <div>
                <img src="/steamcards.png" alt="SteamCards" className=" w-36  object-contain item-center"/>
                <h2 className="text-lg font-semibold text-[#68B7E8]">STEAM GIFT CARDS</h2>
                <h3 className="text-base font-semibold text-[#67707B]">Give the Gift of Game</h3>
            </div>

            <div className="flex flex-col mt-6">
                <h2 className="text-lg font-semibold text-[#516F87] leading-tight">YOUR TAGS</h2>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">Battle Royale</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">eSporsts</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">FPS</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">Tactical</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">Shooter</h3>
            </div>
            <div className="flex flex-col mt-6">
                <h2 className="text-lg font-semibold text-[#516F87] leading-tight" >RECOMMENDED</h2>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight" >By Friends</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight" >By Curators</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight" >Tags</h3>
            </div>
            <div className="flex flex-col mt-6">
            <h2 className="text-lg font-semibold text-[#516F87] leading-tight">BROWSE CATEGORIES</h2>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">Top Sellers</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">New Releases</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">Up Coming</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">Specials</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">VR Titles</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">Contoller-Friendly</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">Great on Desk</h3>
            </div>
            <div className="flex flex-col mt-6">
                <h2 className="text-lg font-semibold text-[#516F87] leading-tight">BROWSE BY GENRE</h2>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">Free to Play</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">Early Access</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">Action</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">Adventure</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">Casual</h3>
                <h3 className="text-base font-semibold text-[#67707B] leading-tight">Indie</h3>
            </div>
        </div>
    )
}

export default SideMenu