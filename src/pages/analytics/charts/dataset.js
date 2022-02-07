import {randomNumber} from "../../../Utils";

let mockArr = new Array(12).fill('');

let dataset = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
    datasets: [
        {
            label: 'Dataset 1',
            data: mockArr.map(item => randomNumber(-40, 40)),
            borderColor: 'rgb(255, 99, 132)',
        },
        {
            label: 'Dataset 2',
            data: mockArr.map(item => randomNumber(-40, 40)),
            borderColor: 'rgb(53, 162, 235)',
        },
    ],
}

export default dataset;