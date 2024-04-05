import Button from "../common/Button"


function BottomCTA() {
  return (
    <div className="bg-accent-5 rounded-sm lg:w-8/12 sm:w-10/12 w-11/12 max-w-screen-xl mx-auto mb-36">
      <div className="
      flex justify-between items-center md:flex-row flex-col
      gap-5 py-6 lg:px-20 md:px-11 
      text-center md:text-left">
        <div className="flex flex-col w-full">
          <h3 className="text-xl pb-3">How are we doing?</h3>
          <p className="">Help improve the <span className="font-bold">PayPal Help Center experience</span></p>
          <p className="">with some quick feedback</p>
        </div>
        <Button text="Take the survey" className="font-normal" primary/>
      </div>
      
    </div>
  )
}

export default BottomCTA