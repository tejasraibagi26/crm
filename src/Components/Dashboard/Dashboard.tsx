import { useState } from "react";
import { AiFillSetting, AiOutlineShareAlt } from "react-icons/ai";
import dummy from "../../assets/task.json";
import { ITaskBoard } from "../../Interfaces";
import "./dashboard.css";

const Dashboard = () => {
  const [activeBoard, setActiveBoard] = useState<ITaskBoard>();
  const [boards, setBoards] = useState<ITaskBoard[]>(dummy.boards);

  const updateActiveBoard = (board: ITaskBoard) => {
    console.log(board);
    setActiveBoard(board);
  };

  return (
    <section id="dashboard">
      <div className="grid">
        <div className="sidebar">
          <div className="title">Boards</div>
          <div className="board-lists">
            {boards.length > 0 ? (
              boards.map((board) => (
                <div
                  className="board"
                  key={board.id}
                  data-key={board.id}
                  onClick={() => updateActiveBoard(board)}
                >
                  <div className="board-title">{board.name}</div>
                </div>
              ))
            ) : (
              <p>Create a new board.</p>
            )}
          </div>
          <div className="btn btn-secondary btn-center btn-width-auto new">
            New Board
          </div>
        </div>
        <div className="content">
          {activeBoard && (
            <div className="topbar">
              <div className="board-name">{activeBoard.name}</div>
              <div className="board-settings">
                <AiOutlineShareAlt className="icon" title="Share" />
                <AiFillSetting className="icon" title="Settings" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
