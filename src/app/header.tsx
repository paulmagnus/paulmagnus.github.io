import { FC } from "react";
import styles from "./header.module.scss";
import Heading from "@/components/heading";
import Image from "next/image";
import Link from "next/link";

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = ({}) => {
  return (
    <nav id="brand" className={styles.header}>
      <Brand />
    </nav>
  );
};

interface IBrandProps {}

const Brand: FC<IBrandProps> = ({}) => {
  return (
    <Link href="/" className={styles.brand}>
      <Logo />
      <Heading className={styles.h1}>Paul J Magnus</Heading>
    </Link>
  );
};

interface ILogoProps {}

const Logo: FC<ILogoProps> = ({}) => {
  return (
    <div className={styles.logoContainer}>
      <Image src="/favicon-32x32.png" alt="logo" width={32} height={32} />
    </div>
  );
};