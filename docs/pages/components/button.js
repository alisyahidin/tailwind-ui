import Button from "@alisyahidin/react/dist/Button";

const ButtonList = () => {
  return (
    <div>
      <h2 className="text-d1 mb-8">Default</h2>
      <div className="flex mb-28">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button disabled>Disabled</Button>
        <Button variant="ghost">Ghost</Button>
        <button className="btn">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-success">Success</button>
        <button disabled className="btn">Disabled</button>
        <button className="btn btn-ghost">Ghost</button>
      </div>
      <h2 className="text-d1 mb-8">Outline</h2>
      <div className="flex mb-28">
        <Button outlined>Primary</Button>
        <Button variant="secondary" outlined>Secondary</Button>
        <Button variant="success" outlined>Success</Button>
        <Button disabled outlined>Disabled</Button>
        <Button variant="ghost" outlined>Ghost</Button>
        <button className="btn btn-outline">Primary</button>
        <button className="btn btn-outline btn-secondary">Secondary</button>
        <button className="btn btn-outline btn-success">Success</button>
        <button disabled className="btn btn-outline">Default</button>
        <button className="btn btn-outline btn-ghost">Ghost</button>
      </div>
    </div>
  );
};

export default ButtonList