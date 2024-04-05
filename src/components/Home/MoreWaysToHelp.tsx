
const data = [
  {
    id: "more-ways-1",
    icon: "fa-solid fa-user-group",
    title: "Community Forum",
    description: "Find answers or join the conversation"
  },
  {
    id: "more-ways-2",
    icon: "fa-solid fa-handshake-simple",
    title: "Resolution Center",
    description: "Resolve transaction or account issues"
  },
  {
    id: "more-ways-3",
    icon: "fa-solid fa-circle-question",
    title: "Contact us",
    description: "Contact Customer Service"
  }
]

function MoreWaysToHelp() {
  return (
    <div className="lg:w-8/12 sm:w-10/12 w-11/12 max-w-screen-xl mx-auto p-16">
      <h3 className="text-center font-light text-gray-900 text-3xl mb-10">More ways to get help</h3>


      <div className="flex flex-wrap w-full items-stretch px-5">
        {
          data.map(({id, icon, title, description}) => (
            <div className="w-full sm:w-1/2 lg:w-1/3 flex p-3" key={id}>
              <div className="flex flex-col items-center px-8 py-3 w-full gap-3 hover:bg-accent-5 rounded-lg select-none">
                <i className={`${icon} text-gray-800 w-20 text-center text-4xl`}/>
                <h4 className="text-center text-accent-2 font-bold text-xl">{title}</h4>
                <p className="text-center font-semibold text-gray-700">{description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MoreWaysToHelp