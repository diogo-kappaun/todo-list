import { Check } from '@phosphor-icons/react'

const Checkbox: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ checked, onChange, ...rest }) => {
  return (
    <label className="flex cursor-pointer items-center">
      <input
        {...rest}
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />

      <span className="border-product-blue-normal hover:border-product-blue-dark peer-checked:bg-product-purple-dark peer-checked:border-product-purple-dark peer-checked:hover:bg-product-purple-normal peer-checked:hover:border-product-purple-normal grid h-5 w-5 place-items-center rounded-full border-2 transition-colors">
        <Check
          size={12}
          weight="bold"
          className={checked ? 'block' : 'hidden'}
        />
      </span>
    </label>
  )
}

export default Checkbox
