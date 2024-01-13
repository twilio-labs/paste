import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { NextPage } from "next";

import { Assistant as AssistantPage } from "../components/assistant/Assistant";

const queryClient = new QueryClient();

const Assistant: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AssistantPage />
    </QueryClientProvider>
  );
};

export default Assistant;
