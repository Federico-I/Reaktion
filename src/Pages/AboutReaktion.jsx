import Card from "../Components/Shared/Card";
import { Link } from "react-router-dom";

function AboutReaktion() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a React app to leave Feedback service.</p>
        <p>Version: 1.0.1</p>
        <p>
          <Link to="/">Back to home Page</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutReaktion;
