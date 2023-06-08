"use client";
import Image from "next/image";
import { TbHandRock } from "react-icons/tb";
import { MdOutlineHandshake } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Header from "../components/home/Header";
import Link from "next/link";
import { useRoom } from "@/contexts/RoomContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  // const [image, setImage] = useState<any>();

  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setImage(URL.createObjectURL(e.target.files![0]));
  // };

  const { handleRoomNameChange, room, setRoom } = useRoom();

  useEffect(() => {
    setRoom({
      room: "",
    });
  }, []);

  return (
    <div className="h-screen ">
      <Header />
      <main className="flex items-center justify-between px-10 ">
        <div className="flex flex-col">
          <div className="flex items-center">
            <h1 className="w-[300px] italic font-semibold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-green-400 via-cyan-900 to-blue-500">
              Wassup
            </h1>
            <Image
              className="h-[100px] object-cover pointer-events-none "
              src="/fist.gif"
              alt="Fist"
              width={200}
              height={100}
            />
          </div>

          <div className="flex flex-col gap-3 pl-3 text-3xl">
            <h1>
              Whatsapp for <span>Bros</span>
            </h1>

            <form action="#" className="flex flex-col gap-3 text-base">
              <div className="ml-1">
                <input
                  value={room.room}
                  onChange={handleRoomNameChange}
                  name="room"
                  className="border-none outline-none placeholder:text-primary caret-primary"
                  type="text"
                  placeholder="Enter a room name..."
                />
              </div>
              <div className="p-2 text-lg text-center text-white w-fit rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">
                <Link href="/chat" type="submit">
                  Join Broom-room for bros
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div>
          <Image src="/bros.gif" alt="Wassup" width={500} height={500} />
        </div>
      </main>
    </div>
  );
}
{
  /* <input type="file" accept="image/*" onChange={handleFileChange} />
<Image src={image} alt="image" width={50} height={50} /> */
}
