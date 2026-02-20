import React from "react";
type SectionWidth = "full" | "wide" | "narrow";
type SectionVariant = "default" | "hero" | "highlight";

export interface SectionProps {
  id?: string;
  as?: React.ElementType;
  width?: SectionWidth;
  variant?: SectionVariant;
  className?: string;
  innerClassName?: string;
  snap?: boolean;
  withFooter?: boolean;
  children: React.ReactNode;
}

export function Section({
  id,
  as: Component = "section",
  width = "full",
  variant = "default",
  className = "",
  innerClassName = "",
  snap = true,
  withFooter = false,
  children,
}: SectionProps) {
  const classes = [
    "section",
    snap ? "snap-section" : "",
    withFooter ? "section--with-footer" : "",
    `section--${width}`,
    `section--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const innerClasses = [
    "section-inner",
    innerClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component id={id} className={classes}>
      <div className={innerClasses}>
        {variant === "hero" ? (
          <div className="section-hero-content">
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </Component>
  );
}
