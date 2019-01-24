let state = {
    profilePage : {
        postData : [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: "It's my first post", likesCount: 7}
        ]
    },
    messagesPage : {
        dialogsData : [
            { id: 1, name: 'Fedor' },
            { id: 2, name: 'Petya' },
            { id: 3, name: 'Viktor' },
            { id: 4, name: 'John' },
            { id: 5, name: 'Dima' }
        ],    
        messagesData : [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are You?' },
            { id: 3, message: 'All gut!' },
            { id: 4, message: 'Ok.' }
        ]
    }     
}

export default state