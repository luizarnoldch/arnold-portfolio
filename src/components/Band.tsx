
const skillBand = [
  {
    name: "Frontend"
  },
  {
    name: "*"
  },
  {
    name: "Back-end"
  },
  {
    name: "*"
  },
  {
    name: "DataBase"
  },
  {
    name: "*"
  },
]


const Band = () => {
  return (
    <div className="absolute bg-black w-screen band bottom-0 h-32 mb-32 -skew-y-[5deg] left-0">
      <div className="w-full h-full relative p-16 overflow-hidden">
        <div className="flex justify-around animate absolute left-0">
          <ul className="flex w-full justify-around gap-5"> 
            {
              skillBand.map(skill => (
                <li className="text-white flex">
                  {
                    (skill.name === "*") ? 
                    <span className='text-[#E94E35] text-3xl'>*</span> :
                    <h3>{skill.name}</h3>
                  }
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Band