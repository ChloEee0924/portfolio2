"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidProps {
    chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [svg, setSvg] = useState<string>("");

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            theme: "base",
            themeVariables: {
                background: "transparent",
                fontFamily: "inherit",
                primaryColor: "#f3f4f6", // very light gray for nodes
                primaryTextColor: "#374151", // serene-dark
                primaryBorderColor: "#d1d5db", // smooth border
                lineColor: "#9ca3af", // gray line
            },
        });

        const renderChart = async () => {
            try {
                const id = `mermaid-svg-${Math.random().toString(36).substring(7)}`;
                const { svg } = await mermaid.render(id, chart);
                setSvg(svg);
            } catch (error) {
                console.error("Mermaid failed to render", error);
            }
        };

        renderChart();
    }, [chart]);

    return (
        <div
            ref={containerRef}
            className="mermaid flex justify-center items-center w-full bg-transparent"
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}
