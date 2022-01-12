const Button = ({ children, className = '', ...props }) => (
  <button className={`btn ${className}`.trim()} {...props}>
    {children}
  </button>
)

export default Button