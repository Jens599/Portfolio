type SkillProps = {
  name: string
  icon: string
  desc: string
}

const Skill = ({ name, icon, desc }: SkillProps) => {
  return (
    <>
      <div className="grid grid-cols-2 size-full min-h-36">
        <div className="flex bg-zinc-700 border-r-2 border-zinc-950 justify-center items-center">
          <img src={icon} alt={name} className="drop-shadow-demo" />
        </div>
        <div className="flex flex-col justify-around items-center">
          <div className="text-center uppercase font-bold font-['Quantum_Lemon_Bold'] border-b w-3/4">
            {name}
          </div>
          <div className="text-center w-4/5">{desc}</div>
        </div>
      </div>
    </>
  )
}

export default Skill
