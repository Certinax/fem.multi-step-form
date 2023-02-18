import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import StepContainer from "./StepContainer";

const AddOns = () => {
  // This should come through as prop or accessed through shared state.
  // Temp solution for component functionality
  const [addons, setAddons] = useState({
    onlineService: false,
    largerStorage: false,
    customizableTheme: false,
  });

  // Only used to track local state
  useEffect(() => {
    console.log("Currently selected addons: ", addons);
  }, [addons]);

  return (
    <StepContainer>
      <h3 className="text-2xl font-bold text-fem-marine-blue">Pick add-ons</h3>
      <p className="py-2 text-fem-cool-gray">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="space-y-3 py-2">
        <Checkbox
          title="Online service"
          subtitle="Access to multiplayer games"
          price="+$1/mo"
          toggleHandler={(onlineService) => {
            setAddons({ ...addons, onlineService });
          }}
        />
        <Checkbox
          title="Larger storage"
          subtitle="Extra 1TB of cloud save"
          price="+$2/mo"
          toggleHandler={(largerStorage) => {
            setAddons({ ...addons, largerStorage });
          }}
        />
        <Checkbox
          title="Customizable profile"
          subtitle="Custom theme on your profile"
          price="+$2/mo"
          toggleHandler={(customizableTheme) => {
            setAddons({ ...addons, customizableTheme });
          }}
        />
      </div>
    </StepContainer>
  );
};
export default AddOns;
