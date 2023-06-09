import IRoom from "@/interfaces/interface";
import React from "react";

const ChatHead = ({
  room,
  activeStatus,
}: {
  room: IRoom;
  activeStatus: string;
}) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-200">
      <img
        src={room.imageUrl ? room.imageUrl : ""}
        alt={room.roomId}
        className="w-10 h-10 bg-red-600 rounded-full"
      />
      <div className="flex flex-col items-start">
        <h2 className="font-semibold text-secondary">{room.room}</h2>
        <p className="text-sm text-gray-500">{activeStatus}</p>
      </div>
    </div>
  );
};

export default ChatHead;
