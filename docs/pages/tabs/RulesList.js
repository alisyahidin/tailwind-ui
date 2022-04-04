import React from "react";
import Image from 'next/image'

const RulesList = () => {
  return (
    <div className="rules">
      <h1 className="text-d1 mb-8"> Rules Styling Core Package</h1>
      <div className="flex mb-32">
        <div className="flex gap-x-4">
            <Image
              src={"/assets/organise-css-properties.png"}
              alt="Organise css properties"
              width='600'
              height='600'
              objectFit='contain'/>
            <Image
              src={"/assets/organise-css-writing.png"}
              alt="Organise css writing"
              width='600'
              height='600'
              objectFit='contain'/>
        </div>
      </div>

      <h1 className="text-d1 mb-8"> Rules React Package</h1>
      <div className="flex mb-32">
        <ul>
          <li>Every component must create in folder</li>
          <li>Value props Type size using &quot;sm&quot; , &quot;md&quot;, &quot;lg&quot;, ect</li>
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
