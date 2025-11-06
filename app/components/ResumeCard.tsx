import React from "react";
import { Link } from "react-router";

const ResumeCard = ({ resume }: { resume: Resume }) => {
  return (
    <Link
      to={`/resume/${resume.id}`}
      className="animate-in duration-100 resume-card fade-in"
    ></Link>
  );
};

export default ResumeCard;
