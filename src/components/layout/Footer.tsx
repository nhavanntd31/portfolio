"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const f = useTranslations("Footer");

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t justify-between">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {f("copyright")}
      </p>
      <nav className="flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:underline underline-offset-4 hover:text-primary transition-colors duration-200"
          href="https://github.com/S0vers/i18n-Nextjs-BoilerPlate"
          target="_blank"
          rel="noopener noreferrer"
        >
          {f("githubLink")}
        </Link>
      </nav>
    </footer>
  );
}