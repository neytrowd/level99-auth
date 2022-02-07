import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import dataset from "./dataset";
import options from "./options";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
ChartJS.defaults.color = '#fff'

const Charts = () => {

    return (
        <div>
            <Line
                type={'line'}
                data={dataset}
                options={options}
            />
        </div>
    )
}

export default Charts;