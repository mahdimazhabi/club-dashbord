import { TiktokIcon } from "@/assets";

interface Step {
  id: number;
  title: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <div className="flex flex-col w-full">
      {steps.map((step, index) => {
        const isActive = currentStep === step.id;
        const isCompleted = currentStep > step.id;

        return (
          <div key={step.id} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              {/* circle */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center
                  ${
                    isCompleted
                      ? "bg-main"
                      : isActive
                        ? "border-2 border-emerald-500 bg-white"
                        : "border border-gray-300 bg-white"
                  }`}
              >
                {isCompleted ? (
                  <TiktokIcon className="w-6 h-6 text-white" />
                ) : (
                  <span
                    className={`text-xs font-semibold ${
                      isActive ? "text-emerald-500" : "text-gray-400"
                    }`}
                  >
                    {step.id}
                  </span>
                )}
              </div>

              {/* dashed line */}
              {index !== steps.length - 1 && (
                <div
                  className={`w-px h-5 mt-1 border-l-2 border-dashed ${
                    isCompleted ? "border-emerald-500" : "border-gray-300"
                  }`}
                />
              )}
            </div>

            {/* title */}
            <span
              className={`pt-1 text-sm ${
                isActive || isCompleted
                  ? "text-emerald-600 font-semibold"
                  : "text-gray-400"
              }`}
            >
              {step.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
