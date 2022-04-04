import React from "react";
import { Button } from "@alisyahidin/react";

const ButtonList = () => {
  return (
    <div>
      <h1 className="text-d1 mb-8"> Variant </h1>
      <div className="flex mb-32">
        <div className="mr-4">
          <Button variant="primary">Primary</Button>
        </div>
        <div className="mr-4">
          <Button variant="secondary">Secondary</Button>
        </div>
        <div className="mr-4">
          <Button variant="alt">Alternative</Button>
        </div>
      </div>

      <h1 className="text-d1 mb-8"> Size </h1>
      <div className="flex mb-32">
        <div className="mr-4">
          <Button variant="primary" size="sm">
            small
          </Button>
        </div>
        <div className="mr-4">
          <Button variant="primary" size="md">
            Medium
          </Button>
        </div>
        <div className="mr-4">
          <Button variant="primary" size="lg">
            Large
          </Button>
        </div>
      </div>

      <h1 className="text-d1 mb-8">Others </h1>
      <div className="flex mb-32">
        <div className="mr-4">
          <button className="btn bg-primary-50">Primary 50</button>
        </div>
        <div className="mr-4">
          <Button className="bg-secondary">Override</Button>
        </div>
        <div className="mr-4">
          <Button data-theme="newtheme" variant="secondary">
            Secondary
          </Button>
        </div>
        <div className="mr-4">
          <button className="btn">Overide CSS</button>
        </div>
        <div className="mr-4">
          <button className="btn btn-secondary">Opacity CSS</button>
        </div>
      </div>
    </div>
  );
};

export default ButtonList;
