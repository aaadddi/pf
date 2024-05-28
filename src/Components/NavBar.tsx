import { Link } from 'react-router-dom'

function NavBar() {
    const navButtons: String[] = ["About","Projects"]
  return (
    <div className="flex justify-between pl-2">
        <div className='flex-1'></div>
        {/* <div className="text-2xl pr-4 pl-4 mx-2 my-2 rounded border hidden border-white py-2 cursor-pointer font-thin lg:block">
            &lt;name value=<i className='text-purple-600 font-medium'>"Aditya Kashyap"</i>/&gt;
            </div>
            <div className="text-xl pr-4 pl-4 mx-2 my-2 rounded border border-white py-2 cursor-pointer font-thin lg:hidden">
            &lt;<i className='text-purple-600 font-normal'>Aditya Kashyap</i>/&gt;
            </div> */}
        <div className='flex p-3 align-middle'>
            {
                navButtons.map((btn) => {
                    // return <button key={btn} className='ml-2 mr-2 rounded bg-white font-thin hover:font-normal hover:bg-purple-600 hover:text-white'><Link className = "pl-2 pr-3" key={`${btn}`} to= {`/${btn}`}>&lt;{btn}/&gt;</Link></button>
                    return <button key={btn} className='ml-2 mr-2 rounded bg-white font-thin hover:bg-purple-600 hover:text-white px-4 py-2'><Link className = "pl-2 pr-3" key={`${btn}`} to= {`/${btn}`}>{btn}</Link></button>
                })
            }
            {/* <button className='ml-2 mr-2 pl-2 pr-2 rounded text-white bg-purple-600 font-light'><Link to= '/contact'>Contact</Link></button> */}
        </div>
    </div>

  )
}

export default NavBar