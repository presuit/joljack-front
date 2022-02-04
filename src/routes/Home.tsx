import Container from "../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInnosoft } from "@fortawesome/free-brands-svg-icons";
import PageTitle from "../components/PageTitle";

function Home() {
  return (
    <Container>
      <PageTitle title="홈" />
      <main className="max-w-screen-lg w-full min-h-screen bg-slate-300 mx-auto rounded-2xl shadow-xl overflow-hidden">
        <section className="flex flex-col gap-5 justify-center items-center p-5 w-full bg-slate-400">
          <FontAwesomeIcon
            className="text-[12rem] text-slate-700"
            icon={faInnosoft}
          />
          <h1 className="text-7xl font-semibold text-slate-700">홈페이지</h1>
        </section>
      </main>
    </Container>
  );
}

export default Home;
