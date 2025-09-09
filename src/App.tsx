import './App.css';
import { Button } from './components/Button';

function App() {
  const variants = [
    'default',
    'destructive',
    'outline',
    'secondary',
    'ghost',
    'link',
  ] as const;
  const sizes = ['default', 'sm', 'lg'] as const;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Button Showcase BLAH BLAH</h1>

      <div className="space-y-12">
        {/* Regular Buttons */}
        {variants.map(variant => (
          <div key={variant}>
            <h2 className="text-xl font-semibold mb-4 capitalize">
              {variant} Variant
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {sizes.map(size => (
                <div
                  key={`${variant}-${size}`}
                  className="flex flex-col items-start gap-2"
                >
                  <span className="text-sm text-gray-500 capitalize">
                    {size} size
                  </span>
                  <Button variant={variant} size={size}>
                    Button
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Icon Buttons Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Icon Buttons</h2>
          <div className="grid grid-cols-6 gap-4">
            {variants.map(variant => (
              <div
                key={`${variant}-icon`}
                className="flex flex-col items-start gap-2"
              >
                <span className="text-sm text-gray-500 capitalize">
                  {variant}
                </span>
                <Button variant={variant} size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
