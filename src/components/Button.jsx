const Button = (props) => {
  const { className, primary, secondary, danger, disabled, ...rest } = props;

  let buttonClass =
    "hover:brightness-105 duration-200 rounded-full text-opacity-95 ";

  if (primary) {
    buttonClass +=
      "px-4 py-1.5 shadow  bg-blue-500 text-white active:bg-blue-600 ";
  } else if (secondary) {
    buttonClass +=
      "px-4 py-1.5 shadow  bg-gray-500 text-white active:bg-gray-600 ";
  } else if (danger) {
    buttonClass +=
      "px-4 py-1.5 shadow bg-red-500 text-white active:bg-red-600 ";
  } else {
    buttonClass += "text-gray-500 ";
  }

  if (disabled) {
    buttonClass += "px-4 py-1.5 shadow opacity-40 cursor-not-allowed ";
  }

  return (
    <button
      {...rest}
      disabled={disabled}
      className={`${buttonClass} ${className || ""}`}
    />
  );
};

export default Button;
