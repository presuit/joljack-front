import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../components/Container";
import { faInnosoft } from "@fortawesome/free-brands-svg-icons";
import ProblemCard from "../components/ProblemCard";
import PageTitle from "../components/PageTitle";

const ProblemRecommend = () => {
  return (
    <Container>
      <PageTitle title="문제 추천" />
      <main className="mx-auto max-w-screen-lg w-full min-h-screen bg-slate-300 shadow-xl rounded-2xl flex justify-center items-start gap-5 flex-col overflow-hidden">
        <div className="w-full flex justify-center items-center gap-5 flex-col  p-5 bg-slate-400">
          <FontAwesomeIcon
            className="text-[12rem] text-slate-700"
            icon={faInnosoft}
          />
          <h1 className="text-7xl font-semibold text-slate-700">문제 추천</h1>
        </div>
        <div className="p-5 w-full flex flex-wrap">
          {Array.from(Array(30).keys()).map((item) => {
            return <ProblemCard item={item} />;
          })}
        </div>
      </main>
    </Container>
  );
};

export default ProblemRecommend;
