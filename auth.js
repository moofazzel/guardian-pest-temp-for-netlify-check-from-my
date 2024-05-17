import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "./lib/mongodb";
import User from "./models/User";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  // adapter: MongoDBAdapter(mongoClientPromise, {databaseName: process.env.ENVIRONMENT}),
  session: {
    strategy: "jwt",
    useSecureCookies: false,
  },
  // site: process.env.NEXTAUTH_URL,
  // secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      // secret: process.env.NEXTAUTH_SECRET,

      async authorize(credentials) {
        if (credentials === null) return null;

        await dbConnect();

        try {
          const foundUser = await User.findOne({ email: credentials?.email });

          if (!foundUser) throw new Error("No user found");

          const isValidPassword = await compare(
            credentials?.password,
            foundUser.password
          );

          if (isValidPassword) {
            return foundUser;
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),

    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],
});

// // import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import dbConnect from "./lib/mongodb";
// import User from "./models/User";

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   // adapter: MongoDBAdapter(mongoClientPromise, {
//   //   databaseName: process.env.ENVIRONMENT,
//   // }),
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         email: {},
//         password: {},
//       },
//       async authorize(credentials) {
//         console.log("🚀 ~ credentials:", credentials);

//         if (credentials === null) return null;
//         await dbConnect();
//         try {
//           const user = await User.findOne({ email: credentials?.email });

//           console.log("🚀 ~ user:", user);

//           if (user) {
//             const isMatch = user?.password === credentials.password;

//             if (isMatch) {
//               return user;
//             } else {
//               throw new Error("Email or Password is not correct");
//             }
//           } else {
//             throw new Error("User not found");
//           }
//         } catch (error) {
//           throw new Error(error);
//         }
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
// });
