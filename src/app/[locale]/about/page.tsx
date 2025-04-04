import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import AboutIndex from "@/components/pages/AboutIndex";

export default function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return <AboutIndex />;
} 