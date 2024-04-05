
type HeroCardProps = {
    icon: string;
    title: string;
    description: string;
}

function HeroCard({icon,title,description}: HeroCardProps) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 flex p-3">
        <div className="flex gap-6 px-8 py-3 rounded-xl shadow hover:shadow-md transition-shadow duration-300 border w-full">
            <div className="flex items-center justify-center w-12 aspect-square h-12 rounded-full bg-[#f0efe9] p-3">
                <img src={icon} alt="" className=" object-contain"/>
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="font-bold text-base">{title}</h3>
                <p className="font-normal text-base">{description}</p>
            </div>
        </div>
    </div>
  )
}

export default HeroCard