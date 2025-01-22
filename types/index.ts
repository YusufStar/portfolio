// Genel type tanımlamaları için yeni bir dosya
export type AnimationConfig = {
  initial: {
    opacity: number;
    y: number;
  };
  animate: {
    opacity: number;
    y: number;
  };
  transition: {
    duration: number;
    delay?: number;
  };
};

export type MotionProps = {
  variants: AnimationConfig;
  initial: string;
  animate: string;
  className?: string;
}; 