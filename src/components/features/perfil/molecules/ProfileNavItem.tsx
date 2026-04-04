import React from "react";
import Icon from "@/components/shared/atoms/Icon";

interface ProfileNavItemProps {
  icon: string;
  label: string;
  active?: boolean;
}

const ProfileNavItem: React.FC<ProfileNavItemProps> = ({
  icon,
  label,
  active = false,
}) => {
  return (
    <button
      type="button"
      className={`flex items-center gap-3 px-4 py-2.5 rounded-full font-medium transition-all w-full text-left cursor-pointer ${
        active
          ? "bg-primary text-white"
          : "text-slate-600 hover:bg-primary/10 hover:text-primary"
      }`}
    >
      <Icon name={icon} />
      <span>{label}</span>
    </button>
  );
};

export default ProfileNavItem;
