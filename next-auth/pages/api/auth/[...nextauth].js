import NextAuth from 'next-auth';
import Provides from 'next-auth/provides';

export default NextAuth({
  providers: [
    Provides.GitHub({
      clientId: '',
      clientSecret: '',
    }),
  ],
});
