import { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';
import css from './App.module.css';
import type { Votes, VoteType } from '../../types/votes';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';

const App = () => {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onVote = (value: VoteType) => {
    setVotes({ ...votes, [value]: votes[value] + 1 });
  };
  const onReset = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };
  const canReset = votes.bad + votes.good + votes.neutral;
  // const canReset = true;

  const positiveRate = canReset ? Math.round((votes.good / canReset) * 100) : 0;
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={onVote} onReset={onReset} canReset={canReset} />
      {canReset > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={canReset}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
