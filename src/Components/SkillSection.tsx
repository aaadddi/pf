import React from 'react'
import { skills } from './constants'
function SkillSectionCard (props) {
  const { Category, skills } = props
    return (
        <div className='bg-gray-50 flex-1 rounded-lg py-4 px-4 m-2 min-w-60 shadow-sm border'>
            <h2 className='text-xl text-purple-600'>{Category}</h2>
            <ul className='flex flex-wrap'>
            {
              skills.map((skill: string) => {
                return <li className='px-3 py-1 flex-wrap border text-black border-purple-500 rounded-2xl mx-1 my-2' key={skill}>{skill}</li>
              })
            }
            </ul>
        </div>
    )
}

function SkillSection(){

  return (

    <div className='w-full my-1 flex flex-col rounded min-h-40 p-4 justify-center md:flex-row'>
        {
          skills.map(({Category,skills}) => {
            return <SkillSectionCard Category={Category} skills = {skills} key={Category}/>
          })
        }
    </div>

  )
}

export default SkillSection