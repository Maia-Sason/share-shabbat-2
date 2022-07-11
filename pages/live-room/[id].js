import Avatar from "~/components/LiveRoom/Avatar";
import Reader from "~/components/BlessBlockEditor/Reader";
import { ClipboardCopyIcon } from "@heroicons/react/solid";
import { copyText } from "~/utils/copy-text";

import useSockets from "~/hooks/useSockets";
import { useEffect, useState } from "react";

const LiveRoomPage = () => {
  const code = "123";
  // TODO: Get list of users online in current room
  const people = [
    { image: "", name: "ABC", online: true },
    { image: "", name: "ABC", online: true },
    { image: "", name: "ABC", online: true },
    { image: "", name: "ABC", online: false },
    { image: "", name: "ABC", online: true },
  ];

  const { socket } = useSockets();

  const [loading, setLoading] = useState(true);
  const [currentMarkdown, setCurrentMarkdown] = useState({
    hebrew: "",
    english: "",
    transliteration: "",
  });
  const [currentState, setCurrentState] = useState("hebrew");

  useEffect(() => {
    // Listen for change start, listen for change end?
    socket.on("data-change", () => {
      setCurrentMarkdown({
        hebrew: "1 2 3",
        english: "a b c",
        transliteration: "one two three",
      });

      setLoading(false);
    });
  }, [socket]);

  return (
    <div className="flex flex-col gap-5 justify-start h-full">
      <div>
        <h1 className="text-xl font-bold flex">
          Room Code:{" "}
          <button
            onClick={() => copyText(code)}
            className="font-light flex items-center"
          >
            {code}{" "}
            <span>
              <ClipboardCopyIcon className="h-5 w-5 text-accent " />
            </span>
          </button>
        </h1>
      </div>

      <div className="flex flex-col gap-5">
        <div className="w-[90%]  mx-auto relative">
          <div className="avatar-group -space-x-6 absolute right-[-10px] z-[2] bottom-[-10px]">
            {people.map((person) => (
              <Avatar key="1" user={person} />
            ))}
          </div>
          <div className="tabs mx-auto justify-center">
            <button
              className={`tab tab-lifted ${
                currentState === "english" && "tab-active"
              }`}
              onClick={() => setCurrentState("english")}
            >
              English
            </button>
            <button
              className={`tab tab-lifted ${
                currentState === "hebrew" && "tab-active"
              }`}
              onClick={() => setCurrentState("hebrew")}
            >
              Hebrew
            </button>
            <button
              className={`tab tab-lifted ${
                currentState === "transliteration" && "tab-active"
              }`}
              onClick={() => setCurrentState("transliteration")}
            >
              Transliteration
            </button>
          </div>
          <Reader loading={loading} markdown={currentMarkdown[currentState]} />
        </div>

        <div className="grid grid-cols-3 justify-center gap-5">
          <button className="btn">Block</button>
        </div>
      </div>
    </div>
  );
};

export default LiveRoomPage;
