
type LogoProps = {
    hasText?: boolean;
    className: string;
}

function Logo({hasText = false,className}:LogoProps) {
  return (
    <a href="/home" className="">
      <img src={hasText ? "/images/logo/logo-with-text.png" : '/images/logo/logo.png'} className={className} alt="logo" />
    </a>
  )
}

export default Logo