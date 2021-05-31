// import "./normalize.css";
import "./_app.css";
import "../styles/global.css";
import { TeamsProvider } from "../src/hooks/team";

function MyApp({ Component, pageProps }) {
  return (
    <TeamsProvider>
      <Component {...pageProps} />
    </TeamsProvider>
  );
}

export default MyApp;
