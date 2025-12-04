"use client";

import {
  useState,
  ChangeEvent,
  FormEvent,
  MouseEvent,
} from "react";
import { verifyPeople } from "@/data/verify-data";

export default function VerifyPage() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [status, setStatus] = useState<StatusType>(null);
  const [showHowModal, setShowHowModal] = useState(false);

  type StatusType = "success" | "error" | "warning" | null;


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setResult(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();

    if (!trimmed) {
      setResult("Please enter a Discord user ID.");
      setStatus("warning");
      return;
    }

    const person = verifyPeople.find((p) => p.ids.includes(trimmed));

    if (person) {
      setResult(`This Discord ID belongs to ${person.name}.`);
      setStatus("success");
    } else {
      setResult(
        "Unknown ID. If this is an impersonator, please report this in the Discord server!"
      );
      setStatus("error");
    }
  };

  const statusColor =
    status === "success"
      ? "text-emerald-400"
      : status === "warning"
        ? "text-amber-300"
        : status === "error"
          ? "text-red-400"
          : "";

  const openModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowHowModal(true);
  };

  const closeModal = () => setShowHowModal(false);

  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="mb-6 text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Cobalt
          </p>
          <h1 className="text-2xl font-semibold">Discord ID Verification</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm p-4 space-y-4"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <label
                htmlFor="verify-id"
                className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em]"
              >
                Discord user ID
              </label>
              <button
                onClick={openModal}
                className="text-[11px] text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
                type="button"
              >
                How do I find this?
              </button>
            </div>

            <input
              id="verify-id"
              type="text"
              autoComplete="off"
              value={inputValue}
              onChange={handleChange}
              className="w-full rounded-lg border border-input bg-background/60 px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-ring transition"
              placeholder="e.g. 855798460593733652"
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              Verify
            </button>

            {result !== null && (
              <p className={`text-xs font-medium tracking-wide ${statusColor}`}>
                {result}
              </p>
            )}
          </div>
        </form>

        <p className="mt-3 text-[11px] text-muted-foreground text-center">
          Always use common sense.
        </p>
        <p className="text-[11px] text-muted-foreground text-center">
          Only use Discord IDs you obtain by yourself.
        </p>

        {showHowModal && (
          <div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/60"
            onClick={closeModal}
          >
            <div
              className="w-full max-w-md rounded-xl border border-border bg-card p-4 space-y-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold">
                  Getting a Discord user ID
                </h2>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Close
                </button>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    Open Discord settings &gt; Advanced and enable
                    <span className="font-medium"> Developer Mode</span>.
                  </li>
                  <li>
                    Right‑click the user&apos;s name or avatar (or long‑press on
                    mobile) and choose
                    <span className="font-medium"> Copy User ID</span>.
                  </li>
                  <li>
                    Paste that numeric ID here to verify you are talking to the
                    correct account.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
