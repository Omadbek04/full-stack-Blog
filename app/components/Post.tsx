import Image from "next/image";
import Link from "next/link";
interface PostItemProps {
  id: string;
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
const PostItem = ({ postImg, postText, title, catName, id, createdAt, creator }: PostItemProps) => {
  return (
    <div>
      <div className=" rounded-lg p-4 border dark:bg-cardDark  dark:border-darkBorder">
        <Image src={postImg} width={360} height={240} alt="post image" className=" w-full rounded-md object-cover mb-4" />
        <button className=" px-3 py-1 rounded-md bg-indigo-200 text-indigo-500 text-sm mb-4">{catName}</button>
        <Link href={id} className="line-clamp-3 text-2xl leading-7 font-semibold mb-5">
          {title}
        </Link>
        <div className="user flex items-center gap-5">
          <div className="flex items-center gap-3">
            <Image src={creator.image} alt="post author image" width={36} height={36} />
            <p className="text-gray-400 leading-6">{creator.name}</p>
          </div>
          <p className="text-gray-400 leading-6">{createdAt}</p>
        </div>
      </div>
    </div>
  );
};
export default PostItem;