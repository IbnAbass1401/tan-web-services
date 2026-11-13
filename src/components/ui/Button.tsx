import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "dark" | "light";
type Size = "md" | "lg";

type Common = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type AsLink = Common & { href: string } & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof Common | "href"
  >;

type AsButton = Common & { href?: undefined } & Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof Common
  >;

export type ButtonProps = AsLink | AsButton;

const base =
  "group inline-flex min-h-11 touch-manipulation select-none items-center justify-center gap-2 rounded-full font-semibold transition duration-200 ease-out active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean";

const sizes: Record<Size, string> = {
  md: "px-5 text-sm",
  lg: "min-h-12 px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-ocean to-[#17566d] text-white shadow-[0_10px_28px_-10px_rgba(31,111,139,0.6)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-8px_rgba(31,111,139,0.75)]",
  secondary:
    "border border-ocean/40 bg-white text-ocean hover:-translate-y-0.5 hover:border-ocean hover:shadow-[0_10px_26px_-12px_rgba(31,111,139,0.45)]",
  dark: "bg-navy text-white shadow-[0_10px_28px_-12px_rgba(11,42,54,0.6)] hover:-translate-y-0.5 hover:bg-[#0f3846]",
  light:
    "bg-white text-navy hover:-translate-y-0.5 hover:bg-mist-soft hover:shadow-[0_10px_30px_-10px_rgba(111,177,196,0.6)]",
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    arrow = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(base, sizes[size], variants[variant], className);
  const content = (
    <>
      {children}
      {arrow && <ArrowIcon />}
    </>
  );

  if (props.href !== undefined) {
    const { href, ...anchorProps } = rest as Omit<AsLink, keyof Common>;

    if (isExternal(href)) {
      const opensNewTab = href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          {...(opensNewTab
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  const buttonProps = rest as Omit<AsButton, keyof Common>;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {content}
    </button>
  );
}