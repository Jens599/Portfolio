import Skill from './Skill'
import { Skill_List } from '../_data/skillsData'

function Skills() {
  return (
    <section className="">
      <div className="min-h-screen flex gap-2 flex-col justify-center items-center">
        <div className="container bg-zinc-600 rounded-xl min-h-[calc(100vh-64px)] w-[calc(100vw-64px)] flex flex-col items-center ">
          <div className="text-center my-8 border-b-2 w-2/3  text-5xl uppercase font-['Quantum_Lemon_Bold',system-ui]">
            Skills
          </div>
          <div className="size-full grid md:grid-cols-2">
            {Skill_List.map((skill) => (
              <div className="bg-zinc-800  overflow-hidden mx-8 my-6 rounded-lg shadow-solid shadow-zinc-400          ">
                <Skill name={skill.name} icon={skill.icon} desc={skill.desc} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
