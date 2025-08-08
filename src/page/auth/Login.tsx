
const Login = () => {
  return (
    <form>
      <h1 className="text-green-800 underline font-bold">خوش آمدید</h1>
      <div className=" relative z-10">
        <input
          type="text"
          id="floating-outline"
          className="peer block appearance-none px-0 py-2.5 text-xs text-black  border focus:border-spidar1 focus:outline-none focus:ring-0 "
          placeholder=" "
        />
        <label
          htmlFor="floating-outline"
          className="mb-2 block text-sm font-medium text-spidar1  absolute  duration-300 transform -translate-6  scale-75 top-3 -z-10 order-[0] peer-focus:start-0 peer-focus:text-spidar2  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-6  "
        >
          وردود
        </label>
      </div>
     
    </form>
  );
};

export default Login;
