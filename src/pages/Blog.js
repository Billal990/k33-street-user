import aboutBannerImg from "../assets/about-banner.jpg";

export default function Blog() {
  return (
    <main>
        <section className="pb-[7.5rem]">
        <div
          className="text-center bg-cover min-h-[30rem] text-[#FFFFFF]"
          style={{ backgroundImage: `url(${aboutBannerImg})` }}
        >
          <div className="bg-[#00000086] w-full h-[30rem] flex justify-center items-center">
            <div>
              <h3 className="md:text-[3rem] text-[2rem] font-bold leading-[5rem]">Blog</h3>
              <p>Unveiling Our Journey in Investment Empowerment</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
