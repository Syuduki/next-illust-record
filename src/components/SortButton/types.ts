export interface Props {
  sortData: SortData[];
  defaultSort: SortState;
  onClickSort: (key: string, state: 'asc' | 'desk') => void;
}

export interface SortData {
  [key: string]: string;
  key: string;
  label: string;
}

export interface SortState {
  key: string;
  state: 'asc' | 'desk';
}
