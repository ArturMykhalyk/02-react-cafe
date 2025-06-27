
import type { VotesType } from '../../types/votes';
import CafeInfo from '../CafeInfo/CafeInfo';
import { Notification } from '../Notification/Notification';
import VoteOptions from '../VoteOptons/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import css from './App.module.css'

import { useState } from 'react';

export default function App() {

const [stats, setStats] = useState({
	good: 0,
	neutral: 0,
	bad: 0
}
  )
  const handleVote = (type: VotesType) => {
    setStats(prevStats => ({
      ...prevStats,
      [type]: prevStats[type] + 1
    }));
  };
  
  const resetVotes = () => {
    setStats({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }
 
  const totalVotes = stats.bad + stats.good + stats.neutral;


  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0} />
      {totalVotes?
      <VoteStats votes={stats} totalVotes={totalVotes} positiveRite={stats.good === 0 ? 0 : Math.round((stats.good / (totalVotes)) * 100)} />
      :<Notification/>}
</div>

  );
}