import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'components/AuthContext';
// import { ContentfulProvider } from 'components/ContentfulContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';

import { theme } from 'components/Theme';

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout || ((page: any) => <>{page}</>);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {/* <ContentfulProvider> */}
          <AuthProvider>
            {/* <ProtectRoute> */}
            {getLayout(<Component {...pageProps} />)}
            {/* </ProtectRoute> */}
          </AuthProvider>
          {/* </ContentfulProvider> */}
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
