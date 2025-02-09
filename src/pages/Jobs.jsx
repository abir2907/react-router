import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobsData = useLoaderData();

  return (
    <div>
      {jobsData.map((job) => {
        return (
          <Link key={job.id}>
            <h4>{job.title}</h4>
            <p>{job.location}</p>
            <p>{job.salary}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Jobs;

export const jobsLoader = async () => {
  const res = await fetch("http://localhost:5000/jobs");
  return res.json();
};
