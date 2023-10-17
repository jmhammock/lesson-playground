import { useLessonContext } from "./LessonContext";

type Props = {
  children: React.ReactNode;
  action: () => void;
  disabled: boolean;
};

export function Button({ children, action, disabled }: Props) {
  useLessonContext();

  return (
    <button disabled={disabled} onClick={action}>
      {children}
    </button>
  );
}
