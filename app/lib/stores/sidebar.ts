import { atom } from 'nanostores';

export const sidebarStore = atom<boolean>(false);

export function toggleSidebar() {
  sidebarStore.set(!sidebarStore.get());
}

export function openSidebar() {
  sidebarStore.set(true);
}

export function closeSidebar() {
  sidebarStore.set(false);
}