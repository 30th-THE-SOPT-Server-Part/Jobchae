interface Member {
    name: string;
    group: string;
}

interface Dinner {
    member: Member[];
    shuffle(array: Member[]): Member[];
    organize(array: Member[]): void;
}

const dinner: Dinner = {
    member: [
        {
            name: '채정아',
            group: 'ob'
        },
        {
            name: '김동재',
            group: 'yb'
        },
        {
            name: '강민재',
            group: 'yb'
        },
        {
            name: '김루희',
            group: 'ob'
        },
        {
            name: '박진수',
            group: 'ob'
        }
    ],  
    shuffle (array: Member[]) {
        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize (array: Member[]) {
        this.shuffle(array);
        const ob: Member | undefined = array.find((array) => array.group === "ob");
        const yb: Member | undefined = array.find((array) => array.group === "yb");

        // 타입가드
        if (ob && yb) {
            const dinnerMember: String[] = [ob.name, yb.name];
            console.log(
                `오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`
            );
        } else {
            console.log("undefined가 나왔겠지요");
        }
        // let yb: boolean = false;
        // let ob: boolean = false;
        // const dinnerMember = array.map((obj: Member) => {
        //     if (obj.group === 'yb') {
        //         if (!yb) {
        //             yb = true;
        //             return obj.name;
        //         }
        //     } else {
        //         if (!ob) {
        //             ob = true;
        //             return obj.name;
        //         }
        //     }
        //     return;
        // });
        // console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`);
    }
};

dinner.organize(dinner.member)