import React, {
    createContext,
    useState,
    useContext
} from 'react';

interface UserProviderProps {
    user: null;
    loading: boolean;
}
const LoadingContext = createContext<UserProviderProps>(
    {} as UserProviderProps,
);

interface UserProvider {
    children: React.ReactElement
}

const UserProvider: React.FC<UserProvider> = ({ children }): JSX.Element => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <LoadingContext.Provider
            value={{
                user,
                loading,
            }}>
            {children}
        </LoadingContext.Provider>
    );
};

function useUserData(): UserProviderProps {
    const context = useContext(LoadingContext);

    if (!context)
        throw new Error('useUploadPogress must be used within arn UserProvider');

    return context;
}

export { UserProvider, useUserData };
