// Bar
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
// export default ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// Line
// import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, LineElement, PointElement} from 'chart.js'
// export default ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, LineElement, PointElement)

// Doughnut
// import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'
// export default ChartJS.register(Tooltip, Legend, ArcElement)

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
} from 'chart.js'

export default ChartJS.register(
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement
)
