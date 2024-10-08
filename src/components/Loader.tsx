/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/*
Codepen link: https://codepen.io/ghost028/details/GqGYyb
*/

function Spinner() {
  const p = [""];
  for (let i = 0; i < 36; i++) {
    p.push((<p key={`id=${i}`} className="p"></p>) as any);
  }
  return p;
}

export default function Loader(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed z-50 flex h-full w-screen items-center justify-center bg-white dark:bg-black">
          {router.pathname === "/hultprize" ? (
            <div className="loader-wrapper">
              <img
                src="/images/hultprize/hult-loader.gif"
                alt="Hult Prize Loader"
              />
            </div>
          ) : (
            <div className="loader-wrapper">{Spinner()}</div>
          )}
        </div>
      )}
    </>
  );
}
