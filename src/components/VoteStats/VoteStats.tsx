import css from './VoteStats.module.css'
interface Votes{
    good: number;
    neutral: number;
    bad: number;
}
interface VoteStatsProps{
    votes: Votes;
    totalVotes: number;
    positiveRite: number;

}


export default function VoteStats({votes,totalVotes,positiveRite}:VoteStatsProps) {
    return<div className={css.container}>
        <p className={css.stat}>Good: <strong>{ votes.good}</strong></p>
    <p className={css.stat}>Neutral: <strong>{ votes.neutral}</strong></p>
    <p className={css.stat}>Bad: <strong>{ votes.bad}</strong></p>
        <p className={css.stat}>Total: <strong>{ totalVotes}</strong></p>
        <p className={css.stat}>Positive: <strong>{ positiveRite}%</strong></p>
  </div>
  
  }