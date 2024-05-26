import Image from "next/image";
import React from "react";
interface PostItemProps {
  image: string;
  id: string;
  category: string;
  title: string;
  // creator: { image: string; email: string; username: string };
  // date: string;
  text: string[];
}
const DetailPost = ({ image, text, category, title, id }: PostItemProps) => {
  return (
    <section>
      <div className="container max-w-[800px] mx-auto">
        <div className="pt-8">
          <button className="bg-indigo-500 text-white  rounded-md px-3 py-1 mb-6">Technology</button>
          <h1 className=" text-4xl tracking-wide font-bold mb-5">The Impact of Technology on the Workplace: How Technology is Changing</h1>
          <div className="user flex items-center gap-5 mb-8">
            <div className="flex items-center gap-3">
              <Image src={"/card/user1.png"} alt="post author image" width={36} height={36} />
              <p className="text-gray-400 leading-6">Jason Fransisco</p>
            </div>
            <p className="text-gray-400 leading-6">26.02.2026</p>
          </div>
          <Image src={image} alt="image" width={800} height={300} loading="lazy" className=" object-contain mb-8"/>
          {text.map((text) => {
            return <p key={id}>{text}</p>;
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailPost;
