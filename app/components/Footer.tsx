"use client";
import { FormEvent, useState } from "react";
const Footer = () => {
  window.replainSettings = { id: "c09cc678-e6ab-4044-8231-9d48d075e476" };
  (function (u) {
    var s = document.createElement("script");
    s.async = true;
    s.src = u;
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  })("https://widget.replain.cc/dist/client.js");

  const [email, setEmail] = useState<string>("");
  let token = process.env.BOTSECRET;
  let chat_id = "-1002104676003";
  const user = `
  Email: ${email}
  `;
  const handlerEmail = (e: FormEvent) => {
    e.preventDefault();
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${user}`;

    const api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setEmail("");
  };
  return (
    <footer className="mb-96 bg-slate-100 pt-[64px] pb-8">
      <div className="flex items-start justify-between">
        <div className=" flex flex-col max-w-[280px]">
          <h2 className=" text-[18px] font-semibold mb-3 ">About</h2>
          <p className=" text-left text-sm font-normal text-gray-500 leading-6 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <div className=" flex items-center gap-1 mb-1 ">
            <span className="font-semibold">Telegram :</span>
            <a href="https://t.me/A_Omadbek" className="text-gray-600 ">
              A_Omadbek
            </a>
          </div>
          <div className="flex items-center gap-1">
            <span className=" font-semibold">Phone :</span>
            <a className=" text-gray-600" href="Tel:+998 91 697 71 81">
              +998 91 697 71 81
            </a>
          </div>
        </div>
        <div className="flex justify-between gap-[80px]">
          <div>
            <h2 className=" text-[18px] font-semibold mb-6">Quick Link</h2>
            <ul className=" flex flex-col gap-1">
              <li className=" leading-6 font-normal text-gray-500 text-[16px]">Home</li>
              <li className=" leading-6 font-normal text-gray-500 text-[16px]">About</li>
              <li className=" leading-6 font-normal text-gray-500 text-[16px]">Blog</li>
              <li className=" leading-6 font-normal text-gray-500 text-[16px]">Archived</li>
              <li className=" leading-6 font-normal text-gray-500 text-[16px]">Author</li>
              <li className=" leading-6 font-normal text-gray-500 text-[16px]">Contact</li>
            </ul>
          </div>
          <div>
            <h2 className=" text-[18px] font-semibold mb-6 ">Category</h2>
            <ul className=" flex flex-col gap-1">
              <li className=" leading-6 font-normal text-gray-500 text-[16px]">Lifestyle</li>
              <li className=" leading-6 font-normal text-gray-500 text-[16px]">Technology</li>
              <li className=" leading-6 font-normal text-gray-500 text-[16px]">Travel</li>
              <li className=" leading-6 font-normal text-gray-500 text-[16px]">Business</li>
              <li className=" leading-6 font-normal text-gray-500 text-[16px]">Economy</li>
              <li className=" leading-6 font-normal text-gray-500 text-[16px]">Sports</li>
            </ul>
          </div>
        </div>
        <form className="p-8 rounded-xl shadow-md bg-white" onSubmit={handlerEmail}>
          <h2 className=" text-xl text-center font-semibold mb-2">Weekly Newsletter</h2>
          <p className="text-[16px] font-normal text-gray-500 text-center mb-[30px]">Get blog articles and offers via email</p>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" className=" border rounded-md text-gray-500 py-1 pl-3 outline-none text-[14px] w-full placeholder:text-[14px] placeholder:font-normal mb-2" required />
          <button className=" py-1 text-center bg-indigo-500 rounded-md text-white font-[16px] w-full outline-none hover:opacity-90">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
