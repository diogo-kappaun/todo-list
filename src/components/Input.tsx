const Input: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ ...rest }) => {
  return (
    <input
      {...rest}
      className="w-full rounded-lg bg-base-gray-500 p-4 placeholder-base-gray-300 outline-none focus-within:ring-1 focus-within:ring-product-purple-dark"
    />
  )
}

export default Input
