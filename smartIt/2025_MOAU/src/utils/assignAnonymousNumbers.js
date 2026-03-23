export const assignAnonymousNumbers = (comments) => {
    let count = 1;
    const anonymousMap = new Map();

    const getAnonName = () => {
        const name = `익명${count}`;
        count++;
        return name;
    };

    const processUser = (userKey, isAnonymous) => {
        if (!isAnonymous) return null;

        if (!anonymousMap.has(userKey)) {
            anonymousMap.set(userKey, getAnonName());
        }
        return anonymousMap.get(userKey);
    };

    comments.forEach(comment => {
        const key = `c-${comment.id}`;
        comment.authoName = processUser(key, comment.isAnonymous);

        comment.replies.forEact(reply => {
            const key = `r-${reply.id}`;
            reply.authoName = processUser(key, reply.isAnonymous);
        });
    });

    return comments;
};