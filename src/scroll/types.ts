import type { ReactNode } from 'react';

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: ReactNode;
  title: string;
  text: string;
}

export interface Step {
  icon: ReactNode;
  title: string;
  text: string;
}

export interface Testimonial {
  name: string;
  office: string;
  text: string;
}
