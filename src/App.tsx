import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AllRouters } from "./routers/routers";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { useEffect } from "react";
import useSetting from "./services/useSetting";

const App = () => {
  const router = createBrowserRouter(AllRouters);
  const { setting } = useSetting();
  console.log(setting?.data?.options.maintenance);

  useEffect(() => {
    if (setting.data) {
      document.documentElement.style.setProperty(
        "--color-main",
        setting.data.options.maintenance.overlayColor,
      );
    }
  }, [setting.data]);
  return (
    <TooltipProvider delayDuration={0}>
      <RouterProvider router={router} />
    </TooltipProvider>
  );
};

export default App;
