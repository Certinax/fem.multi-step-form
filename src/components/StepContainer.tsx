import { PropsWithChildren } from "react";

const StepContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-4 flex -translate-y-16 flex-col rounded-lg bg-fem-white py-6 px-4 pb-2 shadow-lg">
      {children}
    </div>
  );
};
export default StepContainer;
