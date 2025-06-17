const CardBunk = () => {
  return (
    <div className="bg-gradient-to-r from-[#FEB37B] to-[#FF8062] px-5 py-7 rounded-2xl backdrop-blur-lg bg-opacity-80 border border-white/20 shadow-lg">
      <div>
        <span className="text-white">بانک ملت</span>
        <p className="text-left text-white text-lg"> 8073 6819 3389 6104 </p>
        <div className="flex justify-between">
          <span className="text-white mt-3 text-xs">1370/01/01</span>
          <span className="text-white mt-3 text-xs">CVV2 : 123</span>
        </div>
        <p className="text-white text-xs mt-3">مهدی مذهبی</p>
      </div>
    </div>
  );
};

export default CardBunk;
