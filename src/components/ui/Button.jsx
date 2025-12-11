// src/components/ui/Button.jsx
export default function Button({
  as: Comp = "button",
  variant = "solid",      // "solid" | "outline"
  size = "md",            // "sm" | "md" | "lg"
  fullWidth = false,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition duration-200 " +
    "hover:scale-105 active:scale-95 focus:outline-none " +
    "focus:ring-2 focus:ring-aurea-accent/70 focus:ring-offset-2 focus:ring-offset-aurea-primary";

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2 text-sm",
    lg: "px-7 py-3 text-base",
  };

  const variants = {
    solid: "bg-aurea-accent text-aurea-primary hover:bg-aurea-accent/90",
    outline:
      "border border-aurea-accent text-aurea-accent hover:bg-aurea-accent hover:text-aurea-primary",
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <Comp
      className={`${base} ${sizes[size]} ${variants[variant]} ${width} ${className}`}
      {...props}
    />
  );
}
