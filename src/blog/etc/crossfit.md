# Crossfit terms

<toastGrid 
    v-bind:data = "[
        { 
            name: 'WOD',
            fullname: 'Workout Of the Day',
            korean: '와드',
            desc: '그날의 운동'
        },
        { 
            name: 'AMRAP',
            fullname: 'As Many Rounds/Reps As Possible',
            korean: '암랩/앰랩',
            desc: '주어진 시간 안에 가능한 많은 라운드 수행하기'
        },
        { 
            name: 'EMOM',
            fullname: 'Every Minute On the Minute',
            korean: '이맘/이엠오엠',
            desc: '1분마다 정해진 동작 수행하기'
        },
        { 
            name: 'FT',
            fullname: 'For Time',
            korean: '',
            desc: '최대한 빠르게 주어진 WOD 끝내기'
        },
        { 
            name: 'Round',
            fullname: '',
            korean: '',
            desc: 'WOD 한 사이클'
        },
        { 
            name: 'Rep',
            fullname: 'Repetition',
            korean: '',
            desc: '개수로 인정됨'
        },
        { 
            name: 'No Rep',
            fullname: '',
            korean: '',
            desc: '개수로 인정되지 않음'
        },
        { 
            name: 'Time cap',
            fullname: 'Time Capacity',
            korean: '',
            desc: '제한시간. 주로 For time 과 같이 쓰인다'
        },
        { 
            name: 'Odd',
            fullname: '',
            korean: '',
            desc: '홀수 분(minute)'
        },
        { 
            name: 'Even',
            fullname: '',
            korean: '',
            desc: '짝수 분(minute)'
        },
        { 
            name: 'Rx\'d',
            fullname: '',
            korean: '알엑스디',
            desc: '주어진 WOD를 스케일링 없이 그대로 해내는것'
        },
        { 
            name: 'Scale',
            fullname: '',
            korean: '',
            desc: '스케일링'
        },
    ]"
    v-bind:columns = "[
        {
            header: 'name',
            name: 'name',
            width: '100'
        },
        {
            header: 'full name',
            name: 'fullname',
            width: '200'
        },
        {
            header: 'korean',
            name: 'korean',
            width: '100'
        },
        {
            header: 'desc',
            name: 'desc',
        },
    ]"
    v-bind:options = "{
        scrollX: false,
        scrollY: false,
        draggable: false,
        width: '800',
        // bodyHeight: 300,
        columnOptions: {                        // [ columnOptions ]
            minWidth: 50,                       //  minWidth : 최소 너비 사이즈
            resizable: true,                    //  resizable : 컬럼의 고정 폭을 조정 여부(boolean).
        },
    }"
/>