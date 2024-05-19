import { Cookie } from './types.ts';

// Cookies functions

export const getCookie = (req: Request, name: string): string | undefined => {
    const cookieHeader = req.headers.get('cookie') || '';
    const cookies = new Map(
        cookieHeader.split(';').map(cookie => {
            const [key, ...rest] = cookie.trim().split('=');
            return [key, decodeURIComponent(rest.join('='))];
        })
    );
    return cookies.get(name);
};

// Client-side
export const getProjectsFromCookie = (req: Request): Cookie[] => {
    const projectsCookie = getCookie(req, 'projectsCookie');
    return projectsCookie ? JSON.parse(projectsCookie) : [];
};

export const getProjectsFromCookieClient = (): Cookie[] => {
    const projectsCookie = document.cookie.split('; ').find(row => row.startsWith('projectsCookie='));
    return projectsCookie ? JSON.parse(decodeURIComponent(projectsCookie.split('=')[1])) : [];
};


// Server-side
export const getProjectsFromCookieServer = (req: Request): Cookie[] => {
    const projectsCookie = getCookie(req, 'projectsCookie');
    return projectsCookie ? JSON.parse(projectsCookie) : [];
};

export const saveProjectsToCookie = (projects: Cookie[]): void => {
    const serializedData = encodeURIComponent(JSON.stringify(projects));
    document.cookie = `projectsCookie=${serializedData}; path=/; max-age=31536000;`;
};

