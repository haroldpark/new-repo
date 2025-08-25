import { Button as ShadcnButton } from "@/components/ui/button";

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  onClick?: () => void;
}

export function Button({
  className,
  variant = "default",
  size = "sm",
  ...props
}: ButtonProps) {
  return (
    <ShadcnButton
      variant={variant}
      size={size}
      className={className}
      {...props}
    />
  );
}
