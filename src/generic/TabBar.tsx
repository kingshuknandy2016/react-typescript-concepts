/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */

import { MySocial } from '.';

interface TabBarProps<T> {
  items: T[];
  selectedItem: T;
  onTabClick: (item: T, selectedIndex: number) => void;
}
export const TabBar = <T extends MySocial>(props: TabBarProps<T>) => {
  const { items, selectedItem, onTabClick } = props;
  return (
    <>
      <div className="flex gap-x-3">
        {items.map((item, index) => {
          const activeCls =
            item.id === selectedItem.id
              ? 'bg-slate-500 text-white'
              : ' bg-slate-200';
          return (
            <div
              key={item.id}
              className={'py-2 px-4 rounded ' + activeCls}
              onClick={() => onTabClick(item, index)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </>
  );
};
