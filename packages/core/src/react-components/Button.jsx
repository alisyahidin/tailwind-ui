const Button = ({ children, className = '', ...props }) => (
  <button className="btn" {...props}>
    {children}
  </button>
)

export default Button