"use client";

type Props = {
  label?: string;
  className?: string;
};

export default function ManageCookiesButton({
  label = "Manage cookies",
  className,
}: Props) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        if (typeof window === "undefined") return;
        window.dispatchEvent(new Event("ice:open-consent"));
      }}
    >
      {label}
    </button>
  );
}
