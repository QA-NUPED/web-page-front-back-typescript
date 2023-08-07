interface userCreateIterface {
    user: {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
    };
    createUser: () => void;
};

export { userCreateIterface };