import { createContext, useContext } from "react";

export type FeedbackCommentContextValue = {
  setPendingNegativeComment: (comment: string | null) => void;
};

export const FeedbackCommentContext =
  createContext<FeedbackCommentContextValue | null>(null);

export function useFeedbackComment(): FeedbackCommentContextValue {
  const ctx = useContext(FeedbackCommentContext);
  if (!ctx) {
    throw new Error("useFeedbackComment must be used within RuntimeProvider");
  }
  return ctx;
}
