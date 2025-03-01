function Button({ backgroundImg, text, handleOnclick }) {
  return (
    <div onClick={handleOnclick} className=" relative flex justify-center items-center cursor-pointer">
      <img src={backgroundImg} alt="Button" />
      <div className="absolute text-white font-bold text-2xl">{text}</div>
    </div>
  );
}

export default Button;