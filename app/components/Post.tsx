import Image from "next/image";
import Link from "next/link";
interface PostItemProps {
  image: string;
  id: string;
  category: string;
  title: string;
  // creator: { image: string; email: string; username: string };
  // date: string;
}
const PostItem = ({ image, category, title, id }: PostItemProps) => {
  return (
    <div>
      <div className=" rounded-lg p-4 border">
        <Image src={image} width={360} height={240} alt="post image" className=" w-full rounded-md object-cover mb-4" />
        <button className=" px-3 py-1 rounded-md bg-indigo-100 text-indigo-500 text-sm mb-4">Technology</button>
        <Link href={id} className="line-clamp-3 text-2xl leading-7 font-semibold mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quos.
        </Link>
        <div className="user flex items-center gap-5">
          <div className="flex items-center gap-3">
            <Image src={"/card/user1.png"} alt="post author image" width={36} height={36} />
            <p className="text-gray-400 leading-6">Jason Fransisco</p>
          </div>
          <p className="text-gray-400 leading-6">26.02.2026</p>
        </div>
      </div>
    </div>
  );
};
export default PostItem;
