import DataImage from "./data.js";
import { listTools, listProyek } from "./data.js"

function App() {
  return (
    <>
      {/* hero section */}
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-4 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Heroimage" className="w-7 rounded-md" loading="lazy" />
            <q>Full Stack Web Developer.🖥️</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6 ">Hi, I am ADZKA</h1>
          <p className="text-base/loose mb-6 opacity-50">my name is Muhammad Adzkarulah. I'm currently studying IT and full stack development at KODEIN school and in 10th grade of high school.
            I'm passionate about creating modern web experiences and learning new technologies.</p>
          <div>
            <a href="#projects" className="bg-violet-700 p-3 rounded-2xl hover:bg-violet-500 transition-colors duration-300">
              See Projects
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Heroimage" className="w-[400px] md:ml-auto" loading="lazy" />
      </div>

      {/* about section */}
      <div id="about" className="about mt-32 py-10" >
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
          <p className="text-xl font-bold">Who Am I ?</p>
          <br />
          <p className="text-base/loose mb-10 ">
            My name is Muhammad Adzkarulah. I'm currently studying IT and full-stack development at KODEIN school and in 10th year of high school. I'm actively developing my skills in HTML, CSS, JavaScript, and other modern web technologies. I also enjoy designing interfaces for websites and aspire to become a professional programmer.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-violet-700 hover:bg-violet-500 p-2 rounded-md">UI/UX Design</button>
            <button className="bg-violet-700 hover:bg-violet-500 p-2 rounded-md">WEB Development</button>
            <button className="bg-violet-700 hover:bg-violet-500 p-2 rounded-md">Photography</button>
          </div>
        </div>
      {/* tools section */}
        <div className="tools mt-32" >
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tools used</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000">
            Here are some tools that I usually use to create websites or designs.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map(tool => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}  data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                <img src={tool.gambar} alt="tools image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}


          </div>
        </div>
      </div>
      {/* Projects */}
      <div id="projects" className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Projects</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="2000">
          What Projects Do I Have
        </p>
        <div className="proyekbox mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 " data-aos="fade-up" data-aos-duration="3000" >
          {listProyek.map(proyek => (
            <div className="p-4 bg-zinc-800 rounded-md" key={proyek.id}>
              <img src={proyek.gambar} alt="proyekimage" loading="lazy"/>
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-600 rounded-md font-semibold bg-zinc-500" key={index}>{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a className="bg-violet-700 p-3 rounded-md block border border-zinc-600 hover:bg-violet-500" href={proyek.link} target="_blank" rel="noopener noreferrer">
                    See Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="contact mt-32 sm:p-10 p-0">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Contact</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000">
          Contact Me.
        </p>
        <form action="https://formsubmit.co/muhammadadzkarullah@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input type="text" name="fullName" placeholder="Enter your full name.." required className="border border-zinc-500 p-2 rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Enter your email.." required className="border border-zinc-500 p-2 rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold">Message</label>
              <textarea name="message" id="message" cols="45" rows="7" placeholder="Enter your message.." required className="border border-zinc-500 p-2 rounded-md"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-500">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
