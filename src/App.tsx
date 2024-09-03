// import reactLogo from "./assets/react.svg";
import bgSidebarMobile from "./assets/bg-sidebar-mobile.svg";
import StepPersonalInfo from "./components/StepPersonalInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-500">
      <div className="flex h-screen max-w-[375px] flex-col justify-between bg-fem-magnolia md:h-auto">
        <div className="">
          {/* sidebar/topbar */}
          <div className="relative">
            <img
              className="w-full"
              src={bgSidebarMobile}
              alt="Illustration motive"
            />
            <div className="absolute inset-0 top-8 flex justify-center space-x-3">
              <StepIndicator step={1} isActive={step === 1} />
              <StepIndicator step={2} isActive={step === 2} />
              <StepIndicator step={3} isActive={step === 3} />
              <StepIndicator step={4} isActive={step === 4} />
            </div>
          </div>

          {step === 1 && <StepPersonalInfo />}
          {step === 2 && <SelectPlan />}
          {step === 3 && <AddOns />}
          {step === 4 && (
            <div>
              <p className="text-red-400">Not implemented yet</p>
            </div>
          )}
        </div>
        <div className="flex justify-between bg-fem-white">
          <button
            className="my-4 ml-2 px-4 py-2 text-left font-medium text-fem-cool-gray"
            onClick={() => {
              if (step > 1) {
                setStep(step - 1);
              }
            }}
          >
            Go Back
          </button>
          <button
            className="m-4 rounded-md bg-fem-marine-blue px-4 py-2 font-medium text-fem-alabaster"
            onClick={() => {
              if (step < 4) {
                setStep(step + 1);
              }
            }}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

function StepIndicator({
  step,
  isActive,
}: {
  step: number;
  isActive: boolean;
}) {
  return (
    <span
      className={`flex h-8 w-8 items-center justify-center rounded-full border border-white ${
        isActive ? "bg-fem-light-blue text-fem-marine-blue" : "text-fem-white"
      }`}
    >
      {step}
    </span>
  );
}

export default App;
