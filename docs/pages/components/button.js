import Button from "@alisyahidin/react/dist/Button";

const ButtonList = () => {
  return (
    <div>
      <h2 className="text-d1 mb-8">Default</h2>
      <div className="flex flex-col mb-28 flex-wrap">
        <div>
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button disabled>Disabled</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div>
          <button className="btn">Default</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-success">Success</button>
          <button disabled className="btn">Disabled</button>
          <button className="btn btn-ghost">Ghost</button>
        </div>
      </div>
      <h2 className="text-d1 mb-8">Outline</h2>
      <div className="flex flex-col mb-28 flex-wrap">
        <div>
          <Button outline>Default</Button>
          <Button variant="primary" outline>Primary</Button>
          <Button variant="secondary" outline>Secondary</Button>
          <Button variant="success" outline>Success</Button>
          <Button disabled outline>Disabled</Button>
          <Button variant="ghost" outline>Ghost</Button>
        </div>
        <div>
          <button className="btn btn-outline">Default</button>
          <button className="btn btn-outline btn-primary">Primary</button>
          <button className="btn btn-outline btn-secondary">Secondary</button>
          <button className="btn btn-outline btn-success">Success</button>
          <button disabled className="btn btn-outline">Disabled</button>
          <button className="btn btn-outline btn-ghost">Ghost</button>
        </div>
      </div>
      <h2 className="text-d1 mb-8">Custom Theme</h2>
      <div className="flex flex-col mb-28 flex-wrap">
        <div>
          <Button data-theme="newtheme">Default</Button>
          <Button data-theme="newtheme" variant="primary">Primary</Button>
          <Button data-theme="newtheme" variant="secondary">Secondary</Button>
        </div>
        <div>
          <button data-theme="newtheme" className="btn btn-outline">Default</button>
          <button data-theme="newtheme" className="btn btn-outline btn-primary">Primary</button>
          <button data-theme="newtheme" className="btn btn-outline btn-secondary">Secondary</button>
        </div>
      </div>
    </div>
  );
};

export default ButtonList