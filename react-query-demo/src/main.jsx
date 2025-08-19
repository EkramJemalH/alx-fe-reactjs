import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Configure cache behavior for the demo
      staleTime: 60 * 1000,          // data is fresh for 1 minute
      cacheTime: 5 * 60 * 1000,      // unused cache persists for 5 minutes
      refetchOnWindowFocus: false,   // reduce surprise refetches
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
