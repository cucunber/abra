import { useAppSelector } from "../../../../../shared/hooks/redux"
import { monitoring } from "../../../../../features/monitoring";
import { TickData } from "../../../../../entities/tickData/tickData";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { system } from "../../../../../features/system";
import { SYS_UNITS, convertBytesToUnits } from "../../../../../shared/utils/systemUnits";

// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const HDDMonitoring = () => {
    const hddData = useAppSelector(monitoring.selectors.selectHDD);
    const hdd = useAppSelector(system.selectors.selectHDD);

    const firstPoint = hddData[0] || TickData({ tick: 0, value: 0 });

    const data = hddData.map((point) => ({ time: point.tick - firstPoint.tick, size: point.value }));

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart key="lineChart" width={300} height={100} data={data}>
                <YAxis dataKey="size" type="number" domain={[0, hdd.size]} 
                    tickFormatter={(value) => convertBytesToUnits(value, SYS_UNITS.GiB).toFixed(2)} />
                <XAxis dataKey="time" type="number" tickFormatter={() => new Date().toLocaleTimeString()} />
                <Line dot={false} isAnimationActive={false} type="monotone" dataKey="size" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    )
}