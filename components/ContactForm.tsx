"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations("Services");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = {
      service: form.get("service"),
      email: form.get("email"),
      message: form.get("message"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-lg flex-col gap-5">
      <label className="flex flex-col gap-2 text-sm">
        {t("fieldWhat")}
        <input
          name="service"
          type="text"
          className="h-12 rounded-lg border border-black/15 bg-transparent px-4 dark:border-white/20"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm">
        {t("fieldEmail")}
        <input
          name="email"
          type="email"
          required
          className="h-12 rounded-lg border border-black/15 bg-transparent px-4 dark:border-white/20"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm">
        {t("fieldMessage")}
        <textarea
          name="message"
          rows={5}
          className="rounded-lg border border-black/15 bg-transparent p-4 dark:border-white/20"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-foreground text-background h-12 rounded-full px-6 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? t("sending") : t("send")}
      </button>
      {status === "success" && (
        <p className="text-sm text-green-600">{t("success")}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">{t("error")}</p>
      )}
    </form>
  );
}
