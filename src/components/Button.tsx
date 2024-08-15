import React from 'react'
import { tv } from 'tailwind-variants'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'primary' | 'secondary'
}

const Button = ({ variant = 'primary', ...rest }: ButtonProps) => {
  const button = tv({
    base: [
      'flex items-center gap-2 p-4 rounded-lg font-bold transition-colors',
    ],

    variants: {
      variant: {
        primary: 'bg-product-blue-dark hover:bg-product-blue-normal',
        secondary:
          'text-gray-300 hover:text-feedback-danger hover:bg-base-gray-400 p-2',
      },
    },
  })

  return (
    <button {...rest} className={button({ variant })}>
      {rest.children}
    </button>
  )
}

export default Button
