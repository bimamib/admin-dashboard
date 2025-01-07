import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="">Store Switcher</div>
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton signInUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
