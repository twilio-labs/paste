import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { NextPage } from "next";

import { Assistant as AssistantPage } from "../components/assistant/Assistant";

const queryClient = new QueryClient();

const Assistant: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AssistantPage />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Assistant;
