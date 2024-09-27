import React, { createContext, useContext, useState } from 'react';

// Define a type for your user data
type User = {
    username: string;
    firstName: string;
    lastName: string;
};

// Create a context type
type AuthContextType = {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
};

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [user, setUser] = useState<User | null>(() => {
            const storedUser = sessionStorage.getItem('user');
            return storedUser ? JSON.parse(storedUser) : null;
        });

    const login = (userData: User) => {
        setUser(userData);
        // Optionally, you could set session storage here
        sessionStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem('user'); // Clear user data from session storage
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for using the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
