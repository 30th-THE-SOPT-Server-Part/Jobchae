interface ServerPart {
    name: string;
    age: number;
    group: string;
    mbti: string[];
}

const serverPart: ServerPart = {
    name: '김소령',
    age: 5,
    group: 'YB',
    mbti: ['ENFJ', 'ANGEL']
}

const serverMembers: Array<ServerPart> = [
    {
        name: '김소령',
        age: 5,
        group: 'YB',
        mbti: ['ENFJ', 'ANGEL']
    },
    {
        name: '김소령',
        age: 5,
        group: 'YB',
        mbti: ['ENFJ', 'ANGEL']
    }

];
console.log(serverPart);

interface Closet {
    name: string;
    shirt: number;
    pants: number;
    hat?: number;
    sunglass?: number; //optional
} 

const closet: Closet[] = [
    {
        name: '채정아',
        shirt: 1,
        pants: 2,
        hat: 4,
        sunglass: 2
    }
]