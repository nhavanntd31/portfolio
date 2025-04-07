
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import AdminPage from "@/components/layout/Admin/AdminPage";

export default function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return <AdminPage />;
} 