import Header from "../Header";
import HomeSection from "../HomeSection";

export default function Home({ userName }) {
  return (
    <>
      <Header userName={userName} /> {/* Pass userName to Header */}
      <HomeSection />
    </>
  );
}
