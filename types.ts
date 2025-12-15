export enum SlideType {
  TITLE = 'TITLE',
  LIST = 'LIST',
  CONTENT = 'CONTENT',
  ERROR = 'ERROR',
  GRID = 'GRID',
  DIAGRAM = 'DIAGRAM'
}

export interface SlideProps {
  isActive: boolean;
}