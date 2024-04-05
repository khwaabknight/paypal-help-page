import links from '../../data/navlinks.json'
import Button from '../common/Button'
import Logo from '../common/Logo'

type NavbarProps = {
  openSideBar:() => void;
}

function Navbar({openSideBar}:NavbarProps) {
  return (
    <div 
      className='w-full border-b border-gray-300'
    >
      <div 
        className='w-11/12 max-w-screen-2xl mx-auto flex justify-between md:px-10 py-6'
      >

        {/* Logo and navlinks */}
        <div className='flex items-center justify-center gap-8'>

          {/* Hamburger menu */}
          <div className='md:hidden flex items-center justify-center'>
            <Button onClick={openSideBar} text='MENU' className='text-accent-1 gap-3'>              
              <i className="fa-solid fa-bars"></i>
            </Button>
          </div>

          {/* Logo */}
          <div className='md:flex hidden'>
            <Logo className='w-8'/>
          </div>

          {/* navlinks */}
          <div className='md:flex hidden items-center justify-center gap-8'>
            {
              links.map((link) => (
                <div key={link.id} className=''>
                  <a  href={link.link} className='text-accent-1 capitalize px-5 py-2 rounded-full font-semibold text-lg hover:bg-accent-3'>{link.text}</a>
                </div>
              ))
            }
          </div>
        </div>

        {/* Login signup buttons */}
        <div className='flex items-center justify-end gap-4'>
          <Button text='log in' secondary />
          <Button text='sign up' primary className='md:flex hidden' />
        </div>
      </div>
        
    </div>
  )
}

export default Navbar