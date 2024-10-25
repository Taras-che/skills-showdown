export type ConfirmDialog = {
  title: string;
  mainText?: string;
  isDanger?: boolean;
  isWarning?: boolean;
  yesButton: string;
  noButton: string;
};
export enum DialogResponse {
  Yes = 'yes-option',
  No = 'no-option',
}
