import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="font-sexyfont font-medium text-test">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
