import { useContext } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { PiBooks, PiStudent, PiUser } from "react-icons/pi";
import { RiUserAddLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import UserContext from "../../Hooks/UserContext";

const Nav = () => {
  const { user } = useContext(UserContext);
  return (
    <nav
      id="nav"
      className="z-0 hidden h-full flex-col justify-stretch bg-slate-950 px-4 py-4 text-slate-100  dark:bg-slate-950 dark:from-65% lg:flex "
    >
      <ul className="m-auto flex flex-grow flex-col items-center justify-start gap-[6px]">
        
        <NavLink to={"./attendance"} className="w-full font-medium">
          <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-violet-600/40 ">
            <IoCalendarOutline className="pt-[0.1rem] text-2xl  " />
            Attendance
          </li>
        </NavLink>
        
        <NavLink to={"./time_schedule"} className="w-full font-medium">
          <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-violet-600/40 ">
            <AiOutlineSchedule className="pt-[0.1rem] text-2xl  " />
            Time Schedule
          </li>
        </NavLink>
        {user.role === "HOD" && (
          <>
            
            <NavLink to={"./approve_staff"} className="w-full font-medium">
              <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-violet-600/40 ">
                <RiUserAddLine className="pt-[0.1rem] text-2xl  " />
                Approve Staff
              </li>
            </NavLink>
          </>
        )}
        {user.role === "student" && (
          <NavLink to={"./join_paper"} className="w-full font-medium">
            <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-violet-600/40 ">
              <PiBooks className="pt-[0.1rem] text-2xl  " />
              Manage Paper
            </li>
          </NavLink>
        )}
      </ul>
      <ul className="flex flex-grow flex-col items-start justify-end gap-[6px]">
        <NavLink to={"./profile"} className="w-full font-medium">
          <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-violet-600/40 ">
            {user.role === "student" ? (
              <PiStudent className="pt-[0.1rem] text-2xl" />
            ) : (
              <PiUser className="pt-[0.1rem] text-2xl" />
            )}
            {user.name}
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
