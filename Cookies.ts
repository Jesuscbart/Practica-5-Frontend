import { Cookie } from './types.ts';

export const getProjectsFromCookie = (): Cookie[] => {
    const projectsCookie = document.cookie.split('; ').find(row => row.startsWith('projectsCookie='));
    return projectsCookie ? JSON.parse(decodeURIComponent(projectsCookie.split('=')[1])) : [];
};

export const saveProjectsToCookie = (projects: Cookie[]): void => {
    document.cookie = `projectsCookie=${encodeURIComponent(JSON.stringify(projects))}; path=/`;
};