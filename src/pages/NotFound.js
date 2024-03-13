import notfoundImg from "../assets/not-found.png"

export default function NotFound() {
  return (
    <div className="flex flex-col gap-[1rem] items-center justify-center">
        <img src={notfoundImg}/>
        <h3 className="md:text-[3rem] text-[1.5rem] font-bold text-center">Oops! Page Not Found</h3>
        <div className="space-y-[0.5rem] text-[#B1B1B1]">
        <p>The page you’re looking for isn’t found</p>
        <p>We suggest you go back to home</p>
        </div>
        <button className="bg-[#24B24B] px-[2.5rem] py-[0.8rem] mt-[1.5rem]">Reload</button>
    </div>
  )
}
