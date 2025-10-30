import type { VoteType } from '../../types/votes';
import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: (value: VoteType) => void;
  onReset: () => void;
  canReset: number;
  // canReset: boolean;
}

const VoteOptions = ({ onVote, onReset, canReset }: VoteOptionsProps) => {
  return (
    <ul className={css.container}>
      <li>
        <button className={css.button} onClick={() => onVote('good')}>
          good
        </button>
      </li>
      <li>
        <button className={css.button} onClick={() => onVote('neutral')}>
          neutral
        </button>
      </li>
      <li>
        <button className={css.button} onClick={() => onVote('bad')}>
          bad
        </button>
      </li>
      {canReset > 0 && (
        <li>
          <button className={`${css.button} ${css.reset}`} onClick={onReset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default VoteOptions;
