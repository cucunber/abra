import { useAppSelector } from "../../../../../shared/hooks/redux";
import { monitoring } from "../../../../../features/monitoring";
import { TickData } from "../../../../../entities/tickData/tickData";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { system } from "../../../../../features/system";
import {
  SYS_UNITS,
  convertBytesToUnits,
} from "../../../../../shared/utils/systemUnits";

// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const RAMMonitoring = () => {
  const ramData = useAppSelector(monitoring.selectors.selectRAM);
  const ram = useAppSelector(system.selectors.selectRAM);

  const firstPoint = ramData[0] || TickData({ tick: 0, value: 0 });

  const data = ramData.map((point) => ({
    time: point.tick - firstPoint.tick,
    size: point.value,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart key="lineChart" width={300} height={100} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <YAxis
          dataKey="size"
          type="number"
          domain={[0, ram.size]}
          tickFormatter={(value) =>
            convertBytesToUnits(value, SYS_UNITS.GiB).toFixed(2)
          }
        />
        <XAxis
          dataKey="time"
          type="number"
          tickFormatter={() => new Date().toLocaleTimeString()}
        />
        <Line
          dot={false}
          isAnimationActive={false}
          type="monotone"
          dataKey="size"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
