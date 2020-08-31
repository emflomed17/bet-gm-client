// @flow
export type BetsActionType =
  | 'bets_data'
  | 'bets_in_progress'
  | 'bets_error';

export const BETS_DATA: BetsActionType = 'bets_data';
export const BETS_IN_PROGRESS: BetsActionType = 'bets_in_progress';
export const BETS_ERROR: BetsActionType = 'bets_error';
