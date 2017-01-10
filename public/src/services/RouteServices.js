import { hashHistory } from 'react-router';

export function redirect(route) {
  return hashHistory.push(route);
}
