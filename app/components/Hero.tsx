import Image from "next/image";
import React from "react";
import PostItem from "./Post";
import Footer from "./Footer";
interface CardDataObj {
  id: string;
  title: string;
  username: string;
  description: string;
  image: string;
  user: string;
}

const Hero = () => {
  const CardData: CardDataObj[] = [
    {
      id: "1",
      title: "Technologiy",
      username: "JR",
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      image: "/card/project1.png",
      user: "/card/user1.png",
    },
    {
      id: "2",
      title: "Technologiy",
      username: "JR",
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      image: "/card/project2.png",
      user: "/card/user2.png",
    },
    {
      id: "3",
      title: "Technologiy",
      username: "JR",
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      image: "/card/project3.png",
      user: "/card/user3.png",
    },
    {
      id: "4",
      title: "Technologiy",
      username: "JR",
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      image: "/card/project4.png",
      user: "/card/user4.png",
    },
    {
      id: "5",
      title: "Technologiy",
      username: "JR",
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      image: "/card/project5.png",
      user: "/card/user5.png",
    },
    {
      id: "6",
      title: "Technologiy",
      username: "JR",
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      image: "/card/project6.png",
      user: "/card/user1.png",
    },
    {
      id: "7",
      title: "Technologiy",
      username: "JR",
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      image: "/card/project7.png",
      user: "/card/user2.png",
    },
    {
      id: "8",
      title: "Technologiy",
      username: "JR",
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      image: "/card/project8.png",
      user: "/card/user3.png",
    },
    {
      id: "9",
      title: "Technologiy",
      username: "JR",
      description: "The Impact of Technology on the Workplace: How Technology is Changing",
      image: "/card/project9.png",
      user: "/card/user4.png",
    },
  ];
  return (
    <>
      <div className="hero h-[600px] pt-[360px] pl-16 bg-[url('/hero/hero.png')] bg-cover bg-no-repeat bg-center relative mb-36 rounded-xl">
        <div className="max-w-[600px]  bg-white p-10 rounded-xl absolute -bottom-16 shadow-md dark:bg-bgDark dark:text-white">
          <button className="bg-indigo-500 text-white  font-bold rounded-md px-3 py-1 mb-4">Technology</button>
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
          {CardData &&
            CardData.map((item) => {
              return <PostItem image={item.image} category={item.title} id={item.id} title={item.description} key={item.id} />;
            })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Hero;
