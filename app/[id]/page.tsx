import DetailPost from "../components/DetailPost";

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

const DetailPage = async ({ params }: { params: { id: string } }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${params.id}`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    const message: CardDataObj = await data.message;
  
    return (
      <div>
        <DetailPost 
          postImg={message.postImg} 
          title={message.title} 
          id={message._id} 
          postText={message.postText} 
          catName={message.catName} 
          createdAt={message.createdAt} 
          creator={message.creator} 
          key={message._id} 
        />
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return <div>Error loading post</div>;
  }
};

export default DetailPage;
