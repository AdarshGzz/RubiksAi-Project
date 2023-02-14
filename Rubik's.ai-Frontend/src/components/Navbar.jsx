import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        className=" bg-black  h-[4rem] fixed-top fixed w-full "
        data-bs-theme="dark"
      >
        <div className="flex flex-row justify-between  items-center align-middle p-2 ">
          <a className=" logo text-white font-extrabold text-center p-2">
            Rubik's.ai
          </a>
          <div className="text-white border align-item-end border-white rounded-lg font-medium text-center h-9 w-40 p-1  hover:bg-white hover:text-black">
            <button type="button" class="btn btn-outline-light">
              SignUp/Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
