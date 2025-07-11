const HeaderMission = () => {
  // You can add loading state if needed, similar to HeaderProfile
  return (
    <header className="w-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-b-3xl pb-5 shadow">
      {/* Top Section */}
      <div className="flex items-center justify-between px-5 pt-6">
        <div className="flex items-center gap-4">
          {/* No avatar for mission header, but keep spacing for consistency */}
          <div className="h-14 w-14" />
          <div className="text-white">
            <p className="font-semibold text-base">ماموریت 0ها</p>
            <p className="text-sm text-white/90">
              ماموریت ها را کامل کنید تا امتیاز بگیرید
            </p>
          </div>
        </div>
      </div>
      {/* No points & membership section for mission header */}
    </header>
  );
};

export default HeaderMission;
