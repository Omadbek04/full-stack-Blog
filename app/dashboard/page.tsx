import { getServerSession } from "next-auth";
import { handler } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession(handler);
  
  if (!session) {
    return redirect("/");
  }
  return <div>Dashboard</div>;
};

export default Dashboard;