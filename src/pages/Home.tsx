import { Content, Header, Sidebar } from "./components";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="h-[90vh] flex p-8">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default Home;
