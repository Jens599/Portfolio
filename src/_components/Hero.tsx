import prof from '../assets/Profile.svg'

export const Hero = () => {
  return (
    <section className="h-screen flex flex-col gap-4 justify-center items-center pointer-events-none">
      <div className="size-80 bg-zinc-700 rounded-full flex justify-center items-end overflow-hidden shadow-md shadow-zinc-500">
        <img src={prof} alt="" className="w-4/5 object-cover translate-y-20" />
      </div>
      <div className="bg-zinc-600 px-20 py-12 rounded-lg leading-10 shadow-solid shadow-zinc-500 border border-zinc-400/40">
        <h1 className="text-5xl font-bold text-zinc-400">
          Hello! I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-nowrap">
            Jenish Shrestha
          </span>
          <div className="animate-blink inline font-thin w-fit">I</div>
        </h1>
        <h2 className="text-center text-zinc-300">
          Web and Graphics Designer.
        </h2>
      </div>
    </section>
  )
}
