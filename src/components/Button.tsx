import { Button as ShadcnButton } from '@/components/ui/button';

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  onClick?: () => void;
}

export function Button({
  className,
  variant = 'default',
<<<<<<< HEAD
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <ShadcnButtonssssss
=======
  size = 'lg',
  ...props
}: ButtonProps) {
  return (
    <ShadcnButtondddddddd
>>>>>>> fe1058f9cfedaefa8abc1e73e2f47e816035f5ac
      variant={variant}
      size={size}
      className={className}
      {...props}
    />
  );
}
