import { SWRConfig } from 'swr';
import { fetcher } from '../api/fetcher';

function SWRProvider({ children }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: import.meta.env.VITE_APP_NAME !== 'production',
        errorRetryCount: 3,
        dedupingInterval: 10000,
        onError: err => console.error('SWR Error:', err),
      }}
    >
      {children}
    </SWRConfig>
  );
}

export default SWRProvider;
