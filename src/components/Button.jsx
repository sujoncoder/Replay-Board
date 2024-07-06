const Button = (props) => {
  const { className, primary, ...rest } = props;

  return (
    <button
      {...rest}
      className={
        `px-4 py-1.5 border shadow hover:brightness-105 duration-200 rounded-full text-opacity-90 ${
          className || ""
        } ` +
        (primary
          ? " bg-blue-500 text-white active:bg-blue-600"
          : "text-gray-500")
      }
    />
  );
};

export default Button;
