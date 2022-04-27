// next-auth
import { SessionProvider } from "next-auth/react";

// react query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function Providers({ children, session }) {
  const queryClient = new QueryClient({});

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default Providers;
