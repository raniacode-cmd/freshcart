import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },

  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log("AUTHURATION RUN");
        const response = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const payload = await response.json();
        console.log("Loging payloaddddddd", payload);

        if (payload.message == "success") {
          const decodedToken: { id: string } = jwtDecode(payload.token);
          console.log("mytokennn", decodedToken);
          return {
            id: decodedToken.id,
            user: payload.user,
            token: payload.token,
          };
        } else {
          throw new Error(payload.message || "worng credentiails ");
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        (token.user = user.user), (token.token = user.token);
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.user  as typeof session.user;
     
      return session;
    },
  },
};
