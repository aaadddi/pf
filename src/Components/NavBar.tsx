import { Link } from 'react-router-dom'

function NavBar() {
    const navButtons: String[] = ["About","Projects"]
  return (
    <div className="flex justify-between pl-2">
        <div className="text-2xl pr-4 pl-4 mx-2 my-2 rounded text-purple-600 border border-white py-2 cursor-pointer">
            &lt;AK/&gt;
            </div>
        <div className='flex p-3 align-middle'>
            {
                navButtons.map((btn: String) => {
                    return <button className='ml-2 mr-2 rounded bg-white hover:bg-purple-600 hover:text-white'><Link className = "pl-2 pr-3" key={`${btn}`} to= {`/${btn}`}>{btn}</Link></button>
                })
            }
            <button className='ml-2 mr-2 pl-2 pr-2 rounded text-white bg-purple-600 font-light'><Link to= '/contact'>Contact</Link></button>
        </div>
    </div>

  )
}

export default NavBar