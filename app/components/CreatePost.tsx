"use client";

import { useSession } from "next-auth/react";

const Createpost = () => {
  const session = useSession();
  const handleSubmit = (e: HTMLFormElement) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const newPost = {
      creator: session.data?.user.id,
      title: data.get("name"),
      postImg: data.get("image"),
      postText: data.get("message"),
      catName: data.get("conclusion"),
    };

    fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify(newPost),
    })
      .then(() => {
        alert("Post qoshildi");
        e.target.reset();
      })
      .catch(() => {
        alert("Post qoshilmadi");
      });
  };
  return (
    <div className="max-w-6xl mx-auto  px-4">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">Create Post</h1>
          </div>
          <form className="lg:w-1/2 md:w-2/3 mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-white">
                    Title
                  </label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 dark:bg-slate-50 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="image" className="leading-7 text-sm text-gray-600 dark:text-white">
                    Post Image
                  </label>
                  <input type="text" id="image" name="image" className="w-full bg-gray-100 dark:bg-slate-50  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600 dark:text-white">
                    Post
                  </label>
                  <textarea id="message" name="message" className="w-full bg-gray-100 dark:bg-slate-50  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className=" p-2 w-full">
                <label htmlFor="blockquote" className="leading-7 text-sm text-gray-600 dark:text-white">
                  Blockquote optionial
                </label>
                <input type="text" id="blockquote" name="blockquote" className="w-full bg-gray-100 dark:bg-slate-50  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="conclusion" className="leading-7 text-sm text-gray-600 dark:text-white">
                    Conclusion
                  </label>
                  <textarea id="conclusion" name="conclusion" className="w-full bg-gray-100 dark:bg-slate-50  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Add Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Createpost;
