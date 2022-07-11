import Image from "next/image";

const Avatar = ({ user }) => {
  const { image, online, name } = user;
  return (
    <div
      className={`avatar placeholder duration-150 ${
        !online && "grayscale brightness-50 ease-in "
      }`}
    >
      <div className="w-8 bg-info">
        {image ? <Image src={image} /> : name.substr(0, 2)}
      </div>
    </div>
  );
};

export default Avatar;
