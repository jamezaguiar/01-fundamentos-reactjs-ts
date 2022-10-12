import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';
import classNames from 'classnames';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, className, ...props }: AvatarProps) {
  return (
    <img
      className={classNames(className, {
        [styles.avatarWithBorder]: hasBorder,
        [styles.avatar]: !hasBorder,
      })}
      {...props}
    />
  );
}
