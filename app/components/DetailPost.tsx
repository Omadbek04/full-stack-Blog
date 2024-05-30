import Image from "next/image";
import React from "react";

interface PostItemProps {
  id: string;
  title: string;
  postText: string;
  postImg: string;
  catName: string;
  creator: {
    name: string;
    image: string;
  } | null;
  createdAt: string;
}

const DetailPost = ({ postImg, postText, title, catName, id, createdAt, creator }: PostItemProps) => {
  console.log('DetailPost props:', { postImg, postText, title, catName, id, createdAt, creator });

  return (
    <section>
      <div className="container max-w-[800px] mx-auto">
        <div className="pt-8">
          <button className="bg-indigo-500 text-white rounded-md px-3 py-1 mb-6">{catName}</button>
          <h1 className="text-4xl tracking-wide font-bold mb-5">{title}</h1>
          <div className="user flex items-center gap-5 mb-8">
            {creator && (
              <div className="flex items-center gap-3">
                <Image src={creator.image} alt="post author image" width={36} height={36} />
                <p className="text-gray-400 leading-6">{creator.name}</p>
              </div>
            )}
            <p className="text-gray-400 leading-6">{createdAt}</p>
          </div>
          <Image src={postImg} alt="image" width={800} height={300} loading="lazy" className="object-contain mb-8" />
          <p key={id}>{postText}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailPost;
