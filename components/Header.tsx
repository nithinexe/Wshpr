import React from "react";
import Image from "next/image";
import icon from "../images/icon.svg";
import {
  BeakerIcon,
  HomeIcon,
  ChevronDownIcon,
  SearchIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import {
  StarIcon,
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import smallicon from "../images/smallicon.svg";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50 flex  px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image objectFit="contain" src={icon} layout="fill" alt={"logo"} />
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5 " />
        <p className=" ml-2 hidden flex-1 lg:inline ">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search Box */}
      <form className="flex flex-1 items-center space-x-2 rounded-lg border border-gray-200 bg-gray-100 px-3 py-1">
        <SearchIcon className="h-6 w-6 " />
        <input
          className="flex-1 bg-transparent outline-none "
          type="text"
          placeholder="Search"
        />
        <button type="submit" hidden />
      </form>
      <div className=" mx-5 hidden  items-center space-x-2  text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <ChatIcon className=" icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      {/* SIGNIN AND SIGN OUT */}

      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image objectFit="contain" src={smallicon} alt="" layout="fill" />
          </div>

          
          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
          <p className="text-gray-400">SignOut</p>
        
          </div>

          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400"/>


        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image objectFit="contain" src={smallicon} alt="" layout="fill" />
          </div>

          <p className="text-gray-400">SignIn</p>
        </div>
      )}
    </div>
  );
}

export default Header;
