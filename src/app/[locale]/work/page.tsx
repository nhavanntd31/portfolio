import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import MyWorkIndex from "@/components/pages/MyWorkIndex";

export default function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return <MyWorkIndex />;
} 