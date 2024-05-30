import Image from "next/image";
import React from "react";
import PostItem from "./Post";
import Footer from "./Footer";
interface CardDataObj {
  _id: string;
  title: string;
  postText: string;
  postImg: string;
  catName: string;
  creator: {
    name: string;
    image: string;
  };
  createdAt: string;
}

const Hero = async () => {
  const res = await fetch("http://localhost:3000/api/blog", { cache: "no-cache" });
  const data = await res.json();
  const message: CardDataObj[] = await data.message;

  

  return (
    <>
      <div className=" max-w-6xl mx-auto  px-4">
        <div className="hero h-[600px] pt-[360px] pl-16 bg-[url('/hero/hero.png')] bg-cover bg-no-repeat bg-center relative mb-36 rounded-xl">
          <div className="max-w-[600px]  bg-white p-10 rounded-xl absolute -bottom-16 shadow-md dark:bg-bgDark dark:text-white">
            <button className=" hover:opacity-90 bg-indigo-500 text-white  font-bold rounded-md px-3 py-1 mb-4">Technology</button>
            <div className="title mb-5 text-[34px] tracking-wide font-bold ">The Impact of Technology on the Workplace: How Technology is Changing</div>
            <div className="user flex items-center gap-5">
              <div className="flex items-center gap-3">
                <Image src={"/card/user1.png"} alt="post author image" width={36} height={36} />
                <p className="text-gray-400 leading-6">Jason Fransisco</p>
              </div>
              <p className="text-gray-400 leading-6">26.02.2026</p>
            </div>
          </div>
        </div>
        <section className=" mb-24">
          <p className=" font-bold text-lg mb-3">Latest Post</p>
          <div className=" grid grid-cols-3 gap-4">
            {message &&
              message?.map((item) => {
                return <PostItem postImg={item.postImg} title={item.title} id={item._id} postText={item.postImg} catName={item.catName} createdAt={item.createdAt} creator={item.creator} key={item._id} />;
              })}
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Hero;
