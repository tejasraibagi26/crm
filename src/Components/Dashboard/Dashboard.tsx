import { useState } from "react";
import "./dashboard.css";

const Dashboard = () => {
  const [activeBoard, setActiveBoard] = useState();
  return (
    <section id="dashboard">
      <div className="grid">
        <div className="sidebar">
          <div className="title">Boards</div>
          <div className="board-lists">
            <div className="board">Board 1</div>
            <div className="board">Board 2</div>
            <div className="board">Board 3</div>
            <div className="board">Board 4</div>
            <div className="board">Board 5</div>
          </div>
          <div className="btn btn-secondary btn-center btn-width-auto new">
            New Board
          </div>
        </div>
        <div className="content"></div>
      </div>
    </section>
  );
};

export default Dashboard;
