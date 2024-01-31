import { type UseMutationResult, useMutation } from "@tanstack/react-query";

export const useCreateThreadMutation = (): UseMutationResult => {
  return useMutation({
    mutationFn: async () => {
      return fetch("/api/paste-assistant-thread", {
        method: "POST",
      });
    },
    mutationKey: ["create-thread"],
  });
};

export const useDeleteThreadMutation = (): UseMutationResult => {
  return useMutation({
    mutationFn: async (id) => {
      return fetch(`/api/paste-assistant-thread/${id}`, {
        method: "DELETE",
      });
    },
    mutationKey: ["delete-thread"],
  });
};

export const useUpdateThreadMutation = (): UseMutationResult => {
  return useMutation({
    mutationFn: async ({ id, threadTitle }: any) => {
      return fetch(`/api/paste-assistant-thread/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ metadata: { threadTitle } }),
      });
    },
    mutationKey: ["update-thread"],
  });
};

export const useCreateAssistantRunMutation = (): UseMutationResult => {
  return useMutation({
    mutationFn: async (messageDetails) => {
      return fetch("/api/paste-assistant-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageDetails),
      });
    },
    mutationKey: ["create-assistant-run"],
  });
};

export const useSimpleCompletionMutation = (): UseMutationResult => {
  return useMutation({
    mutationFn: async (completionDetails) => {
      return fetch("/api/paste-assistant-simple-completion/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completionDetails),
      });
    },
    mutationKey: ["simple-completion"],
  });
};
