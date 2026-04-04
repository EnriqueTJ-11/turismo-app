import React from "react";
import Icon from "@/components/shared/atoms/Icon";
import { type ProfileHistoryItem } from "@/types/profile";

interface ProfileHistoryRowProps {
  item: ProfileHistoryItem;
}

const ProfileHistoryRow: React.FC<ProfileHistoryRowProps> = ({ item }) => {
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-6 py-4 font-medium text-sm text-slate-900">
        {item.title}
      </td>
      <td className="px-6 py-4 text-sm text-slate-500">{item.date}</td>
      <td className="px-6 py-4 text-sm">
        <span className="flex items-center gap-1 text-slate-400">
          <Icon name="check_circle" className="text-xs" />
          {item.status}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <button
          type="button"
          className="text-primary text-xs font-bold hover:underline cursor-pointer rounded-full px-3 py-1"
        >
          {item.actionLabel}
        </button>
      </td>
    </tr>
  );
};

export default ProfileHistoryRow;
