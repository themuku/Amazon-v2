import AuthProvider from "@/providers/auth-provider/AuthProviders";
import { TypeComponentAuthFields } from "@/providers/auth-provider/auth-page.types";
import { persistor, store } from "@/store/store";
import "@/styles/globals.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { NextComponentType } from "next/types";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({
  Component,
  pageProps,
}: AppProps &
  TypeComponentAuthFields & {
    Component: NextComponentType;
  }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider Component={{ isOnlyUser: Component.isOnlyUser }}>
            <Component {...pageProps} />
          </AuthProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}
