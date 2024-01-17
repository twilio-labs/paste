import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

import { Assistant as AssistantPage } from "../components/assistant/Assistant";

const queryClient = new QueryClient();

export const getServerSideProps = (async (context) => {
  return {
    props: { host: context.req.headers.host || null },
  };
}) satisfies GetServerSideProps<{ host: string | null }>;

const Assistant = ({ host }: InferGetServerSidePropsType<typeof getServerSideProps>): React.ReactNode => {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Paste Design System Assistant</title>
        <meta
          name="description"
          content="A GPt-4 powered assistant to help you with understanding how to use Paste to design and build your software applications. It can assist you with code, design, or content guidelines and troubleshooting."
        />
        <meta
          property="og:image"
          content={`//${host}/api/simple-og-image?title=Paste%20Assistant&description=A%20GPt-4%20powered%20assistant%20to%20help%20you%20with%20understanding%20how%20to%20use%20Paste%20to%20design%20and%20build%20your%20software%20applications.%20It%20can%20assist%20you%20with%20code,%20design,%20or%20content%20guidelines%20and%20troubleshooting.`}
        />
      </Head>
      <AssistantPage />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Assistant;
