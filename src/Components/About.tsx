function About() {
  return (
    <div className="h-1/2 pl-5 pr-5 flex">
        <div className="left flex-1">
        <br />
        <br />
        <h2 className="text-s">Hi! mate, My name is</h2>
        <h1 className="text-2xl text-bold">Aditya Kashyap</h1>
        <h1 className="text-3xl ml-2 pt-2 font-serif text-purple-600 antialiased">Software Engineer</h1>
        <h1 className="text-3xl "><i>transforming a idea to reality</i></h1>
        <br />

        <button className="text-2xl border rounded-lg pl-10 pr-10 pt-2 pb-2 bg-purple-600 text-white">
            Collaborate 
            </button>
        </div> 
        <div className="right border"><script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.28/build/spline-viewer.js"></script>
            <spline-viewer url="https://prod.spline.design/W5eWtycU7e7gy65g/scene.splinecode"></spline-viewer></div>
    </div>
  )
}

export default About