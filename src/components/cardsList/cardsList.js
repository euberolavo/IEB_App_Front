import React, { useState } from 'react';

import Link from "next/link";
import Style from "./CardsList.module.css";

import Loading from '../loading/Loading';
import { useRouter } from 'next/router';

function CardsList({ children, href }) {

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleLoadClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
        router.push(href);
    }, 1000);
  };

  return (

    <div className={Style.Card} onClick={handleLoadClick}>
    <Link href={href}>{children}</Link>
    {isLoading && <Loading />}
  </div>
    // <Link href={href} onClick={handleLoadClick}>
    //   <div className={Style.Card}>{children} {isLoading && <Loading />}</div>
    // </Link>
  );
}

export default CardsList;
