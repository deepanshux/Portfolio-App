import {getToken, refreshSession} from '../src/sessionManager';

type APIRoute = {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    apiType?: string; 
}

type createRequestProps = {
    route: APIRoute;
    params?: any;
    body?: any;
}

export const sendRequest = async ({
    route,
    params = {},
    body = null
}: createRequestProps): Promise<any> => {
    try {
        const response  = await callAPI({route, params, body});
        if (response.status === 401 || response.status === 403) {
            // session might be expired, attempt refresh
            // refresh function should handle the logic of checking if the session is still valid
            // and update the session
            const success = await refreshSession();
            if (success) {
                // Retry the request after refreshing session
                return await callAPI({route, params, body});
            } else {
                console.error('Session refresh failed');
                // return null or handle the error as needed
                // This could be a good place to redirect to login or show an error message
                return null;
            }
        }
    } catch (error) {
        console.error('error sending request:', error);
        // return null or handle the error as needed
        return null
    }
}

const callAPI = async (props: createRequestProps) => {
    const route: APIRoute = {
        url: props.route.url,
        method: props.route.method,
    };

    return await fetch(route.url, {
        method: route.method,
        headers: getHeader(props),
        body: props.body ? JSON.stringify(props.body) : null
    })
}

const getHeader = (props: any) => {
    const token = getToken();
    // set header properties as per API requirements
    return {
        'Content-Type': 'application/json',
    };
}

function debounce(func: Function, delay: number) {
    let timeoutId: NodeJS.Timeout;
    return function(...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

function throttle(func: Function, limit: number) {
    let lastRan: number = 0;

    return function(...args: any[]) {
       const now = Date.now();
       if(now - lastRan >= limit) {
           lastRan = now;
            func(...args);
       }
    };
}