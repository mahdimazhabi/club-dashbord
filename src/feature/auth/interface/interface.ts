export interface LoginResponse {
  authFlowToken: string;
  identifierType: string;
  message: string;
  usedIn: string;
  nextStep: "passwordField" | "";
}
