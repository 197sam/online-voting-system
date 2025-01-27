import React, { useState } from "react";
import "./ComponentApp.css";
import LeftMenu from "./components/LeftMenu";
import PendingElection from "./components/PendingElection";
import ElectionData from "./components/ElectionData";

const ComponentApp = () => {
  const [selectedElectionId, setSelectedElectionId] = useState("");
  const [showElectionData, setShowElectionData] = useState(false);
  const [votedElectionIds, setVotedElectionIds] = useState([]); // Track voted elections

  const handleViewElectionData = () => {
    if (selectedElectionId) {
      setShowElectionData(true);
    } else {
      alert("Please select an Election ID.");
    }
  };

  const handleBackToElections = () => {
    setShowElectionData(false);
  };

  const handleVote = (electionId) => {
    // Add the election ID to the votedElectionIds
    setVotedElectionIds((prev) => [...prev, parseInt(electionId)]);
    setShowElectionData(false); // Go back to PendingElection after voting
  };

  return (
    <div className="app-container">
      {/* Left Side */}
      <LeftMenu />

      {/* Right Side */}
      <div className="right-side">
        <h1 className="header">Online Election System</h1>

        {!showElectionData && (
          <PendingElection
            selectedElectionId={selectedElectionId}
            setSelectedElectionId={setSelectedElectionId}
            onViewElectionData={handleViewElectionData}
            votedElectionIds={votedElectionIds} // Pass voted IDs to PendingElection
          />
        )}

        {showElectionData && (
          <ElectionData
            electionId={selectedElectionId}
            onBackToElections={handleBackToElections}
            onVote={handleVote} // Pass the vote function to ElectionData
          />
        )}
      </div>
    </div>
  );
};

export default ComponentApp;
