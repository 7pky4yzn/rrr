import React from 'react';

export type Tab = 'home' | 'about' | 'projects' | 'learning' | 'contact';

export interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  threshold?: number;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link';
  size?: 'sm' | 'md' | 'lg';
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export interface Project {
  id: string;
  title: string;
  overview: string;
  purpose: string;
  learnings: string;
  technologies: string[];
  microCopy: string;
}