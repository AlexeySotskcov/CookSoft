import { LightningElement } from "lwc";

export default class ChartSelector extends LightningElement {
    value = "barChart";

    get options() {
        return [
            { label: "Bar", value: "barChart" },
            { label: "Column", value: "columnChart" },
            { label: "Line", value: "lineChart" },
            { label: "Pie", value: "pieChart" },
            { label: "Donut", value: "donutChart" },
            { label: "Funnel", value: "funnelChart" },
            { label: "Scatter", value: "scatterChart" }
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}
