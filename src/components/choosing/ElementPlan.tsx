import { Heart } from "heroicons-react";

type Props = {
  active: boolean;
  children: React.ReactNode;
};

const ElementPlan = ({ active, children }: Props) => {
  return (
    <li>
      <Heart
        size={16}
        style={{ marginRight: 10 }}
        className={active ? "color-primary" : "color-gray-medium"}
      />
      <span className={active ? "" : "unavailable"}>{children}</span>
    </li>
  );
};

export default ElementPlan;
