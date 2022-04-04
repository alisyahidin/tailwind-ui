import React from "react";

const RulesList = () => {
  return (
    <div className="rules">
      <h1 className="text-d1 mb-8"> Rules Styling Core Package</h1>
      <div className="flex mb-32">
        <div className="flex gap-x-4">
          <img
            className="max-w-lg"
            src={"../../assets/organise-css-properties.png"}
          />
          <img
            className="max-w-lg"
            src={"../../assets/organise-css-writing.png"}
          />
        </div>
      </div>

      <h1 className="text-d1 mb-8"> Rules React Package</h1>
      <div className="flex mb-32">
        <ul>
          <li>Every component must create in folder</li>
          <li>Value props Type size using "sm" , "md", "lg", ect</li>
        </ul>
      </div>

      <h1 className="text-d1 mb-8"> Step by step Create Component</h1>
      <div className="flex mb-32">
        <ul>
          <li>Create New Branch with Component name clone from Master</li>
          <li>
            Create style component in folder
            master-ui-tailwind/packages/core/src/components
          </li>
          <li>
            Create react component in folder
            master-ui-tailwind/packages/react/src
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RulesList;
