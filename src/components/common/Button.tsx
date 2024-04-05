

type ButtonProps = {
    text: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    className?: string
    primary?: boolean
    secondary?: boolean
    children?: React.ReactNode
}

function Button({
    text,
    onClick,
    type = 'button',
    className = '',
    primary = false,
    secondary = false,
    children
}: ButtonProps) {
  return (
    <button
        className={`
            ${primary && 'bg-accent-1 text-white hover:bg-accent-2 hover:text-gray-200'}
            ${secondary && ' text-accent-1 hover:text-accent-2'}
            rounded-full px-8 py-2 capitalize flex items-center justify-center font-semibold text-lg border-2 border-accent-1 hover:border-accent-2 transition duration-300 ease-in-out whitespace-nowrap focus:outline-none
            ${className}
        `}
        onClick={onClick}
        type={type || 'button'}
    >
        {children}
        {text}
    </button>
  )
}

export default Button