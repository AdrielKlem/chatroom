export const chatData = [
    {
        id: 1,
        username: 'John Doe',
        lastTime: '10:00',
        pictureUser: './src/assets/UserAvatarDefault.png', // Use "pictureUser" aqui
        isOpen: true,
        messages: [
            // ... mensagens da conversa ...
        ],
    },
    {
        id: 2,
        username: 'Jane Doe',
        lastTime: '11:30',
        pictureUser: 'https://picsum.photos/49',
        isOpen: false,
        messages: [
            // ... mensagens da conversa ...
        ],
    },
    {
        id: 3,
        username: 'Marry Doe',
        lastTime: '11:30',
        pictureUser: 'https://picsum.photos/48',
        isOpen: false,
        messages: [
            // ... mensagens da conversa ...
        ],
    },
    {
        id: 4,
        username: "Fabio Gramer",
        lastTime: "15:13",
        pictureUser: "https://picsum.photos/50",
        isOpen: false,
        messages: [
            {
                username: "Fabio Gramer",
                isSending: false,
                content: "Olá! Como vai?",
                timestamp: "20:11",
            },
            {
                username: "Você",
                isSending: true,
                content: "Oi, suave?",
                timestamp: "20:12",
            },
        ],
    },
]



  