/* eslint-disable react/prop-types */
export const Button = ({ disabled, onClick, children, className }) => {
  
  return (
    <button type="submit" disabled={disabled} onClick={onClick} className={className}>
      {children}
    </button>
  );
};
