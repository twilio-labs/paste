export const SimpleChartProviderExample = `
const ChartProviderExample = () => {
    const lineSeriesData = [
        {
            name: "Installation",
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
            name: "Manufacturing",
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
    ]

    return (
        <ChartProvider highchartsOptions={{ chart: { type: "line" }, series: lineSeriesData }}>
            <BaseChart />
        </ChartProvider>
    );
};

render(<ChartProviderExample />);
`.trim();

export const CustomChartProviderExample = `
const ChartProviderExample = () => {
    const lineSeriesData = [
        {
            name: "Installation",
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
            type: "line",
        },
        {
            name: "Manufacturing",
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
            type: "line",
        },
        {
            name: "Sales & Distribution",
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
            type: "column",
        },
        {
            name: "Project Development",
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
            type: "column",
        },
    ]

    return (
        <ChartProvider highchartsOptions={{title: {floating: true, align: "right", text: "Custom charting title"}, series: lineSeriesData}}>
            <BaseChart />
        </ChartProvider>
    );
};

render(<ChartProviderExample />);
`.trim();
