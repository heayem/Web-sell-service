import React from "react";
import styled from "styled-components";
import { Tree, TreeNode } from "react-organizational-chart";

// Styled container to make the chart responsive
const ChartContainer = styled.div`
    overflow-x: auto;
    padding: 1rem;
    display: flex;
    justify-content: center;
`;

// Styled component for the nodes
const StyledNode = styled.div`
    border-radius: 8px;
    display: inline-block;
`;

// Reusable OrganizationalChart component
export default function OrganizationalChart({ root, data }) {
    /**
     * Recursive function to render TreeNodes dynamically
     * @param {Array} nodes - Hierarchical array of child nodes
     */
    const renderTreeNodes = (nodes) => {
        return nodes.map((node, index) => (
            <TreeNode key={index} label={<StyledNode>{node.label}</StyledNode>}>
                {node.children && renderTreeNodes(node.children)}
            </TreeNode>
        ));
    };

    return (
        <ChartContainer>
            <Tree
                lineWidth="2px"
                lineHeight="20px" 
                lineColor="green"
                lineBorderRadius="10px"
                label={<StyledNode>{root}</StyledNode>}
            >
                {data && renderTreeNodes(data)}
            </Tree>
        </ChartContainer>
    );
}
