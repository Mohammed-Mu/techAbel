import { AuthProvider } from "@/context/AuthContext"; // Import your AuthContext
import "@/styles/globals.css"; // Import global CSS

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>  {/* Wrap your app with AuthProvider */}
      <Component {...pageProps} /> {/* Your app's components */}
    </AuthProvider>
  );
}

export default MyApp;
