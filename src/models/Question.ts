import { Option } from './Option';

export class Question {
  questionNo: string;
  questionTitle: string;
  questionImage: string;
  correctAnswer: string;
  selectedAnswer: string;
  isMultipleChoice: boolean;
  options: Option[];
  errMsg: string
}