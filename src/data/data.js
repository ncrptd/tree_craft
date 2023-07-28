import { v4 as uuidv4 } from "uuid";

const data = [
    {
        title: 'Webpage',
        id: uuidv4(),
        type: "container",
        content: '',
        children: [
            {
                title: 'Content Page',
                id: uuidv4(),
                type: "leaf",
                content: "<h1>Content Page</h1>"
            },
            {
                title: 'collection.1.1.2',
                id: uuidv4(),
                type: "container",
                content: "I am container of first main container",
                children: [
                    {
                        title: 'Editor',
                        id: uuidv4(),
                        type: "leaf",
                        content: "I am grand child of first main container"
                    }
                ]
            }
        ]
    },
    {
        title: 'collection.1.2',
        id: uuidv4(),
        type: "container",
        content: "I am Second main container",
        children: [
            {
                title: 'Quiz',
                id: uuidv4(),
                type: "leaf",
                content: "I am leaf of second main container"
            },
            {
                title: 'collection.1.2.2',
                id: uuidv4(),
                type: "container",
                content: "I am container of second main container",
                children: [
                    {
                        title: 'collection.1.2.2.1',
                        id: uuidv4(),
                        type: "container",
                        content: "i am grandchild of second main container",
                        children: []
                    }
                ]
            }
        ]
    }
];

export default data;