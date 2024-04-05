import navlinks from '../../data/navlinks.json'
import Button from '../common/Button';
import Logo from '../common/Logo';

type SidebarProps = {
    showSidebar:boolean;
    closeHandler:() => void;
}

function Sidebar({showSidebar, closeHandler}:SidebarProps) {
    
    const linkHandler = (link:string) => {
        // navigate to "/{link}"
        // close the sidebar
        closeHandler();
    }


  return (
    <div className={`${showSidebar ? "w-11/12" : "w-0"} max-w-sm bg-red-100`}>
        <div className={`w-full max-w-sm fixed top-0 left-0  h-screen bg-white border-r border-gray-300 z-50`}>
            <div className="flex justify-end p-4">
                <button onClick={closeHandler} className="text-lg font-bold">
                    <i className="fa-solid fa-xmark text-accent-2"/>
                </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <div className=''>
                    <Logo className='w-8'/>
                </div>
                <div className='w-full h-[1px] bg-gray-300 mt-3 mb-8'/>
                {/* Login signup buttons */}
                <div className='flex items-center justify-center gap-4'>
                    <Button text='log in' secondary />
                    <Button text='sign up' primary />
                </div>
                {
                    navlinks.map((link) => (
                        <div key={link.id} className="text-accent-1 capitalize px-5 py-2 rounded-full font-semibold text-lg hover:bg-accent-3" 
                        onClick={() => linkHandler(link.link)}>{link.text}</div>
                    ))
                }
            </div>
            <div>
                <div className="flex justify-center gap-4 mt-8">
                    <a href="#" className="text-accent-1">
                        <i className="fab fa-facebook-f"/>
                    </a>
                    <a href="#" className="text-accent-1">
                        <i className="fab fa-twitter"/>
                    </a>
                    <a href="#" className="text-accent-1">
                        <i className="fab fa-instagram"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar