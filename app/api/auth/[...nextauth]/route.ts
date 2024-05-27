import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { Users } from "../../../../model/users";
import connectToDB from "@/utils/database";
import { redirect } from "next/navigation";
export const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await Users.findOne({
        email: session?.user?.email
      })
      session.user.id = sessionUser._id.toString();
      return session;
    },

    async signIn({ profile }) {
      try {
        
        await connectToDB()

        const userId = await Users.findOne({ email: profile?.email });

        if (!userId) {
          await Users.create({
            name: profile?.name || profile?.login,
            email: profile?.email,
            image: profile?.picture || profile?.avatar_url,
          });
        }
        return true;

      } catch (error) {
        return false;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
