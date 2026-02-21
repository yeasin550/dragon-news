import Marquee from 'react-fast-marquee';
const Header = () => {
    return (
        <div>
            <div className="space-y-4 w-6/12 mx-auto text-center my-12">
                <div className="flex justify-center items-center">
                    <img
                        src="/src/assets/logo.png" alt=""
                    />
                </div>
                <h1>Journalism Without Fear or Favour</h1>
                <h1>Sunday, November 27, 2025</h1>
            </div>
            <div className="flex items-center gap-2 mb-12 w-10/12 mx-auto bg-gray-100 rounded-sm p-2">
                <button className="bg-red-600 rounded-sm py-2 px-4 text-white    font-semibold">
                    Latest
                </button>
                <Marquee>
                    Match Highlights: Germany vs Spain — as it happened   !
                    Match Highlights:     Germany vs Spain as...
                    Lorem ipsum dolor sit consectetur
                </Marquee>
            </div>
        </div>
    )
}
export default Header;