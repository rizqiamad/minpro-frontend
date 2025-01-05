"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import axios from "@/helpers/axios";

// const chartData = [
//   { month: "January", desktop: 186 },
//   { month: "February", desktop: 305 },
//   { month: "March", desktop: 237 },
//   { month: "April", desktop: 73 },
//   { month: "May", desktop: 209 },
//   { month: "June", desktop: 214 },
// ]

const chartConfig = {
  active_event: {
    label: "Active Event",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface iEvent {
  month: string;
  active_event: number;
}

export default function GraphEvent() {
  const [chartData, setChartData] = useState<iEvent[] | null>(null);
  console.log(chartData);

  const getChartData = async () => {
    const { data } = await axios.get("/graph/eventaktif", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log(data);
    setChartData(data.result);
  };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Aktif</CardTitle>
        <CardDescription>
          Event Yang Sedang Aktif
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData!}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="active_event"
              type="linear"
              fill="var(--color-active_event)"
              fillOpacity={0.4}
              stroke="var(--color-active_event)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
       
      </CardFooter>
    </Card>
  );
}
