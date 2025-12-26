
export interface Outcome {
  result: string;
  clarification: string;
  keyTakeaways: string[];
}

export interface Choice {
  id: number;
  title:string;
  subtitle: string;
  outcome: Outcome;
}

export interface Scenario {
  id: number;
  title: string;
  subtitle: string;
  character: string;
  intro: string;
  choices: Choice[];
}
