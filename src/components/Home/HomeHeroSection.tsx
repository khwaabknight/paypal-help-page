import AlertCard from "./AlertCard"
import data from "../../data/herocardData.json";
import HeroCard from "./HeroCard";

function HomeHeroSection() {
  return (
    <div className="flex flex-col items-center max-w-screen-lg sm:w-9/12 mx-auto">
      <div className="w-full text-left py-3">
        <h2 className="text-accent-2 text-sm font-semibold">Help Center</h2>
      </div>

      <div className="flex flex-col items-center w-full gap-5">
        <p className="font-semibold text-2xl">How can we help?</p>
        <div className="relative sm:w-1/2 w-11/12 max-w-screen-sm mb-2">
          <input type="text" placeholder="Search by keyword" className="rounded-full border border-gray-700 pl-14 py-4 focus:outline-none w-full placeholder:text-gray-500"/>
          <i className="fa-solid fa-magnifying-glass text-gray-500 absolute left-5 bottom-1/2 translate-y-1/2"/>
        </div>

        <AlertCard>
          Received a suspicious email, fake invoice, or message? Don’t reply, open links, download attachments, or call any listed phone numbers. We’ll never ask for your PayPal password or financial details by email or message, or over the phone. Forward suspicious messages to <span className=" text-accent-2 font-semibold">phishing@paypal.com</span> and then delete them.
        </AlertCard>

        <div className="flex flex-wrap w-full items-stretch px-5 mx-5">
          {
            data.map(({id,icon,title,description}) => (
              <HeroCard key={id} icon={icon} title={title} description={description}/>
            ))
          }
        </div>
      </div>


    </div>
  )
}

export default HomeHeroSection