import { type UseMutationResult, useMutation } from "@tanstack/react-query";

export const useCreateThreadMutation = (): UseMutationResult => {
  return useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/paste-assistant-thread", {
        method: "POST",
      });
      const responseJSON = await response.json();
      // Check if the response is ok
      if (!response.ok) {
        throw new Error(responseJSON.error);
      }
      return responseJSON;
    },
    mutationKey: ["create-thread"],
  });
};

export const useDeleteThreadMutation = (): UseMutationResult => {
  return useMutation({
    mutationFn: async (id) => {
      const response = await fetch(`/api/paste-assistant-thread/${id}`, {
        method: "DELETE",
      });
      const responseJSON = await response.json();
      // Check if the response is ok
      if (!response.ok) {
        throw new Error(responseJSON.error);
      }
      return responseJSON;
    },
    mutationKey: ["delete-thread"],
  });
};

export const useUpdateThreadMutation = (): UseMutationResult => {
  return useMutation({
    mutationFn: async ({ id, threadTitle }: any) => {
      const response = await fetch(`/api/paste-assistant-thread/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ metadata: { threadTitle } }),
      });
      const responseJSON = await response.json();
      // Check if the response is ok
      if (!response.ok) {
        throw new Error(responseJSON.error);
      }
      return responseJSON;
    },
    mutationKey: ["update-thread"],
  });
};

export const useCreateAssistantRunMutation = (): UseMutationResult => {
  return useMutation({
    mutationFn: async (messageDetails) => {
      const response = await fetch("/api/paste-assistant-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageDetails),
      });
      const responseJSON = await response.json();
      // Check if the response is ok
      if (!response.ok) {
        throw new Error(responseJSON.error);
      }
      return responseJSON;
    },
    mutationKey: ["create-assistant-run"],
  });
};

export const useSimpleCompletionMutation = (): UseMutationResult => {
  return useMutation({
    mutationFn: async (completionDetails) => {
      const response = await fetch("/api/paste-assistant-simple-completion/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completionDetails),
      });
      const responseJSON = await response.json();
      // Check if the response is ok
      if (!response.ok) {
        throw new Error(responseJSON.error);
      }
      return responseJSON;
    },
    mutationKey: ["simple-completion"],
  });
};
