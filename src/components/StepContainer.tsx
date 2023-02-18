import { PropsWithChildren } from "react";

const StepContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-4 -translate-y-8 rounded-lg bg-fem-white py-6 px-4 pb-2 shadow-lg xs:-translate-y-16">
      {children}
    </div>
  );
};
export default StepContainer;
