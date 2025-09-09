import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultVariant: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button',
  },
};

export const SecondaryVariant: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Button',
  },
};

export const GhostVariant: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Button',
  },
};

export const DestructiveVariant: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'Button',
  },
};

export const LinkVariant: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'Button',
  },
};

export const OutlineVariant: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Button',
  },
};

export const DefaultSize: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button',
  },
};

export const SmallVariant: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Button',
  },
};

export const LargeVariant: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Button',
  },
};
