import Button from "./UI/Button";
import Avatar from "./UI/Avatar";

function User({Work, name,photo, connected}) {
  const statuscolor = connected ? "bg-green-500" : "bg-red-400";
  return (
    <div className="flex items-center space-x-4 p-4 ">
      <div className="relative">
     <Avatar src={photo} alt={name} />
     <span className={`absolute right-0 bottom-0 w-3 h-3 rounded-full ${statuscolor }`}></span>
    </div>
    <div className="flex flex-col mr-8">
    <h2 className="font-bold text-lg">{name}</h2>
    <p className="text-gray-400 font-medium">{Work}</p>
    </div>
    <Button className="ml-auto">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    </Button>
    </div>
  );
}
export default User;
