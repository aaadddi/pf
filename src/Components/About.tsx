import SkillSection from "./SkillSection"

function About() {
  // bg-gradient-to-r from-purple-100 to-white
  return (
    <div>

    <div className="py-10 px-5 lg:bg-gradient-r lg:from-gray-50 lg:to-white  shadow-sm rounded-3xl lg:flex lg:flex-row lg:border ">
      <div className="text-center p-4 bg-purple-20 bg-opacity-60 lg:relative flex-1 flex flex-col justify-center">
        <br />
        <br />
        <h1 className="text-2xl ">Hey👋, I am</h1>
        <h1 className="text-5xl font-serif text-purple-300 antialiased">Aditya Kashyap</h1>
        <h1 className="text-3xl font-serif text-purple-300 antialiased"><i>Full Stack Developer</i></h1>
        <h1 className="text-3xl ">Design | Develop | Deploy</h1>

        <br />

        <button className="text-2xl rounded-lg pl-10 pr-10 pt-2 pb-2 mx-auto border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white max-w-80">
          Let's connect
        </button>
      </div>
    </div>
    <SkillSection/>
    </div>
  )
}

export default About