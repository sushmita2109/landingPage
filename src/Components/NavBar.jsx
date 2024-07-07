export const NavBar = () => {
  return (
    <div className="flex justify-between p-4  bg-red-300">
      <ul className="flex gap-2 justify-around ">
        <li className="font-medium">Home</li>
        <li className="font-medium">About</li>
        <li className="font-medium">Project</li>
        <li className="font-medium">Contact</li>
      </ul>
      <button className="border-4 rounded p-3">Register here</button>
    </div>
  );
};
