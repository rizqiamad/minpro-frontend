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
  desktop: {
    label: "final_price",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface iTransaction {
  final_price: number;
  createdAt: string;
}

export default function GraphTransaction() {
  const [chartData, setChartData] = useState<iTransaction[]>([]);
  console.log("chartdata", chartData);

  const getChartData = async () => {
    const { data } = await axios.get("/graph/graphtransaction", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log("data", data);
    setChartData(data.result);
  };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Grafik Transaksi</CardTitle>
        <CardDescription>Transaksi</CardDescription>
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
              dataKey="createdAt"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              //   tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="final_price"
              type="linear"
              fill="var(--color-final_price)"
              fillOpacity={0.4}
              stroke="var(--color-final_price)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}
