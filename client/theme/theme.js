import { useContext } from 'react';
import { ThemeContext } from '../config/theme/theme.provider';

export default function () {
  const Theme = useContext(ThemeContext);
  return Theme;
};