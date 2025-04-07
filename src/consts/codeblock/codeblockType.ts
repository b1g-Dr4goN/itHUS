import { CodeLanguage } from "./codeblockEnum";

export type CodeFile = {
  filename: string;
  language: CodeLanguage;
  code: string;
};
