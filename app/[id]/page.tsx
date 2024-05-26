import DetailPost from "../components/DetailPost";

interface CardDataObj {
  id: string;
  title: string;
  username: string;
  description: string;
  image: string;
  user: string;
  text: string[];
}

const DetailPage = ({ params }: { params: { id: string } }) => {
  const data: CardDataObj = {
    id: "1",
    title: "Technology",
    username: "JR",
    description: "The Impact of Technology on the Workplace: How Technology is Changing",
    image: "/card/project1.png",
    user: "/card/user1.png",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Doloribus eligendi laboriosam consequunxctuDoloribus eligendi . Doloribus elixcsxzcxncanvdacndgfascdgacdgendi laboriosam consequuntur, saepe perspiciatis deleniti iure at eius tempora animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi laboriosam consequuntur, saepe perspiciatis deleniti iure at eius tempora animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi laboriosam consequuntur, saepe perspiciatis deleniti iure at eius tempora animi.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi laboriosam consequuntur, saepe perspiciatis deleniti iure at eius tempora animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi laboriosam consequuntur, saepe perspiciatis deleniti iure at eius tempora animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi laboriosam consequuntur, saepe perspiciatis deleniti iure at eius tempora animi.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi laboriosam consequunxctur, saepe perspiciatis deleniti iure at eius tempora animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi laboriosam consequuntur, saepe perspiciatis deleniti iure at eius tempora animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi laboriosam consequuntur, saepe perspiciatis deleniti iure at eius tempora animi.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi laboriosam consequuntur, saepe perspiciatis deleniti iure at eius tempora animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi laboriosam consequuntur, saepe perspiciatis deleniti iure at eius tempora animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eligendi laboriosam consequuntur, saepe perspiciatis deleniti iure at eius tempora animi.",
    ],
  };

  return (
    <div>
      <DetailPost id={params.id} image={data.image} category={data.title} title={data.description} text={data.text} />
    </div>
  );
};

export default DetailPage;
