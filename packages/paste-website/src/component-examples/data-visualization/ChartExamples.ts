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
        <ChartProvider options={{
                type: "line",
                series: lineSeriesData,
                title: {
                    text: "Solar Employment Growth by Sector",
                },
            }}>
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

export const DefaultLineExample = `
const DefaultLineExample = () => {
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
        <ChartProvider
            options={{
                type: "line",
                series: lineSeriesData,
                title: {
                    text: "Solar Employment Growth by Sector",
                },
            }}
        >
            <BaseChart />
        </ChartProvider>
    );
};

render(<DefaultLineExample />);
`.trim();

export const LineTimeSeriesPanZoomExample = `
const LineTimeSeriesPanZoomExample = () => {
    const exampleDataStructure = [
        [1167609600000, 0.7537],
        [1167696000000, 0.7537],
        [1167782400000, 0.7559],
    ]

    return (
        <ChartProvider
            options={{
                type: "line",
                series: [{ data: usdEurData, name: "USD to EUR" }],
                title: {
                    text: "USD to EUR exchange rate",
                },
                subtitle: {
                    text: "Zooming and panning enabled - use drag to zoom and shift+drag to pan",
                },
                isXTimeAxis: true,
                zoomingType: "xy",
                panningType: "xy",
                xAxisTitle: {
                    text: "Date",
                },
                yAxisTitle: {
                    text: "Exchange rate",
                },
            }}
        >
            <BaseChart />
        </ChartProvider>
    );
};

render(<LineTimeSeriesPanZoomExample />);
`.trim();

export const DefaultAreaExample = `
const DefaultAreaExample = () => {
    const areaSeriesData = [
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
        <ChartProvider
            options={{
                type: "area",
                series: areaSeriesData,
                title: {
                    text: "Solar Employment Growth by Sector",
                },
            }}
        >
            <BaseChart />
        </ChartProvider>
    );
};

render(<DefaultAreaExample />);
`.trim();

export const AreaTimeSeriesPanZoomExample = `
const AreaTimeSeriesPanZoomExample = () => {
    const exampleDataStructure = [
        [1167609600000, 0.7537],
        [1167696000000, 0.7537],
        [1167782400000, 0.7559],
    ]

    return (
        <ChartProvider
            options={{
                type: "area",
                series: [{ data: usdEurData, name: "USD to EUR" }],
                title: {
                    text: "USD to EUR exchange rate",
                },
                subtitle: {
                    text: "Zooming and panning enabled - use drag to zoom and shift+drag to pan",
                },
                isXTimeAxis: true,
                zoomingType: "xy",
                panningType: "xy",
                xAxisTitle: {
                    text: "Date",
                },
                yAxisTitle: {
                    text: "Exchange rate",
                },
            }}
        >
            <BaseChart />
        </ChartProvider>
    );
};

render(<AreaTimeSeriesPanZoomExample />);
`.trim();

export const DefaultColumnExample = `
const DefaultColumnExample = () => {
    const columnSeriesData = [
        {
            name: "Apples",
            data: [3, 5, 1, 13],
        },
        {
            name: "Oranges",
            data: [14, 8, 8, 12],
        },
        {
            name: "Pear",
            data: [0, 2, 6, 3],
        },
    ]

    return (
        <ChartProvider
            options={{
                type: "column",
                series: columnSeriesData,
                title: {
                    text: "Fruit popularity",
                },
            }}
        >
            <BaseChart />
        </ChartProvider>
    );
};

render(<DefaultColumnExample />);
`.trim();

export const ColumnStackedNormalExample = `
const ColumnStackedNormalExample = () => {
    const columnSeriesData = [
        {
            name: "Apples",
            data: [3, 5, 1, 13],
        },
        {
            name: "Oranges",
            data: [14, 8, 8, 12],
        },
        {
            name: "Pear",
            data: [0, 2, 6, 3],
        },
    ]

    return (
        <ChartProvider
            options={{
                type: "column",
                series: columnSeriesData,
                title: {
                    text: "Fruit popularity",
                },
                stackingType: "normal",
                showDataLabels: true,
            }}
        >
            <BaseChart />
        </ChartProvider>
    );
};

render(<ColumnStackedNormalExample />);
`.trim();

export const ColumnStackedPercentExample = `
const ColumnStackedPercentExample = () => {
    const columnSeriesData = [
        {
            name: "Apples",
            data: [3, 5, 1, 13],
        },
        {
            name: "Oranges",
            data: [14, 8, 8, 12],
        },
        {
            name: "Pear",
            data: [0, 2, 6, 3],
        },
    ]

    return (
        <ChartProvider
            options={{
                type: "column",
                series: columnSeriesData,
                title: {
                    text: "Fruit popularity",
                },
                stackingType: "percent",
            }}
        >
            <BaseChart />
        </ChartProvider>
    );
};

render(<ColumnStackedPercentExample />);
`.trim();

export const ColumnGroupedAxisExample = `
const ColumnGroupedAxisExample = () => {
    const columnSeriesData = [
        {
            name: "Apples",
            data: [3, 5, 1, 13],
        },
        {
            name: "Oranges",
            data: [14, 8, 8, 12],
        },
        {
            name: "Pear",
            data: [0, 2, 6, 3],
        },
    ]

    return (
        <ChartProvider
            options={{
                type: "column",
                series: columnSeriesData,
                title: {
                    text: "Fruit popularity",
                },
                xAxisCategories: ["2020", "2021", "2022", "2023"],
            }}
        >
            <BaseChart />
        </ChartProvider>
    );
};

render(<ColumnGroupedAxisExample />);
`.trim();
