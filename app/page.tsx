import { currentUser } from '@clerk/nextjs/server';
import AfterPage from './(pages)/after/page';
import LoginPage from './(pages)/login/page';
const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <LoginPage/>;
  }

  return (
    <main>
      <AfterPage />
    </main>
  );
};

export default HomePage;