
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "./ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import PropTypes from 'prop-types';

export function BarGraph({ config, data,title }) {
  const ticks= title==="Count"?[1,2,3]:[20000,40000,60000,80000,100000]
  return (
    <Card>
      <CardContent>
        <ChartContainer config={config}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={5} 
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 11)} 
              height={50} 
              tick={{ fontSize: 12 }} 
              angle={-40} 
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}

              ticks={ticks}
              label={{
                value:title,
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle", fontSize: 12 },
              }}
            />
             <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

BarGraph.propTypes = {
  config: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

