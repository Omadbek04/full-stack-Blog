import React from "react";

const Createpost = () => {
  return (
    <div className="max-w-6xl mx-auto  px-4 ">
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">Create Post</h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600 dark:text-white">
                    Title
                  </label>
                  <input type="text" id="name" name="name" class="w-full bg-gray-100 dark:bg-slate-50 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="image" class="leading-7 text-sm text-gray-600 dark:text-white">
                    Post Image
                  </label>
                  <input type="text" id="image" name="image" class="w-full bg-gray-100 dark:bg-slate-50  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600 dark:text-white">
                    Post
                  </label>
                  <textarea id="message" name="message" class="w-full bg-gray-100 dark:bg-slate-50  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div class=" p-2 w-full">
                <label for="blockquote" class="leading-7 text-sm text-gray-600 dark:text-white">
                  Blockquote optionial
                </label>
                <input type="text" id="blockquote" name="blockquote" class="w-full bg-gray-100 dark:bg-slate-50  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="conclusion" class="leading-7 text-sm text-gray-600 dark:text-white">
                    Conclusion
                  </label>
                  <textarea id="conclusion" name="conclusion" class="w-full bg-gray-100 dark:bg-slate-50  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Post</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Createpost;
