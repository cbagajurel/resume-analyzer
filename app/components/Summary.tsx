import ScoreGauge from "~/components/ScoreGauge";
import ScoreBadge from "~/components/ScoreBadge";

const Category = ({ title, score }: { title: string; score: number }) => {
  const textColor =
    score > 70
      ? "text-green-600"
      : score > 49
        ? "text-yellow-600"
        : "text-red-600";

  return (
    <div className="resume-summary">
      <div className="category">
        <div className="flex flex-row justify-center items-center gap-2">
          <p className="text-2xl">{title}</p>
          <ScoreBadge score={score} />
        </div>
        <p className="text-2xl">
          <span className={textColor}>{score}</span>/100
        </p>
      </div>
    </div>
  );
};

const Summary = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl w-full">
      <div className="flex flex-row items-center gap-8 p-4">
        <ScoreGauge score={feedback?.overallScore || 0} />

        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl">Your Resume Score</h2>
          <p className="text-gray-500 text-sm">
            This score is calculated based on the variables listed below.
          </p>
        </div>
      </div>

      <Category title="Tone & Style" score={feedback?.toneAndStyle?.score || 0} />
      <Category title="Content" score={feedback?.content?.score || 0} />
      <Category title="Structure" score={feedback?.structure?.score || 0} />
      <Category title="Skills" score={feedback?.skills?.score || 0} />
    </div>
  );
};
export default Summary;
